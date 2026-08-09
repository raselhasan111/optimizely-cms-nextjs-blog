The Block Factory Mapper pattern helps render different content blocks dynamically in your Next.js application. This pattern is crucial for creating flexible and maintainable content-driven websites.

## Understanding the Block Factory Mapper

The Block Factory Mapper is a design pattern that allows for dynamic rendering of different types of content blocks. It's particularly useful when working with a headless CMS like Optimizely, where the structure and types of content can vary significantly.

### Key Components

1. **ContentAreaMapper**: Renders an array of content blocks
2. **Block Component**: Connects the mapper to individual block components
3. **Block Factory**: Creates the right component based on block type

## Implementation Steps

### 1. Create the Block Factory

The Block Factory is where the magic happens.

```typescript
// lib/utils/block-factory.ts

import { createElement, ComponentType } from 'react'

type ComponentMap = Record<string, ComponentType<any>>

export default function blocksMapperFactory<TMap extends ComponentMap>(
  contentTypeMap: TMap
) {
  function factory<TypeName extends keyof TMap>({
    typeName,
    props,
  }: {
    typeName: TypeName
    props: React.ComponentProps<TMap[TypeName]>
  }) {
    const Component = contentTypeMap[typeName]

    if (!Component) {
      return null
    }

    return createElement(Component, props)
  }

  return factory
}
```

This factory function is a masterpiece of flexibility:

- The `blocksMapperFactory` function returns a `factory` function that can create any type of block component based on the `typeName`.
- It leverages React's `createElement` function to dynamically instantiate components, allowing for maximum flexibility in component creation.
- The function includes a null check to gracefully handle cases where a component type is not found in the `contentTypeMap`.

### 2. Set Up Block Components Registry

The `Block` component serves as the bridge between our ContentAreaMapper and the individual block components:

```typescript
// components/content-area/block.tsx

import dynamic from 'next/dynamic'
import blocksMapperFactory from '@/lib/utils/block-factory'

// Dynamically import each block
const ContactBlock = dynamic(() => import('../block/contact-block'))
const HeroBlock = dynamic(() => import('../block/hero-block'))
const LogosBlock = dynamic(() => import('../block/logos-block'))
const PortfolioGridBlock = dynamic(
  () => import('../block/portfolio-grid-block')
)
const ServicesBlock = dynamic(() => import('../block/services-block'))
const TestimonialsBlock = dynamic(() => import('../block/testimonials-block'))

// Map the dynamically imported
export const blocks = {
  ContactBlock,
  HeroBlock,
  LogosBlock,
  PortfolioGridBlock,
  ServicesBlock,
  TestimonialsBlock,
} as const

export default blocksMapperFactory(blocks)
```

It uses Next.js's `dynamic` function to implement code splitting, ensuring that block components are loaded only when needed.

### 3. Create the ContentAreaMapper

The `ContentAreaMapper` component is the heart of our block rendering system.

```typescript
// components/content-area/mapper.tsx

import Block from './block';

function ContentAreaMapper({
  blocks,
  preview = false
}: {
  blocks?: any[] | null;
  preview?: boolean;
}) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <>
      {blocks?.map(({ __typename, ...props }, index) => (
        <Block
          key={`${__typename satisfies string}--${index}`}
          typeName={__typename}
          props={{
            ...props,
            isFirst: index === 0,
            preview
          }}
        />
      ))}
    </>
  );
}

export default ContentAreaMapper;
```

This component is designed with flexibility in mind:

- It accepts an array of `blocks` and a `preview` flag as props.
- It maps over each block, extracting the crucial `__typename` property, which serves as the identifier for the block type.
- The remaining properties are passed to the `Block` component, along with additional data like `isFirst` (useful for preloading the first image on the page) and the `preview` status.

### 4. Example of use on the page

```typescript
// app/page.tsx

import { Suspense } from 'react';
import { optimizely } from 'lib/optimizely/fetch';
import ContentAreaMapper from 'components/content-area-mapper';

export default async function HomePage() {
  const pageResponse = await optimizely.GetStartPage();

  const startPage = pageResponse.data?.StartPage?.items?.[0];
  const blocks = (startPage?.Blocks ?? []).filter((block) => block !== null && block !== undefined);

  return (
    <>
      <Suspense>
        <ContentAreaMapper blocks={blocks} />
      </Suspense>
    </>
  );
}

```

## Benefits

- **Flexibility**: Easily add or remove block types
- **Performance**: Only load the blocks you need with dynamic imports
- **Maintainability**: Each block is isolated and independently updatable

## Conclusion

This pattern works well for content-driven websites, especially when using a headless CMS like Optimizely because the pattern creates a scalable, performant, and maintainable codebase that can effortlessly adapt to evolving content requirements.

As your content model grows and changes, you may need to refine existing block components or introduce new ones. However, the robust structure provided by this pattern ensures that such changes remain straightforward and manageable.
