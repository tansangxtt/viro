import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from '../home/Home.js';
import Photo from '../home/Photo.js';
import Profile from '../profile/Profile.js';


const propTypes = {
    name: PropTypes.string.isRequired,
};

class TabView extends React.Component {
    render() {
        let screen = null;
        switch (this.props.name) {

            case 'photo_tab':
                screen = <Photo />
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