import * as ReactNative from 'react-native';

jest.mock('react-native-nfc-manager', () => ({
  __esModule: true,
  default: {
    isSupported: jest.fn().mockReturnValue(false),
    isEnabled: jest.fn().mockReturnValue(true),
    start: jest.fn().mockResolvedValue(true),
  },
}));

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

ReactNative.NativeModules.RNBranch = {};

export const Platform = {
  ...ReactNative.Platform,
  OS: 'ios',
  Version: 123,
  isTesting: true,
  select: (objs: any) => objs['ios'],
};
