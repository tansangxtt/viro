import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export class Panel extends Component {
    render() {
        return (
            <ImageBackground source={this.props.backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <Text style={styles.text}>{this.props.text}</Text>
                    <Text style={styles.value}>{this.props.value.toLocaleString()}</Text>
                </View>
            </ImageBackground>
        );
    }
}

export default Panel;


const styles = StyleSheet.create({
    backgroundImage: {
        padding: 8,
        width: width * 0.3,
        height: width * 0.3 * 364 / 335,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    text: {
        top: 5,
        fontSize: 16,
        fontWeight: '600',
    },
    value: {
        bottom: 10,
        right: 5,
        textAlign: 'right',
        fontSize: 40,
        fontWeight: '600'
    }
});