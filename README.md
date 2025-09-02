# 📱 TaskManagerApp

A modern, cross-platform task management application built with React Native and Expo. Organize your daily tasks with a clean, intuitive interface that supports both light and dark themes.

## ✨ Features

### 🎯 Core Functionality
- **Quick Task Creation**: Add tasks instantly with a simple tap
- **Smart Organization**: Automatic categorization of active and completed tasks
- **One-Tap Completion**: Mark tasks as complete with a single tap
- **Instant Deletion**: Remove tasks immediately without confirmation dialogs
- **Real-time Statistics**: View your task completion progress

### 🎨 User Experience
- **Dark/Light Theme**: Automatic theme switching with manual toggle
- **Toast Notifications**: Beautiful feedback for all actions
- **Haptic Feedback**: Tactile confirmation for interactions
- **Cross-Platform**: Works seamlessly on iOS, Android, and Web
- **Responsive Design**: Optimized for all screen sizes

### 📊 Task Management
- **Active Tasks**: View and manage your pending tasks
- **Completed Tasks**: Track your accomplishments
- **Task Timestamps**: See when each task was created
- **Empty State**: Helpful guidance when no tasks exist

## 🚀 Getting Started

### Prerequisites

Before running this app, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- **Expo CLI** (`npm install -g @expo/cli`)
- **Expo Go app** on your mobile device (for testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TaskManagerApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your preferred platform**
   ```bash
   # For iOS Simulator
   npm run ios
   
   # For Android Emulator
   npm run android
   
   # For Web Browser
   npm run web
   ```

### Development Commands

```bash
# Start the development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web

# Run linting
npm run lint
```

## 📖 How to Use

### Adding Tasks
1. Type your task description in the input field at the top
2. Tap the **Add** button or press **Enter**
3. Your task will appear in the "Active Tasks" section

### Managing Tasks
- **Complete a Task**: Tap anywhere on the task to mark it as completed
- **Delete a Task**: Tap the trash icon to remove the task immediately
- **View Statistics**: See your progress in the header section

### Theme Switching
- Tap the **theme toggle button** (sun/moon icon) in the header
- The app will switch between light and dark themes
- Your preference is automatically saved

### App Information
- Tap the **info button** (ℹ️ icon) to view app features and usage guide

## 🛠️ Technical Details

### Built With
- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **TypeScript** - Type-safe JavaScript
- **React Navigation** - Navigation library
- **Expo Router** - File-based routing

### Third-Party Libraries

| Library | Purpose | Version |
|---------|---------|---------|
| `@expo/vector-icons` | Beautiful, consistent iconography | ^14.1.0 |
| `@react-navigation/native` | Navigation between screens | ^7.1.6 |
| `@react-navigation/bottom-tabs` | Bottom tab navigation | ^7.3.10 |
| `@react-navigation/elements` | Navigation UI components | ^2.3.8 |
| `expo-router` | File-based routing system | ~5.1.5 |
| `expo-haptics` | Haptic feedback for interactions | ~14.1.4 |
| `expo-splash-screen` | Custom splash screen | ~0.30.10 |
| `expo-status-bar` | Status bar customization | ~2.2.3 |
| `react-native-reanimated` | Smooth animations | ~3.17.4 |
| `react-native-gesture-handler` | Touch gesture handling | ~2.24.0 |
| `react-native-safe-area-context` | Safe area handling | 5.4.0 |
| `react-native-screens` | Native screen optimization | ~4.11.1 |
| `@react-native-async-storage/async-storage` | Local data persistence | Latest |

### Project Structure

```
TaskManagerApp/
├── app/                    # App screens and routing
│   ├── (tabs)/            # Tab-based navigation
│   │   ├── index.tsx      # Main Tasks screen
│   │   ├── info.tsx       # App information screen
│   │   └── _layout.tsx    # Tab navigation layout
│   ├── _layout.tsx        # Root app layout
│   └── +not-found.tsx    # 404 error screen
├── components/            # Reusable UI components
│   ├── AddTaskForm.tsx    # Task input form
│   ├── TaskHeader.tsx     # App header with stats
│   ├── TaskItem.tsx       # Individual task component
│   ├── TaskSection.tsx    # Task list sections
│   ├── ThemeToggleButton.tsx # Theme switcher
│   └── Toast.tsx          # Notification component
├── contexts/              # React contexts
│   └── ThemeContext.tsx   # Theme management
├── hooks/                 # Custom React hooks
│   └── useAppColorScheme.ts # Color scheme hook
├── constants/             # App constants
│   └── Colors.ts          # Color definitions
├── types/                 # TypeScript type definitions
│   └── task.ts            # Task data types
├── utils/                 # Utility functions
│   └── haptics.ts         # Haptic feedback utilities
└── assets/                # Images and static files
    └── images/            # App icons and images
```

## 🎨 Customization

### Adding New Features
1. Create new components in the `components/` directory
2. Add new screens in the `app/` directory
3. Update types in the `types/` directory
4. Add utilities in the `utils/` directory

### Theming
- Modify colors in `constants/Colors.ts`
- Update theme logic in `contexts/ThemeContext.tsx`
- Customize component styles in individual component files

## 📱 Platform Support

- **iOS**: Full support with native performance
- **Android**: Full support with Material Design
- **Web**: Responsive web application
- **Expo Go**: Test on real devices without building

## 🔧 Development

### Code Quality
- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **React.memo**: Performance optimization
- **useCallback/useMemo**: Efficient re-rendering

### Performance Features
- **Virtual Scrolling**: Efficient list rendering
- **Memoization**: Optimized component updates
- **Lazy Loading**: Reduced initial bundle size
- **Image Optimization**: Efficient asset loading

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Include device information and steps to reproduce

---

**Built with ❤️ using React Native and Expo**