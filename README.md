# Tracking Wins

A Chrome extension that helps you boost your confidence by tracking your daily wins and achievements.

## About

Tracking Wins is a simple yet powerful tool that helps you recognize and celebrate your achievements throughout each day. In a world that often focuses on what's going wrong, this extension encourages you to pause and acknowledge what's going right.

## Features

- Easily record wins with just a few clicks
- View your past achievements for instant motivation
- Export your wins as a text file to save or share
- Private storage keeps your personal wins secure
- Clean, distraction-free interface

## Installation

### From Chrome Web Store

1. Visit [Chrome Web Store](https://chrome.google.com/webstore) (link to be updated)
2. Click "Add to Chrome"

### For Development

1. Clone the repository:
   ```sh
   git clone https://github.com/ShavonHarris-Dev/dontforgettobrag.git
   cd dontforgettobrag
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Build the extension:
   ```sh
   npm run build
   ```

4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" by toggling the switch in the top-right corner
   - Click "Load unpacked" and select the `dist` directory from this project

## Development

### Available Scripts

- `npm run dev` - Runs the app in development mode with hot-reloading
- `npm run build` - Builds the extension for production
- `npm run preview` - Serves the built app for preview

### Project Structure

```
dontforgettobrag/
├── public/           # Static assets
│   └── icons/        # Extension icons
├── src/              # Source code
│   ├── components/   # React components
│   ├── hooks/        # Custom React hooks
│   ├── utils/        # Utility functions
│   ├── App.jsx       # Main component
│   └── main.jsx      # Entry point
├── index.html        # HTML template
├── manifest.json     # Extension manifest
└── service-worker.js # Background script
```

## Technologies

- React - UI library
- Vite - Build tool
- Chrome Extension API - For browser integration

## Learn More

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/guide/)
