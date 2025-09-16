# Dream Journal

A multilingual Progressive Web App (PWA) for capturing your ideas and dreams. This lightweight and easily accessible tool helps you quickly jot down thoughts, dreams, and inspirations before they fade away.

## ✨ Features

- **📱 Progressive Web App**: Install and use offline on any device
- **🌍 Multilingual Support**: Available in English, Spanish, French, and German
- **💾 Local Storage**: Your data stays private on your device
- **🔄 Cloud Sync**: Optional synchronization across devices (with authentication)
- **📝 Rich Note Taking**: Categorize notes as dreams, ideas, thoughts, reminders, or other
- **🎨 Modern UI**: Clean, responsive interface with accessibility features
- **🔍 Search & Filter**: Find your notes quickly
- **🌙 Theme Support**: Light and dark mode support

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

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

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder, ready for deployment.

## 🛠️ Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

### Project Structure

```
src/
├── components/          # Reusable UI components
├── services/           # Data storage and sync services
├── i18n/              # Internationalization configuration
├── App.tsx            # Main application component
└── index.tsx          # Application entry point
```

## 🌐 Internationalization

The app supports multiple languages out of the box:
- English (en)
- Spanish (es)
- French (fr)
- German (de)

Language detection is automatic based on browser settings, with manual override available in settings.

## 💽 Data Storage

- **Local Storage**: Uses IndexedDB via localforage for offline storage
- **Cloud Sync**: Optional integration with Firebase for cross-device synchronization
- **Privacy First**: All data remains local unless you explicitly enable cloud sync

## 🎯 Usage

1. **Create Notes**: Click the text area and start typing your dream or idea
2. **Categorize**: Select a category (dream, idea, thought, reminder, other)
3. **Save**: Click "Save Note" to store your entry
4. **Edit/Delete**: Use the action buttons on each note card
5. **Search**: Use the search functionality to find specific notes
6. **Settings**: Configure language, theme, and storage preferences

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on how to get started.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔒 Security

For security concerns and vulnerability reports, please see our [Security Policy](SECURITY.md).

## 📋 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes and updates.

## 💬 Support

If you encounter any issues or have questions:
- Check existing [Issues](https://github.com/Simsteve7/dream-journal/issues)
- Create a new issue if needed
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Internationalization with [react-i18next](https://react.i18next.com/)
- Offline storage with [localforage](https://localforage.github.io/localForage/)