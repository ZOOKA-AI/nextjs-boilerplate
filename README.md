# Next.js Boilerplate

A modern, production-ready Next.js boilerplate with TypeScript, Tailwind CSS v4, and ESLint configuration.

## Features

- ⚡ **Next.js 16.1.6** - Latest version with App Router
- ⚛️ **React 19.2.0** - Latest React features
- 🎨 **Tailwind CSS v4** - Modern utility-first CSS framework
- 📘 **TypeScript** - Type-safe development
- 🔍 **ESLint** - Code quality and consistency
- 🌙 **Dark Mode** - Built-in dark mode support
- 🎯 **Geist Font** - Beautiful typography with Geist and Geist Mono fonts

## Getting Started

### Prerequisites

- Node.js 20.9.0 or later
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ZOOKA-AI/nextjs-boilerplate.git
cd nextjs-boilerplate
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
nextjs-boilerplate/
├── app/                    # App router directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page component
│   └── globals.css        # Global styles
├── public/                # Static assets
├── .github/               # GitHub configuration
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── postcss.config.mjs     # PostCSS configuration
└── package.json           # Project dependencies and scripts
```

## Customization

### Styling

This boilerplate uses Tailwind CSS v4. You can customize the design by:

- Editing `app/globals.css` for global styles and CSS variables
- Modifying Tailwind configuration in `postcss.config.mjs`
- Using Tailwind utility classes in your components

### TypeScript Configuration

TypeScript is configured in `tsconfig.json`. Path aliases are set up with `@/*` pointing to the root directory for easier imports.

### Next.js Configuration

Customize Next.js behavior in `next.config.ts`. Add your environment variables, custom headers, redirects, and more.

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ZOOKA-AI/nextjs-boilerplate)

### Other Platforms

This boilerplate can be deployed on any platform that supports Next.js:

- **Netlify** - [Documentation](https://docs.netlify.com/frameworks/next-js/)
- **AWS Amplify** - [Documentation](https://docs.amplify.aws/guides/hosting/nextjs/)
- **Docker** - Build a container with `npm run build` and `npm run start`

## Learn More

To learn more about the technologies used in this boilerplate:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn React
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn Tailwind CSS
- [TypeScript Documentation](https://www.typescriptlang.org/docs) - Learn TypeScript

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you find this boilerplate helpful, please consider giving it a ⭐ on GitHub!