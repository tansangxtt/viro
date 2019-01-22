import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Text, ScrollView, Image, ImageBackground, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

import Avatar from '../commons/Avatar'
import BackButton from '../commons/BackButton.js'

import ui from "../../res/ui";

export class Profile extends Component {
    render() {
        const { navigate } = this.props.navigation;
        var medals = [];

        return (
            <View style={styles.container}>
                <BackButton />

                <Avatar style={styles.avatar} camPos={[0, 1.5, 2]} />
                <View style={styles.contentContainer}>
                    <View style={styles.panelContainer}>
                    </View>

                    <View style={styles.medalsContainer}>
                        <Text style={styles.medalsTitle} >Medals Earned</Text>

                        <ScrollView contentContainerStyle={styles.scrollContainer}>      
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

export default withNavigation(Profile);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
    },
    panelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        backgroundColor: '#3162ac',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#3162ac',
    },
    avatar: {
        zIndex: -100,
    },
    medalsTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    medalsContainer: {
        flex: 1,
        paddingHorizontal: 8,
    },
    scrollContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    curve: {
        width: Dimensions.get('window').width,
    },
    thumbnail: {
        height: 80,
        width: 80,
    },
});
