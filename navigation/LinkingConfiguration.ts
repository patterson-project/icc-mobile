import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootDrawerParamList } from '../types';

const linking: LinkingOptions<RootDrawerParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          DeviceScreen: 'DeviceScreen',
          PowerScreen: 'PowerScreen',
        },
      },
      NotFound: '*',
    },
  },
};

export default linking;
