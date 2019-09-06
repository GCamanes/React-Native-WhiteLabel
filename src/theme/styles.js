import Config from 'react-native-config';
import AppConstants from '../app/app.constants';
import AppColors from './colors';
import AppFonts from './fonts';

export default {
  baseView: {
    backgroundColor: AppColors.palette.white,
    position: 'relative',
    flexDirection: 'column',
    flex: 1,
  },
  sectionContainer: {
    backgroundColor: AppColors.palette.white,
    flex: 1,
    paddingVertical: 15,
  },
  separator: {
    backgroundColor: AppColors.palette.black,
    height: 1,
    width: '100%',
  },
  viewContainer: {
    backgroundColor: AppColors.palette.white,
    flex: 1,
  },

  // Text Styles
  base8: {
    color: AppColors.palette.black,
    fontFamily: AppFonts.base.fontDefault,
    fontSize: AppFonts.t8.size,
    lineHeight: AppFonts.t8.lineHeight,
  },
  base12: {
    color: AppColors.palette.black,
    fontFamily: AppFonts.base.fontDefault,
    fontSize: AppFonts.t12.size,
    lineHeight: AppFonts.t12.lineHeight,
  },
  base12Bold: {
    color: AppColors.palette.black,
    fontFamily: AppFonts.base.fontBold,
    fontSize: AppFonts.t12.size,
    lineHeight: AppFonts.t12.lineHeight,
  },
  base14: {
    color: AppColors.palette.black,
    fontFamily: AppFonts.base.fontDefault,
    fontSize: AppFonts.t14.size,
    lineHeight: AppFonts.t14.lineHeight,
  },
  base14Bold: {
    color: AppColors.palette.black,
    fontFamily: AppFonts.base.fontBold,
    fontSize: AppFonts.t14.size,
    lineHeight: AppFonts.t14.lineHeight,
  },
  base16: {
    color: AppColors.palette.black,
    fontFamily: AppFonts.base.fontDefault,
    fontSize: AppFonts.t16.size,
    lineHeight: AppFonts.t16.lineHeight,
  },
  base16Bold: {
    color: AppColors.palette.black,
    fontFamily: AppFonts.base.fontBold,
    fontSize: AppFonts.t16.size,
    lineHeight: AppFonts.t16.lineHeight,
  },
  base20Bold: {
    color: AppColors.palette.black,
    fontFamily: AppFonts.base.fontBold,
    fontSize: AppFonts.t20.size,
    lineHeight: AppFonts.t20.lineHeight,
  },
  base24Bold: {
    color: AppColors.palette.black,
    fontFamily: AppFonts.base.fontBold,
    fontSize: AppFonts.t24.size,
    lineHeight: AppFonts.t24.lineHeight,
  },
  base26Bold: {
    color: AppColors.palette.black,
    fontFamily: AppFonts.base.fontBold,
    fontSize: AppFonts.t26.size,
    lineHeight: AppFonts.t26.lineHeight,
  },
  base34Bold: {
    color: AppColors.palette.black,
    fontFamily: AppFonts.base.fontBold,
    fontSize: AppFonts.t34.size,
    lineHeight: AppFonts.t34.lineHeight,
  },

  // Icon Styles
  iconSmall: {
    color: AppColors.palette.black,
    fontSize: AppFonts.t8.size,
  },
  iconMedium: {
    color: AppColors.palette.black,
    fontSize: AppFonts.t14.size,
  },
  iconLarge: {
    color: AppColors.palette.black,
    fontSize: AppFonts.t16.size,
  },
  iconXLarge: {
    color: AppColors.palette.black,
    fontSize: AppFonts.t20.size,
  },
  iconXXLarge: {
    color: AppColors.palette.black,
    fontSize: AppFonts.t24.size,
  },
  iconXXXLarge: {
    color: AppColors.palette.black,
    fontSize: AppFonts.t34.size,
  },
};
