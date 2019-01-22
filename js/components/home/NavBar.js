import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import AvatarButton from './AvatarButton.js'
import NavButton from './NavButton.js'
import { withNavigation, StackActions, NavigationActions } from 'react-navigation';

export class NavBar extends Component {

    componentDidMount() {

    }

    render() {
        const { navigate } = this.props.navigation;
    return (
      <View style={styles.navBar} pointerEvents='box-none'>
        <View style={styles.buttonContainer}>
                <AvatarButton press={() => {
                    //const resetAction = StackActions.reset({
                    //    index: 0,
                    //    actions: [NavigationActions.navigate({ routeName: 'home' })],
                    //});
                    //this.props.navigation.dispatch(resetAction);
                    //this.props.navigation.dispatch(StackActions.popToTop());
                    //this.props.navigation.reset([NavigationActions.navigate({ routeName: 'login' })], 0)
                    //this.props.navigation.replace('home');    
                    this.props.refreshCallback();
                    //this.props.navigation.reset([NavigationActions.navigate({ routeName: 'login' }, 0), NavigationActions.navigate({ routeName: 'earnCoins' }, 1)]);
                }} source={require("../../res/ui/home/button_feed.png")} />
        </View>
        <View style={styles.container}>
          <NavButton text="HOME" active={true} icon={require("../../res/ui/home/tabbar_home.png")} />
                <NavButton text="EARN COINS" press={() => navigate('profile')} icon={require("../../res/ui/home/tabbar_earn.png")} />
                <NavButton text="MINI GAMES" press={() => navigate('profile')} locked={true} icon={require("../../res/ui/home/tabbar_minigames.png")} />
                <NavButton text="PROFILE" press={() => navigate('profile')} icon={require("../../res/ui/home/tabbar_profile.png")} />
        </View>
      </View>
    );
  }
}

export default withNavigation(NavBar);


const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    bottom: 0,
      width: '100%'
  },
  buttonContainer: {
    alignSelf: 'flex-start',
      marginBottom: 20,
      zIndex: 5
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
      alignItems: 'center',
      zIndex: 5
  }
});