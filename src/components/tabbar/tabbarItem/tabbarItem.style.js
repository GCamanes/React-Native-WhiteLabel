import { StyleSheet } from 'react-native';
import { AppColors, AppStyles } from '../../../theme';

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  text_active: {
    ...AppStyles.base16,
    color: AppColors.palette.primary,
  },
  text_inactive: {
    ...AppStyles.base16,
    color: AppColors.palette.secondary,
  },
});

export default styles;
