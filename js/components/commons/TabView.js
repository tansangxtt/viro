import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import Home from '../home/Home.js'
import Customize from '../home/Customize.js'
import Photo from '../home/Photo.js'
import EarnCoins from '../earn-coins/EarnCoins.js'
import MiniGames from '../mini-games/MiniGames.js'
import Profile from '../profile/Profile.js'

const propTypes = {
    name: PropTypes.string.isRequired,
};

class TabView extends React.Component {
    render() {
        let screen = null;
        switch (this.props.name) {
            case 'customize_tab':
                screen = <Customize />
                break;
            case 'photo_tab':
                screen = <Photo />
                break;
            case 'earnCoins_tab':
                screen = <EarnCoins />
                break;
            case 'miniGames_tab':
                screen = <MiniGames />
                break;
            case 'profile_tab':
                screen = <Profile />
                break;
            default:
                screen = <Home />
        }
        return (
            <View style={styles.container}>
                {screen}
            </View>
        );
    }
}
TabView.propTypes = propTypes;

export default TabView;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});