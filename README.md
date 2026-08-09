# Optimizely SaaS CMS + Next.js 15

A comprehensive starter template for building modern websites with Optimizely SaaS CMS and Next.js 15 App Router. This template serves as an excellent starting point for projects integrating with Optimizely SaaS CMS.

This project was built based on a free course on how to get started with Optimizely SaaS CMS. You can find step-by-step information on how this project was built at: https://opti-masterclass.vercel.app

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fszymonuryga%2FOptimizely-SaaS-CMS-Next.js-15&env=OPTIMIZELY_API_URL,OPTIMIZELY_SINGLE_KEY,OPTIMIZELY_PREVIEW_SECRET,OPTIMIZELY_REVALIDATE_SECRET,OPTIMIZELY_START_PAGE_URL,NEXT_PUBLIC_CMS_URL)

> Note: This template requires an Optimizely SaaS CMS instance to retrieve content. Please connect with the [Optimizely](https://www.optimizely.com/products/content-management/) team to receive CMS access.

## Features

- ⚡ **Next.js 15** with App Router
- 🏗️ **Static Site Generation (SSG)** for optimal performance
- 🔄 **On-Demand Cache Revalidation** via webhooks for real-time content updates
- 👁️ **Draft Mode** for content previews
- 🌐 **Multi-language Support** with automatic language detection
- 🧩 **Block Factory Mapper** for dynamic content rendering
- 🎨 **Visual Builder Integration** for intuitive content editing
- 🔍 **SEO Optimized** with metadata support
- 💅 **Tailwind CSS & shadcn/ui** for beautiful, responsive designs
- 📊 **TypeScript** for type safety
- 📝 **GraphQL Codegen** for type-safe API calls

## Important Note

- This repository includes an `ExportedFile.episerverdata` file in the root folder, which contains all initial content for Optimizely SaaS CMS. You can import this file into your Optimizely instance to get started with pre-configured content.
- This template focuses on core functionality that is common to all projects, such as fetching content from Optimizely Graph, preview functionality, routing, Visual Builder and cache revalidation. The design is intentionally simple and serves as an example — each project will have its own design requirements.

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- An Optimizely SaaS CMS instance
- Optimizely Content Graph API key

### Setup Instructions

- Clone the repository:

```bash
git clone https://github.com/szymonuryga/Optimizely-SaaS-CMS-Next.js-15.git
cd Optimizely-SaaS-CMS-Next.js-15
```

- Install dependencies:

```shellscript
npm install
```

- Set up environment variables:

Create a `.env` file in the root directory with the following variables:

```plaintext
OPTIMIZELY_API_URL="https://cg.optimizely.com/content/v2"
OPTIMIZELY_SINGLE_KEY=""
OPTIMIZELY_PREVIEW_SECRET=""
OPTIMIZELY_REVALIDATE_SECRET=""
OPTIMIZELY_START_PAGE_URL=""
NEXT_PUBLIC_CMS_URL="https://app-{your-data}.cms.optimizely.com"
```

- Generate GraphQL types and SDK with all methods:

```shellscript
npm run gen-types
```

- Start the development server:

```shellscript
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) in your browser.

## Documentation

This project includes comprehensive documentation on various aspects of integrating Next.js with Optimizely SaaS CMS:

- [Project Setup](https://github.com/szymonuryga/Optimizely-SaaS-CMS-Next.js-15/blob/main/docs/project-setup.md) - Basic setup instructions
- [Block Factory Mapper](https://github.com/szymonuryga/Optimizely-SaaS-CMS-Next.js-15/blob/main/docs/block-factory-mapper.md) - Pattern for dynamically rendering content blocks
- [Fetching Data](https://github.com/szymonuryga/Optimizely-SaaS-CMS-Next.js-15/blob/main/docs/fetch-data.md) - How to fetch data from Optimizely Graph
- [Cache Revalidation](https://github.com/szymonuryga/Optimizely-SaaS-CMS-Next.js-15/blob/main/docs/cache-revalidation.md) - Implementing cache revalidation with webhooks
- [Visual Builder](https://github.com/szymonuryga/Optimizely-SaaS-CMS-Next.js-15/blob/main/docs/visual-builder.md) - Integration with Optimizely's Visual Builder
- [Draft Mode](https://github.com/szymonuryga/Optimizely-SaaS-CMS-Next.js-15/blob/main/docs/draft-mode.md) - Setting up preview/draft mode
- [Multi-language Support](https://github.com/szymonuryga/Optimizely-SaaS-CMS-Next.js-15/blob/main/docs/multi-language.md) - Implementing localization

👉 A complete step-by-step guide and course on how to build everything from scratch can be found here: https://opti-masterclass.vercel.app

## Importing Content to Optimizely

1. Log in to your Optimizely SaaS CMS instance
2. **Important**: Make sure to add "Polish" language in your CMS settings before importing content to ensure successful import
3. Go to Admin > Tools > Import Data
4. Upload the `ExportedFile.episerverdata` file from the root of this project
5. Follow the import wizard to complete the process

## Environment Variables

- `OPTIMIZELY_API_URL`: The base URL for the Optimizely Graph (typically "https://cg.optimizely.com/content/v2")
- `OPTIMIZELY_SINGLE_KEY`: Your Optimizely Content Graph API key
- `OPTIMIZELY_PREVIEW_SECRET`: Generated base64 string based on your AppKey and AppSecret credentials. For more details I recommend you to take a look at Kunal's article: https://kunalshetye.com/posts/optimizely-graph-using-appkey-appsecret/
- `OPTIMIZELY_REVALIDATE_SECRET`: A secret key used for revalidating cached content
- `OPTIMIZELY_START_PAGE_URL`: Defines the full route URL of the Start Page in Optimizely CMS. When using hierarchical routing, Optimizely does not assign the root path `/` to the Start Page by default. Instead, the Start Page must have an explicit URL like "/start-page". This impacts the overall routing logic and cache revalidation mechanisms. Therefore, this variable must be set manually to indicate the correct URL of the Start Page.
- `NEXT_PUBLIC_CMS_URL`: The URL of your SaaS CMS instance

## Future Enhancements

This template is actively maintained and will be updated to support new features and improvements in Optimizely SaaS CMS as they become available. Stay tuned for future enhancements!

## License

[MIT](LICENSE)
