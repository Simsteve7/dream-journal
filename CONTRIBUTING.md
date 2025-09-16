# Contributing to Dream Journal 🤝

Thank you for your interest in contributing to Dream Journal! We welcome contributions from the community and are grateful for your help in making this project better.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Process](#development-process)
- [Coding Standards](#coding-standards)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Branch Protection Rules](#branch-protection-rules)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git

### Development Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/dream-journal.git
   cd dream-journal
   ```

3. Add the upstream repository as a remote:
   ```bash
   git remote add upstream https://github.com/Simsteve7/dream-journal.git
   ```

4. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🛠️ How to Contribute

### Types of Contributions

We welcome several types of contributions:

- **Bug Reports**: Help us identify and fix issues
- **Feature Requests**: Suggest new features or improvements
- **Code Contributions**: Submit bug fixes or new features
- **Documentation**: Improve documentation and examples
- **Translation**: Help translate the app to new languages
- **Testing**: Write tests or improve test coverage

### Before You Start

1. Check if an issue already exists for your contribution
2. For major changes, create an issue first to discuss the approach
3. Make sure your contribution aligns with the project's goals

## 🔄 Development Process

### Workflow

1. **Sync your fork** with upstream before starting work:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a feature branch** from main:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** following our coding standards

4. **Test your changes**:
   ```bash
   npm run build
   npm test
   ```

5. **Commit your changes** with clear commit messages

6. **Push to your fork** and create a pull request

### Commit Message Guidelines

Use clear and descriptive commit messages:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

Examples:
```
Add multilingual support for Arabic

Fix authentication error with Microsoft provider

Update README with new installation instructions

Closes #123
```

## 📏 Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow existing naming conventions
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Prefer functional components and hooks over class components

### Code Style

- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas in multiline objects/arrays
- Use semicolons at the end of statements
- Follow existing ESLint configuration

### CSS

- Use CSS variables for theming
- Follow BEM methodology for class naming when applicable
- Ensure responsive design principles
- Test in both light and dark themes

### Internationalization

- All user-facing strings must be internationalized
- Add new translation keys to all supported language files
- Use descriptive translation keys (e.g., `auth.signIn` not `button1`)

## 🔍 Pull Request Process

### Before Submitting

1. Ensure your code builds without warnings
2. Run the test suite and ensure all tests pass
3. Test your changes manually in the browser
4. Update documentation if needed
5. Add or update tests for your changes

### Pull Request Template

When creating a pull request, please:

1. Use the provided PR template
2. Provide a clear description of the changes
3. Reference any related issues
4. Include screenshots for UI changes
5. Add any breaking changes to the description

### Review Process

1. All pull requests require at least one review
2. Address feedback promptly and professionally
3. Maintain a clean commit history (squash if needed)
4. Ensure CI checks pass before requesting re-review

## 🐛 Issue Guidelines

### Bug Reports

When reporting bugs, please include:

- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Environment**: Browser, OS, Node.js version
- **Screenshots**: If applicable

### Feature Requests

When requesting features, please include:

- **Description**: Clear description of the feature
- **Use Case**: Why this feature would be useful
- **Implementation Ideas**: Any thoughts on implementation
- **Alternatives**: Alternative solutions you've considered

## 🛡️ Branch Protection Rules

The main branch is protected with the following rules:

### Required for Merging

- **Pull Request Reviews**: At least 1 approving review required
- **Status Checks**: All CI checks must pass
  - Build must complete successfully
  - All tests must pass
  - Linting must pass without errors
- **Up-to-date branches**: Branch must be up to date before merging
- **Linear history**: Require branches to be up to date before merging

### Restrictions

- Direct pushes to main are not allowed
- Force pushes are not allowed
- Deletions are not allowed

### Bypass Permissions

Only repository administrators can bypass these rules in exceptional circumstances.

## 🎯 Development Tips

### Useful Commands

```bash
# Run development server
npm start

# Run tests
npm test

# Run tests with coverage
npm test -- --coverage --watchAll=false

# Build for production
npm run build

# Type checking
npx tsc --noEmit

# Linting
npm run lint (when available)
```

### Debugging

- Use React Developer Tools for component debugging
- Use browser developer tools for performance profiling
- Check console for warnings and errors
- Test with different browsers and screen sizes

## 🌍 Translation Contributions

We welcome translation contributions! To add a new language:

1. Copy `src/i18n/locales/en.json` to `src/i18n/locales/[language-code].json`
2. Translate all strings to your target language
3. Add the language to the configuration in `src/i18n/config.ts`
4. Test the translations in the application
5. Submit a pull request with your changes

## 📞 Getting Help

If you need help or have questions:

- Check existing [issues](https://github.com/Simsteve7/dream-journal/issues)
- Start a [discussion](https://github.com/Simsteve7/dream-journal/discussions)
- Contact the maintainers

## 🙏 Recognition

Contributors will be recognized in:

- The project's README.md file
- Release notes for significant contributions
- GitHub's contributor graphs

Thank you for contributing to Dream Journal! 🌟