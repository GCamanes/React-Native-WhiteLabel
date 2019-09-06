import {Platform} from 'react-native';

export function normalize(size) {
  return size;
}

function lineHeight(android, ios) {
  return Platform.OS === 'ios' ? ios : android;
}

const base = {
  size: normalize(12),
  lineHeight: lineHeight(18, 14),
  fontDefault: 'Arial',
  fontBold: 'Arial',
};

const regular = {
  t34: {...base, size: normalize(34), lineHeight: lineHeight(40, 41)},
  t26: {...base, size: normalize(26), lineHeight: lineHeight(30, 30)},
  t24: {...base, size: normalize(26), lineHeight: lineHeight(28, 31)},
  t20: {...base, size: normalize(20), lineHeight: lineHeight(26, 24)},
  t16: {...base, size: normalize(16), lineHeight: lineHeight(22, 19)},
  t14: {...base, size: normalize(14), lineHeight: lineHeight(20, 17)},
  t12: {...base, size: normalize(12), lineHeight: lineHeight(18, 14)},
  base: {...base},
  t9: {...base, size: normalize(9), lineHeight: lineHeight(14, 12)},
  t8: {...base, size: normalize(8), lineHeight: lineHeight(13, 10)},
};

export default regular;
