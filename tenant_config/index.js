import Config from 'react-native-config';

const tenantConfigs = {
  oca: require('./app1/config'),
  soshca: require('./app2/config'),
};

export default tenantConfigs[Config.APP_PIN].default;
