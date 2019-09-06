/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { AppColors, AppStyles } from './theme';
import AppConfig from './app/app.config';
import Tabbar from './components/tabbar/Tabbar';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle={AppColors.statusbar.barStyle} backgroundColor={AppColors.statusbar.backgroundColor}/>
      <SafeAreaView
        style={{flex: 0, backgroundColor: AppColors.palette.secondary}}
      />
      <SafeAreaView
        style={{flex: 1, backgroundColor: AppColors.palette.secondary}}>
        <View style={styles.view}>
          <View style={styles.textView}>
            <Text style={styles.text}>
              {`You are now on ${AppConfig.general.appName} !`}
            </Text>
          </View>
        </View>
        <Tabbar />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: AppColors.palette.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    borderWidth: 2,
    borderColor: AppColors.palette.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 100,
    paddingHorizontal: 10,
  },
  text: {
    ...AppStyles.base24Bold,
    color: AppColors.palette.secondary,
  },
});

export default App;
