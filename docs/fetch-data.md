A very useful thing when working with Optimizely Graph is codegen for GraphQL Schema - @graphql-codegen/cli. With this tool, all we need to do is create the appropriate snippets or queries for our Optimizely Graph, and the CLI will generate a fully-typed SDK for us.

## Setting up GraphQL Codegen

1. First, install the following dependencies:

```bash
npm i -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-generic-sdk @graphql-codegen/typescript-operations
```

2. Create a config file named `codegen.yaml` in the root of your project:

```yaml
schema: ${OPTIMIZELY_API_URL}?auth=${OPTIMIZELY_SINGLE_KEY}
documents: './lib/optimizely/queries/**/*.graphql'
generates:
  './lib/optimizely/types/generated.ts':
    plugins:
      - 'typescript'
      - 'typescript-operations'
      - 'typescript-generic-sdk'
    config:
      rawRequest: true
      avoidOptionals: true
```

3. Add a `gen-types` script to your `package.json` to run Codegen:

```json
{
  "scripts": {
    "gen-types": "graphql-codegen -r dotenv/config --config ./codegen.yaml"
  }
}
```

This configuration will ensure that our SDK and types will be generated in the `./lib/optimizely/types/generated.ts` file based on the Optimizely Graph schema and fragments and queries defined in the `./lib/optimizely/queries/*` directory.

## Creating a Custom Fetcher

Let's create a custom fetcher that we will use to query data from the Optimizely Graph. Create a new file, for example, `lib/optimizely/fetch.ts`:

```typescript
import { DocumentNode } from 'graphql'
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
  errors: unknown[]
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
```

Note: The `process.env.OPTIMIZELY_PREVIEW_SECRET` is a generated base64 string based on your AppKey and AppSecret credentials.

## Creating a Wrapper Function

Let's create a wrapper function around our `optimizelyFetch` that maps the values properly to the `getSdk` function, which is an auto-generated SDK. Add this to the same file or create a new one:

```typescript
import { DocumentNode } from 'graphql'
import { print } from 'graphql/language/printer'
import { getSdk } from '../types/generated'

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

  return {
    data: request.data,
    _headers: request.headers,
  }
}

export const optimizely = getSdk(requester)
```

### Type Guards

```typescript
export interface VercelErrorLike {
  status: number
  message: Error
  cause?: Error
}

export const isObject = (
  object: unknown
): object is Record<string, unknown> => {
  return typeof object === 'object' && object !== null && !Array.isArray(object)
}

export const isVercelError = (error: unknown): error is VercelErrorLike => {
  if (!isObject(error)) return false

  if (error instanceof Error) return true

  return findError(error)
}

function findError<T extends object>(error: T): boolean {
  if (Object.prototype.toString.call(error) === '[object Error]') {
    return true
  }

  const prototype = Object.getPrototypeOf(error) as T | null

  return prototype === null ? false : findError(prototype)
}
```

## Creating Your First Query

In the `./lib/optimizely/queries` directory (as defined in the `documents` field in the codegen configuration file), create your first query:

```graphql
# GetContentByGuid.graphql

query GetContentByGuid($guid: String) {
  _Content(where: { _metadata: { key: { eq: $guid } } }) {
    items {
      _metadata {
        displayName
        version
        key
        url {
          base
          internal
          hierarchical
          default
          type
        }
      }
    }
  }
}
```

After properly configuring codegen and running the command `npm run gen-types` that generates the SDK, you'll get a fully-typed client that you can use to fetch data from Optimizely Graph.

## Usage of SDK

```typescript
// page component

const { data } = await optimizely.GetContentByGuid({ guid: '' })
```

Remember to set up your environment variables (`OPTIMIZELY_API_URL`, `OPTIMIZELY_SINGLE_KEY`, and `OPTIMIZELY_PREVIEW_SECRET`) in your `.env` file or your deployment platform.
