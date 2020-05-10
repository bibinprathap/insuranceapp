import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
// import App from './App';
import App from './src1/app';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
