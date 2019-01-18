import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
import { MessageBar, MessageBarManager } from 'react-native-message-bar';
import { withNavigation } from 'react-navigation';

import BackButton from '../commons/BackButton.js'
import AvatarARScene from '../commons/AvatarARScene.js'

const MESSAGE = "Point towards a flat surface\nTap on a grey plane";

/* 
 * registerMessageBar  https://github.com/Talor-A/react-native-message-bar/issues/24#issuecomment-381422561
 * 
 * */

export class Photo extends Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        console.log(error, info);
    }

    render() {

        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <Text>Something went wrong.</Text>;
        }

        let props = {
            refresh: (r) => this.refresh = r,
            onPlaneSelected: this._onPlaneSelected,
        }
        return (
            <View style={styles.container}>
                <BackButton />
                <ViroARSceneNavigator ref={(r) => this._arScene = r} viroAppProps={props} style={styles.viro} apiKey="2AE4B758-D40B-4EE5-858A-54C8CE1CED20" initialScene={{ scene: AvatarARScene }} shadowsEnabled={true} autofocus={true} debug={true} />
                <TouchableOpacity onPress={this._takeScreenshot} style={styles.photo} >
                    <View style={styles.photoButtonBorder} />
                    <View style={styles.photoButton} />
                </TouchableOpacity>

                <TouchableOpacity underlayColor="transparent" style={styles.refresh} onPress={() => { this.refresh(); this._showMessage(MESSAGE) }}>
                    <Image source={require('../../res/ui/commons/refresh.png')} style={styles.refreshIcon} />
                </TouchableOpacity>

                <MessageBar ref={ref => { MessageBarManager.registerMessageBar(ref); }} />
            </View>
        );
    }

    _onPlaneSelected = () => {
        MessageBarManager.hideAlert();
    }

    _showMessage = (msg) => {
        MessageBarManager.showAlert({
            title: msg,
            alertType: 'info',

            titleNumberOfLines: 2,

            titleStyle: { backgroundColor: '#2c2c83', textAlign: 'center' },
            stylesheetInfo: { backgroundColor: '#2c2c83', strokeColor: '#2c2c83', titleColor: 'white' },

            shouldHideAfterDelay: false,

            viewTopOffset: 120,
            viewLeftOffset: 20,
            viewRightOffset: 20,
        });
    }

    _takeScreenshot = () => {
        MessageBarManager.showAlert({
            title: 'Saved in Cameral Roll',
            alertType: 'info',

            titleStyle: { backgroundColor: '#2c2c83', textAlign: 'center' },
            stylesheetInfo: { backgroundColor: '#2c2c83', strokeColor: '#2c2c83', titleColor: 'white' },

            viewTopOffset: 45,
            viewLeftOffset: 90,
            viewRightOffset: 90,
        });

        let count = this.state.count + 1;
        this._arScene.sceneNavigator.takeScreenshot("Viro_" + count.toString().padStart(4, '0'), true);
        this.setState(() => (
            {
                count: count,
            }
        ))
    }

    componentDidMount() {
        //MessageBarManager.registerMessageBar(this.refs.alert);        

        this._showMessage(MESSAGE);
    }

    static getDerivedStateFromProps() {
        MessageBarManager.unregisterMessageBar();
        return null;
    }

}

var styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    viro: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    photo: {
        position: 'absolute',
        width: 100,
        height: 100,
        bottom: 30,
        alignSelf: 'center',
    },
    refresh: {
        position: 'absolute',
        width: 50,
        height: 50,
        bottom: 55,
        right: 55,
    },
    refreshIcon: {
        width: 50,
        height: 50,
    },
    photoButtonBorder: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'white',
        alignSelf: 'center',
    },
    photoButton: {
        position: 'absolute',
        backgroundColor: 'white',
        width: 70,
        height: 70,
        bottom: 15,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'white',
        alignSelf: 'center',
    },
});

export default withNavigation(Photo);
