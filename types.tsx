import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}

export type RootDrawerParamList = {
  Root: undefined;
  NotFound: undefined;
  DeviceScreen: undefined;
  PowerScreen: undefined;
  LightingScreen: undefined;
  SceneScreen: undefined;
  SettingScreen: undefined;
};

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootDrawerScreenProps<Screen extends keyof RootDrawerParamList> =
  NativeStackScreenProps<RootDrawerParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootDrawerParamList>
  >;
