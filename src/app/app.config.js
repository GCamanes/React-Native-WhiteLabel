import Config from 'react-native-config';

const AppConfig = {
  general: {
    appPin: Config.APP_PIN,
    appName: Config.APP_NAME,
    environment: Config.APP_ENV,
  },
  feature: {
    shop: Config.FEATURE_SHOP === 'true' || false,
    bonus: Config.FEATURE_BONUS === 'true' || false,
  },
};

export default AppConfig;
