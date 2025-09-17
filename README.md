# Dream Journal

A lightweight, accessible application exclusively for recording, exploring, and analyzing your dreams. Built with React and TypeScript, featuring multi-language support and offline-first storage.

## Features

- **Dream Recording**: Fast, distraction-free interface for capturing dream memories
- **Dream-Focused Interface**: Purpose-built for dream journaling only
- **Multi-language Support**: Available in English, French, Spanish, and German
- **Offline-First**: Local storage with optional cloud synchronization
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Accessibility**: Full keyboard navigation and screen reader support

## Important Notice for Existing Users

**Application Focus Change**: This application has been refocused to be exclusively a dream journal. All existing entries will continue to be accessible, but the app now only supports recording dreams. 

If you have non-dream entries (ideas, thoughts, reminders, etc.) that you'd like to preserve elsewhere, please export or copy them before the interface changes take effect. New entries can only be created as dreams.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Development

### Architecture

The application follows a component-based architecture with:
- **React Context** for state management
- **LocalForage** for offline-first storage
- **react-i18next** for internationalization
- **TypeScript** for type safety

### Project Structure

```
src/
├── components/     # Reusable UI components
├── hooks/          # Custom React hooks
├── i18n/           # Internationalization config
├── services/       # Business logic and storage
└── types/          # TypeScript definitions
```

### For AI Assistants

If you're using GitHub Copilot or other AI coding assistants, please refer to [`.copilot-instructions.md`](./.copilot-instructions.md) for detailed coding patterns, conventions, and project-specific guidance.

## Contributing

1. Follow the existing code patterns and TypeScript conventions
2. Add translations for any new user-facing text
3. Ensure accessibility compliance with keyboard navigation and ARIA labels
4. Test on both desktop and mobile devices
5. Run `npm run build` to verify the build passes

## License

This project is private and not open for external contributions.
