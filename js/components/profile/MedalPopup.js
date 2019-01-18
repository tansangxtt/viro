import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const RADIUS = 10;

import ui from "../../res/ui"

export class MedalPopup extends Component {
    render() {
        return (
            <View style={styles.popupContainer}>
                <View style={styles.popup}>
                    <View style={styles.section1}>
                        <Text style={styles.name}>KING OF THE HILL</Text>
                        <Text style={styles.description}>Passed All Quizzes 1 to 10</Text>
                    </View>
                    <View style={styles.section2}>
                        <Image style={styles.medal} source={ui.medals[this.props.id].thumbnail} />
                        <Text style={styles.attain}>You Attained This Medal On</Text>
                        <Text style={styles.date}>{this.props.id + 10} Dec 2018</Text>
                    </View>
                    <View style={styles.section3}>
                        <TouchableOpacity underlayColor="transparent" onPress={() => { Actions.pop() }}>
                            <ImageBackground source={require('../../res/ui/profile/button_confirm.png')} style={styles.button}>
                                <Text style={styles.okText}>OK</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default MedalPopup;


const styles = StyleSheet.create({
    popupContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 10000,
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    popup: {
        width: Dimensions.get('window').width * 0.8,
    },
    section1: {
        padding: 25,
        backgroundColor: '#31a97b',
        alignItems: 'center',
        borderTopLeftRadius: RADIUS,
        borderTopRightRadius: RADIUS,
    },
    section2: {
        padding: 25,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    section3: {
        padding: 25,
        backgroundColor: '#a5e0ff',
        alignItems: 'center',
        borderBottomLeftRadius: RADIUS,
        borderBottomRightRadius: RADIUS,
    },
    name: {
        color: 'white',
        fontSize: 24,
        fontWeight: '900',
    },
    description: {
        color: 'white',
        fontSize: 14,
        fontWeight: '200',
    },
    attain: {
        fontSize: 16,
    },
    date: {
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: '900',
    },
    medal: {
        height: 128,
        width: 128,
        marginBottom: 10,
    },
    button: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.4 * 145 / 422,
        justifyContent: 'center',
        alignItems: "center",
    },
    okText: {
        color: 'white',
        fontSize: 16,
        marginBottom: 6,
        fontWeight: '600',
    },
});