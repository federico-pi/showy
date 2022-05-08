import 'react-native-url-polyfill/auto';
import 'intl-pluralrules';
import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';

import { APP_NAME } from '~env';

import App from './src/App';

AppRegistry.registerComponent(APP_NAME, () => App);
