import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import AvatarButton from './AvatarButton.js';
import NavButton from './NavButton.js';


export class NavBar extends Component {

    componentDidMount() {
    }

    render() {
        const { navigate } = this.props.navigation;
    return (
      <View style={styles.navBar} pointerEvents='box-none'>
        <View style={styles.buttonContainer}>
                <AvatarButton press={() => navigate('photo')} source={require("../../res/ui/home/button_photo.png")} />
        </View>
        <View style={styles.container}>
          <NavButton text="HOME" active={true} icon={require("../../res/ui/home/tabbar_home.png")} />
                <NavButton text="EARN COINS" press={() => navigate('profile')} locked={true} icon={require("../../res/ui/home/tabbar_earn.png")} />
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