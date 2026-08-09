# Project Setup

## Setting up Next.js

To set up the latest version of Next.js in a folder named 'opti-masterclass', follow these steps:

1. Open your terminal and navigate to the directory where you want to create your project.
2. Run the following command:

```bash
npx create-next-app@latest opti-masterclass
```

3. You'll be prompted with several options. Here are the recommended choices:

   - Would you like to use TypeScript? Yes
   - Would you like to use ESLint? Yes
   - Would you like to use Tailwind CSS? Yes
   - Would you like to use `src/` directory? No
   - Would you like to use App Router? Yes
   - Would you like to use Turbopack for `next dev`? No
   - Would you like to customize the default import alias (`@/*` by default)? No

4. Once the installation is complete, navigate into your project folder:

```bash
cd opti-masterclass
```

## Setting up Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```bash
OPTIMIZELY_API_URL="https://cg.optimizely.com/content/v2"
OPTIMIZELY_SINGLE_KEY=""
OPTIMIZELY_PREVIEW_SECRET=""
OPTIMIZELY_REVALIDATE_SECRET=""
NEXT_PUBLIC_CMS_URL="https://app-{your-data}.cms.optimizely.com"
```

Here's a description of each environment variable:

- `OPTIMIZELY_API_URL`: The base URL for the Optimizely Content Graph API. This is typically set to "https://cg.optimizely.com/content/v2".
- `OPTIMIZELY_SINGLE_KEY`: Your Optimizely Content Graph API key. This is used to authenticate your requests to the API.
- `OPTIMIZELY_PREVIEW_SECRET`: Generated base64 string based on your AppKey and AppSecret credentials. For more details I recommend you to take a look at [Kunal’s article](https://kunalshetye.com/posts/optimizely-graph-using-appkey-appsecret/).`
- `OPTIMIZELY_REVALIDATE_SECRET`: A secret key used for revalidating cached content. This should also be a secure, randomly generated string.
- `NEXT_PUBLIC_CMS_URL`: The URL of the SaaS CMS instance, will be used to add the `communicationinjector.js` script for the preview mode.

Make sure to keep these environment variables secure and never commit them to your version control system. Add `.env` to your `.gitignore` file to prevent accidental commits.

## Adding shadcn/ui

[shadcn/ui](https://ui.shadcn.com/docs) is a collection of re-usable components built using Radix UI and Tailwind CSS. It's not a component library, but rather a set of components that you can copy and paste into your projects.

To add shadcn/ui to your project:

1. Run the following command in your project directory:

```bash
npx shadcn@latest init
```

2. You'll be prompted with several options. Here are the recommended choices:

   - Would you like to use TypeScript (recommended)? Yes
   - Which style would you like to use? New York
   - Which color would you like to use as base color? Slate
   - Do you want to use CSS variables for colors? Yes

3. This will set up the necessary configuration files and add the base styles to your project.

## Adding Prettier Configuration

To add Prettier to your project for consistent code formatting:

1. Install Prettier and its plugins:

```bash
npm install --save-dev prettier prettier-plugin-tailwindcss
```

2. Create a `.prettierrc` file in the root of your project:

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

3. Create a `.prettierignore` file to exclude certain files and directories:

```bash
node_modules
.next
public
```

4. Add a script to your `package.json` to run Prettier:

```json
{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

Now you can run `npm run format` to format your entire project.

With these steps completed, you have set up a Next.js project with shadcn/ui, Prettier configuration, and the necessary environment variables for working with Optimizely Content Graph.
