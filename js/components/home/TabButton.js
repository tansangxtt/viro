import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Dimensions } from 'react-native';


export class TabButton extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={[styles.container, styles.center, this.props.active ? styles.active : null]}>
                    <Text style={[styles.text, this.props.active ? styles.textActive : null]}>{this.props.text.toUpperCase()}</Text>
                </View>
            </View>
        );
    }
}

export default TabButton;


const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    container: {
        flex: 0.9,
        backgroundColor: '#8e92df',
    },
    active: {
        flex: 1,
        backgroundColor: '#30348a',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
    },
    textActive: {
        fontWeight: '900',
    }
});