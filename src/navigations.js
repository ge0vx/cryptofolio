import React, { Component } from "react";
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator,
} from "react-navigation";
import { connect } from "react-redux";

import HomeScreen from "./screens/HomeScreen";

const Tabs = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    lazy: true,
    tabBarPosition: "bottom",
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        height: 50,
      },
    },
  }
);

const AppMainNav = StackNavigator({
  Home: {
    screen: Tabs,
  },
});

class AppNavigator extends Component {
  render() {
    const nav = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
    });

    return <AppMainNav navigation={nav} />
  }
}

export default connect( state => ({
    nav: state.nav,
    user: state.user,
}))(AppNavigator);

export const router = AppMainNav.router;
