# Next.js Boilerplate

A modern, production-ready Next.js boilerplate with TypeScript, Tailwind CSS, and ESLint configured for rapid web application development.

## 🚀 Features

- **Next.js 16** - The latest version of Next.js with App Router
- **React 19** - The latest version of React
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS v4** - Modern utility-first CSS framework
- **ESLint** - Code linting and formatting
- **Geist Font** - Beautiful typography with next/font optimization
- **Dark Mode Ready** - Built-in dark mode support

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher (or yarn/pnpm/bun)

## 🛠️ Getting Started

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
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Building for Production

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## 📁 Project Structure

```
nextjs-boilerplate/
├── app/
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   └── favicon.ico       # Favicon
├── public/               # Static files
├── .github/              # GitHub configuration
│   └── workflows/        # GitHub Actions workflows
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration (if exists)
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies
└── README.md            # This file
```

## 🎨 Customization

### Styling

This project uses Tailwind CSS for styling. You can customize the theme by modifying the Tailwind configuration.

### Fonts

This project uses the [Geist](https://vercel.com/font) font family, automatically optimized via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts).

### Metadata

Update the application metadata in `app/layout.tsx` to customize the title, description, and other SEO-related information.

## 📚 Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn about React
- [TypeScript Documentation](https://www.typescriptlang.org/docs) - Learn about TypeScript
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ZOOKA-AI/nextjs-boilerplate)

### Other Platforms

This Next.js application can be deployed to any platform that supports Node.js:

- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **ZOOKA-AI** - [GitHub Profile](https://github.com/ZOOKA-AI)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)

## 📮 Support

If you have any questions or need help, please open an issue in the [GitHub repository](https://github.com/ZOOKA-AI/nextjs-boilerplate/issues).
