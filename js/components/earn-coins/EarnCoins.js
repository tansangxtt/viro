import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import BackButton from '../commons/BackButton.js'
import ListButton from './ListButton.js'

export class EarnCoins extends Component {
    render() {
        return (
            <View style={styles.container}>
                <BackButton />

                <ImageBackground source={require('../../res/ui/earn-coins/curve_shape.png')} style={styles.background}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.description}>{"Do one of the following\nto earn coins!"}</Text>

                        <View style={styles.listButton}>
                            <ListButton disable={true} title="Take A Quiz" desc="Earn 10 - 150 Coins" background={require('../../res/ui/earn-coins/button_take_a_quiz.png')} />
                        </View>

                        <View style={styles.listButton}>
                            <ListButton disable={true} title="Watch A Video" desc="Earn 30 - 250 Coins" background={require('../../res/ui/earn-coins/button_watch_a_video.png')} />
                        </View>

                        <View style={styles.listButton}>
                            <ListButton disable={true} title="Read An Article" desc="Earn 40 - 400 Coins" background={require('../../res/ui/earn-coins/button_read_an_article.png')} />
                        </View>

                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default withNavigation(EarnCoins);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: "#3063ac",
    },
    contentContainer: {
        marginTop: 150,
        flex: 1,
        alignItems: 'center',
    },
    description: {
        marginVertical: 30,
        textAlign: 'center',
        fontSize: 20,
    },
    listButton: {
        flex: 1,
        paddingTop: 10,
    }
});
