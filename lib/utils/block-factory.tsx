// lib/optimizely/utils/block-factory.ts

import { createElement, ComponentType } from 'react'

type ComponentMap = Record<string, ComponentType<any>>

export default function blocksMapperFactory<TMap extends ComponentMap>(
  contentTypeMap: TMap
) {
  function factory({
    typeName,
    props,
  }: {
    typeName: string | undefined
    props: Record<string, unknown>
  }) {
    const Component = typeName ? contentTypeMap[typeName] : undefined

    if (!Component) {
      return null
    }

    return createElement(Component, props)
  }

  return factory
}
