import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import TabbarItem from './tabbarItem/TabbarItem';
import { AppColors } from '../../theme';
import AppConstants from '../../app/app.constants';

/**
 * Define stylesheet.
 */
const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: AppColors.palette.secondary,
    flexDirection: 'row',
    height: 58,
    width: '100%',
  },
});

class Tabbar extends React.Component {
  /**
   * Class constructor.
   *
   * @param props
   *   Components props.
   */
  constructor(props) {
    super(props);
    this.state = {
      activeTab: AppConstants.ROUTES.HOME,
    };
  }

  /**
   * Action triggered on select a tabbar item
   *
   * @param item
   *   tabbat item selected.
   */
  onPress = (item) => {
    if (
      item.path === AppConstants.ROUTES.HOME ||
      item.path === AppConstants.ROUTES.USER_DETAILS
    ) {
      this.setState({ activeTab: item.path });
    } else {
      this.setState({ activeTab: item.path });
    }
  };

  /**
   * Render function to display component.
   */
  render() {
    const { activeTab } = this.state;

    return (
      <View style={styles.tabbar}>
        <TabbarItem
          activeTab={activeTab}
          name="Home"
          onPress={this.onPress}
          path={AppConstants.ROUTES.HOME}
        />
        <TabbarItem
          activeTab={activeTab}
          name="Shop"
          onPress={this.onPress}
          path={AppConstants.ROUTES.SHOP}
        />
        <TabbarItem
          activeTab={activeTab}
          name="User"
          onPress={this.onPress}
          path={AppConstants.ROUTES.USER_DETAILS}
        />
      </View>
    );
  }
}

export default Tabbar;
