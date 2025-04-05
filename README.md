# QuranChat AI

QuranChat AI is a cross-platform mobile application built with React Native that provides an AI-powered Islamic chatbot for engaging conversations based on authentic Quran and Hadith sources. The app includes interactive onboarding, a subscription paywall, personalized AI responses, and a daily Hadith/Quran verse widget.

## Features

- 🤖 AI-powered Islamic chatbot
- 📖 Authentic Quran and Hadith sources
- 🎯 Interactive onboarding experience
- 💳 Subscription-based access
- 📱 Daily Hadith/Quran verse widget
- 🌙 Beautiful Islamic-themed UI
- 🔒 Secure authentication
- 📊 User preferences and settings
- 🎨 Customizable themes and appearance
- 🔔 Push notifications for daily verses
- 📝 Voice-to-text input support
- 🌍 Multi-language support

## Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **State Management**: React Context API
- **UI Components**: 
  - Expo Linear Gradient
  - React Native Vector Icons
  - React Native Slider
  - React Native Gesture Handler
  - React Native Reanimated
- **Development Tools**:
  - TypeScript
  - ESLint
  - Prettier
  - Tailwind CSS

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)
- Git
- Firebase account and project setup

## Installation

1. Clone the repository:
```bash
git clone https://github.com/m7adeel/QuranChat-AI
cd QuranChat-AI
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   - Copy the `.env.example` file to create a new `.env` file:
     ```bash
     cp .env.example .env
     ```
   - Fill in your Firebase configuration values in the `.env` file:
     - Get these values from your Firebase project settings
     - Make sure to prefix all variables with `EXPO_PUBLIC_` as shown in the example
     - Never commit your `.env` file to version control

4. Start the development server:
```bash
npm start
# or
yarn start
```

## Project Structure

```
QuranChat/
├── app/                    # Main application code
│   ├── (auth)/            # Authentication related screens
│   ├── (settings)/        # Settings and preferences
│   └── (tabs)/            # Main tab navigation
├── components/            # Reusable components
├── assets/               # Images, fonts, and other static assets
├── types/                # TypeScript type definitions
├── content/              # Content data (Quran, Hadith, etc.)
└── ...
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run ios` - Run the app on iOS simulator
- `npm run android` - Run the app on Android emulator
- `npm run web` - Run the app in web browser
- `npm run lint` - Run ESLint and Prettier checks
- `npm run format` - Format code using ESLint and Prettier
- `npm run build:dev` - Build development version
- `npm run build:preview` - Build preview version
- `npm run build:prod` - Build production version

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
