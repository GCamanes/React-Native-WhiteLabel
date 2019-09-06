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

import {AppColors} from './theme';
import AppConfig from './app/app.config';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle={AppColors.statusbar.barStyle} />
      <SafeAreaView
        style={{flex: 0, backgroundColor: AppColors.palette.secondary}}
      />
      <SafeAreaView
        style={{flex: 1, backgroundColor: AppColors.palette.secondary}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text style={styles.sectionTitle}>
            {`You are now on ${AppConfig.general.appName} !`}
          </Text>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: AppColors.palette.white,
  },
});

export default App;
