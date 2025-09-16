# Dream Journal 🌙✨

A lightweight, accessible web application for capturing your dreams, ideas, and thoughts. Whether you want to record a dream while you still remember it or jot down that brilliant idea that just popped into your head, Dream Journal provides a simple, intuitive interface for organizing your mental notes.

[![Build Status](https://github.com/Simsteve7/dream-journal/workflows/CI/badge.svg)](https://github.com/Simsteve7/dream-journal/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- **Multi-language Support**: Available in English, French, German, and Spanish
- **Category Organization**: Organize entries as Dreams, Ideas, Thoughts, Reminders, or Other
- **Cloud Synchronization**: Sync your data across devices with multiple auth providers
- **Local Storage**: Works offline with local-only mode
- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark/Light Themes**: Choose your preferred viewing experience
- **Privacy-First**: Your data stays private with optional cloud sync

## 🎯 Target Audience

- Dream enthusiasts who want to track and analyze their dreams
- Creative individuals capturing spontaneous ideas
- Anyone looking for a simple, private note-taking solution
- Users who need cross-device synchronization for their personal notes

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Simsteve7/dream-journal.git
   cd dream-journal
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

Builds the app for production to the `build` folder. The build is optimized for performance and ready for deployment.

## 🎮 Usage

### Basic Usage

1. **Adding Notes**: Use the text area to write your dream, idea, or thought
2. **Categorization**: Select the appropriate category for your entry
3. **Saving**: Click "Save Note" to store your entry
4. **Management**: Edit or delete existing notes using the action buttons

### Cloud Synchronization

1. Click on the authentication option in the settings
2. Choose your preferred provider (Google, Facebook, GitHub, Microsoft)
3. Your notes will automatically sync across all your devices

### Language Settings

Change the application language from the settings menu. Supported languages:
- English (en)
- French (fr)
- German (de)
- Spanish (es)

### Storage Options

- **Local Only**: All data stays on your device
- **Cloud Sync**: Data is synchronized across devices using your chosen auth provider

## 🛠️ Development

### Available Scripts

- `npm start` - Runs the development server
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

### Technology Stack

- **Frontend**: React 19 with TypeScript
- **State Management**: React Context + useReducer
- **Styling**: CSS3 with CSS Variables for theming
- **Internationalization**: i18next
- **Storage**: LocalForage for local storage, Firebase for cloud sync
- **Authentication**: Multiple providers via Azure MSAL and Firebase
- **Build Tool**: Create React App
- **Testing**: Jest + React Testing Library

### Project Structure

```
src/
├── components/     # React components
├── hooks/         # Custom React hooks
├── i18n/          # Internationalization configuration
├── services/      # External service integrations
├── types/         # TypeScript type definitions
└── App.tsx        # Main application component
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:

- How to submit bug reports and feature requests
- Development setup and coding standards
- Pull request process
- Code of conduct

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔒 Security

For security concerns, please review our [Security Policy](SECURITY.md).

## 📞 Support

- Create an [issue](https://github.com/Simsteve7/dream-journal/issues) for bug reports or feature requests
- Check the [discussions](https://github.com/Simsteve7/dream-journal/discussions) for community support

## 🎉 Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Internationalization powered by [i18next](https://www.i18next.com/)
