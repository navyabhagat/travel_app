import 'react-native-gesture-handler'; // Required for navigation gestures
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Register the main app component
AppRegistry.registerComponent(appName, () => App);
