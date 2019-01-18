import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { withNavigation } from 'react-navigation';

export class BackButton extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <TouchableOpacity underlayColor="transparent" style={styles.wrapper} onPress={() => { this.props.navigation.goBack() }}>
                <View style={styles.buttonContainer}>
                    <Image source={require('../../res/ui/commons/button_back.png')} style={styles.arrow} />
                    <Text style={styles.text}>{"BACK"}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default withNavigation(BackButton);


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: 50,
        marginLeft: 10,
        position: 'absolute',
        zIndex: 1000,
    },
    buttonContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 15,
    },
});