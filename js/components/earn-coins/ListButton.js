import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';

export class ListButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={this.props.background} style={styles.background}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default ListButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        width: 300,
        height: 300 / 1024 * 307,
    },
    textContainer: {
        marginLeft: 100,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '800',
        marginBottom: 2,
        width: '80%',
    },
});
