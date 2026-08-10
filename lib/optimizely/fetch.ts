import { DocumentNode, GraphQLError } from 'graphql'
import { print } from 'graphql/language/printer'
import { getSdk } from './types/generated'
import { isVercelError } from '../type-guards'

interface OptimizelyFetchOptions {
  headers?: Record<string, string>
  cache?: RequestCache
  preview?: boolean
  cacheTag?: string
}

interface OptimizelyFetch<Variables> extends OptimizelyFetchOptions {
  query: string
  variables?: Variables
}

interface GraphqlResponse<Response> {
  errors?: GraphQLError[]
  data: Response
}

const optimizelyFetch = async <Response, Variables = object>({
  query,
  variables,
  headers,
  cache = 'force-cache',
  preview,
  cacheTag,
}: OptimizelyFetch<Variables>): Promise<
  GraphqlResponse<Response> & { headers: Headers }
> => {
  const configHeaders = headers ?? {}

  if (preview) {
    configHeaders.Authorization = `Basic ${process.env.OPTIMIZELY_PREVIEW_SECRET}`
    cache = 'no-store'
  }
  const cacheTags = ['optimizely-content']
  if (cacheTag) {
    cacheTags.push(cacheTag)
  }

  try {
    const endpoint = `${process.env.OPTIMIZELY_API_URL}?auth=${process.env.OPTIMIZELY_SINGLE_KEY}`
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...configHeaders,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      next: { tags: cacheTags },
    })

    const result = await response.json()

    return {
      ...result,
      headers: response.headers,
    }
  } catch (e) {
    if (isVercelError(e)) {
      throw {
        status: e.status || 500,
        message: e.message,
        query,
      }
    }

    throw {
      error: e,
      query,
    }
  }
}

async function requester<R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: OptimizelyFetchOptions
) {
  const request = await optimizelyFetch<R>({
    query: print(doc),
    variables: vars ?? {},
    ...options,
  })

  // `errors` must be passed through: several callers destructure it to
  // distinguish "content doesn't exist" (render 404) from "the request
  // failed" (don't cache a 404!). Dropping it here made every Graph
  // failure look like missing content.
  return {
    data: request.data,
    errors: request.errors,
    _headers: request.headers,
  }
}

export const optimizely = getSdk(requester)
