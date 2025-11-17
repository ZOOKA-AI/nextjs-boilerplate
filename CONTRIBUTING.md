# Contributing to Next.js Boilerplate

First off, thank you for considering contributing to Next.js Boilerplate! It's people like you that make this project such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by respect and professionalism. By participating, you are expected to uphold this standard.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title** for the issue
- **Describe the exact steps which reproduce the problem** in as many details as possible
- **Provide specific examples** to demonstrate the steps
- **Describe the behavior you observed** after following the steps
- **Explain which behavior you expected to see instead** and why
- **Include screenshots and animated GIFs** if applicable
- **Include your environment details** (OS, Node version, npm version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title** for the issue
- **Provide a step-by-step description** of the suggested enhancement
- **Provide specific examples** to demonstrate the steps
- **Describe the current behavior** and **explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful** to most users

### Pull Requests

Please follow these steps to have your contribution considered:

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following the code style of the project
3. **Test your changes** thoroughly
4. **Update the documentation** if needed
5. **Write meaningful commit messages** following the format below
6. **Open a Pull Request** with a clear title and description

#### Commit Message Format

```
type: subject

body (optional)

footer (optional)
```

Types:
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools

Example:
```
feat: add dark mode toggle component

Implemented a reusable dark mode toggle component that can be used
across the application.

Closes #123
```

## Development Setup

1. Clone your fork of the repository:
```bash
git clone https://github.com/your-username/nextjs-boilerplate.git
cd nextjs-boilerplate
```

2. Install dependencies:
```bash
npm install
```

3. Create a branch for your changes:
```bash
git checkout -b feature/your-feature-name
```

4. Make your changes and test them:
```bash
npm run dev
npm run lint
npm run build
```

5. Commit your changes:
```bash
git add .
git commit -m "feat: your feature description"
```

6. Push to your fork:
```bash
git push origin feature/your-feature-name
```

7. Open a Pull Request from your fork to the main repository

## Style Guide

### JavaScript/TypeScript

- Use TypeScript for all new code
- Follow the existing code style (enforced by ESLint)
- Use meaningful variable and function names
- Add comments for complex logic
- Prefer functional components and hooks over class components

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

### Documentation

- Keep README.md up to date with any changes
- Comment your code where necessary
- Update TypeScript types and interfaces
- Add JSDoc comments for public APIs

## Testing

- Ensure all existing tests pass before submitting a PR
- Add tests for new features
- Update tests when modifying existing features
- Run `npm run lint` before submitting

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

## Recognition

Contributors will be recognized in the project. Thank you for your contributions!
