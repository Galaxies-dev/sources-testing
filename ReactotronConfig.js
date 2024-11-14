import Reactotron, { openInEditor } from 'reactotron-react-native';
import mmkvPlugin from 'reactotron-react-native-mmkv';
import { storage } from './storage';

Reactotron.configure() // controls connection & communication settings
  .use(mmkvPlugin({ storage }))
  .use(openInEditor())
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
