import PropTypes from 'prop-types';
import React from 'react';

import {Text, TouchableOpacity} from 'react-native';
import styles from './tabbarItem.style';
import { AppColors } from '../../../theme';

class TabbarItem extends React.Component {
  /**
   * Class constructor.
   *
   * @param props
   *   Components props.
   */
  constructor(props) {
    super(props);
    this.path = props.path;
    this.state = {
      isActive: false,
    };
  }

  /**
   * Remove state isActive for inactive tab.
   */
  static getDerivedStateFromProps(props) {
    if (props.path === props.activeTab) {
      return {
        isActive: true,
      };
    }

    return {
      isActive: false,
    };
  }

  /**
   * Action triggered on select tab.
   */
  onPress = () => {
    const { onPress } = this.props;

    this.setState({ isActive: true });
    onPress(this);
  };

  /**
   * Render function to display component.
   */
  render() {
    const { name } = this.props;
    const { isActive } = this.state;

    return (
      <TouchableOpacity
        onPress={this.onPress}
        style={[
          styles.tab,
          {
            backgroundColor: isActive
              ? AppColors.palette.secondary
              : AppColors.palette.primary,
          },
        ]}>
        <Text style={isActive ? styles.text_active : styles.text_inactive}>{ name }</Text>
      </TouchableOpacity>
    );
  }
}

TabbarItem.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default TabbarItem;
