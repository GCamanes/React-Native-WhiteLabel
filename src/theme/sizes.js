import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

function getIconSize() {
  const ratio = PixelRatio.get();
  if (ratio < 2) {
    return 40;
  }
  if (ratio === 2) {
    return 45;
  }
  if (ratio > 2) {
    return 50;
  }
  return 60;
}

const iconSize = getIconSize();

export default {
  // Window Dimensions
  screen: {
    height: screenHeight,
    width: screenWidth,

    heightHalf: screenHeight * 0.5,
    heightThird: screenHeight * 0.333,

    widthHalf: screenWidth * 0.5,
    widthThird: screenWidth * 0.333,
    widthTwoThirds: screenWidth * 0.666,
    widthQuarter: screenWidth * 0.25,
    widthThreeQuarters: screenWidth * 0.75,
  },
  navbarHeight: Platform.OS === 'ios' ? 64 : 54,
  statusBarHeight: Platform.OS === 'ios' ? 16 : 0,

  headerHeight: 120,

  paddingBig: 30,
  padding: 15,
  paddingSml: 8,

  borderRadius: 2,

  cardIcon: iconSize,
};
