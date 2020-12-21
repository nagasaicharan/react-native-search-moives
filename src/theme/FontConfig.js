import {Platform} from 'react-native';
const isIOS = Platform.OS === 'ios';
export const fontConfig = {
  ProximaNova: {
    regular: {
      fontFamily: 'ProximaNova-Regular',
      fontWeight: 'normal',
    },
    black: {
      fontFamily: 'ProximaNova-Black',
      fontWeight: isIOS ? '800' : 'normal',
    },
    bold: {
      fontFamily: 'ProximaNova-Bold',
      fontWeight: isIOS ? 'bold' : 'normal',
    },
    light: {
      fontFamily: 'ProximaNova-Light',
      fontWeight: 'normal',
    },
    semibold: {
      fontFamily: 'ProximaNova-Semibold',
      fontWeight: isIOS ? '500' : 'normal',
    },
    extrabold: {
      fontFamily: 'ProximaNova-Extrabld',
      fontWeight: '800',
    },
  },
};
