import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Dimensions } from 'react-native';

import Lock from '../commons/Lock.js'

export class NavButton extends Component {
    render() {
        if (this.props.active) {
            return (
                <View style={[styles.container, styles.center]}>
                    <Image source={require('../../res/ui/home/selector_active.png')} style={styles.img} />
                    <Image source={this.props.icon} style={styles.icon} />
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
            )
        }

        if(this.props.locked){
            return (
                 <View style={[styles.container, styles.center]}>
                    <View style={[styles.center]}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={this.props.icon} style={[styles.icon, {tintColor: 'gray'}]} />
                            <Lock style={{tintColor: 'gray'}}/> 
                        </View>
                        <Text style={[styles.text, {color: 'gray'} ]}>{this.props.text}</Text>
                    </View>
                </View>
            )
        }

        return (
            <TouchableHighlight onPress={() => this.props.press()} style={[styles.container, styles.center]}>
                <View style={[styles.center]}>
                    <Image source={this.props.icon} style={styles.icon} />
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

export default NavButton;


const styles = StyleSheet.create({
    img: {
        position: 'absolute',
        height: 110,
        width: Dimensions.get('window').width / 4,
        justifyContent: 'flex-end',
        resizeMode: 'contain',
    },
    icon: {
        width: 25,
        height: 25,
        marginBottom: 5,
        resizeMode: 'contain',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 0.25,
        height: 75,
        backgroundColor: '#2f318c',
    },
    active: {
        backgroundColor: '#e2310f'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 12,
        fontWeight: '600'
    },
});