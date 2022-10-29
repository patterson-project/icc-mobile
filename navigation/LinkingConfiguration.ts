import * as Linking from 'expo-linking';

import { LinkingOptions } from '@react-navigation/native';
import { RootDrawerParamList } from '../types';

const linking: LinkingOptions<RootDrawerParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          DeviceScreen: 'DeviceScreen',
          SceneScreen: 'SceneScreen',
          SettingScreen: 'SettingScreen',
          LightingScreen: 'LightingScreen',
          PowerScreen: 'PowerScreen',
        },
      },
      NotFound: '*',
    },
  },
};

export default linking;
