import React, { Component } from 'react';
import { StyleSheet, PanResponder, View } from 'react-native';
import { Viro3DSceneNavigator } from 'react-viro';

var Avatar3DScene = require('./Avatar3DScene');

export class Avatar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rotationY: 0,
            panResponder: PanResponder.create({
                onStartShouldSetPanResponder: () => true,
                onPanResponderMove: (evt, gestureState) => {
                    if (this.props.fixedRotation !== null) {
                        this.setState({
                            rotationY: this.state.rotationY + gestureState.vx * 30
                        });
                    }

                },
            }),


        };
    }

    render() {
        let props = this.props;
        props.rotationY = this.state.rotationY;
        return (           
            <View style={styles.container} >
                <Viro3DSceneNavigator style={styles.viro} apiKey="2AE4B758-D40B-4EE5-858A-54C8CE1CED20" viroAppProps={props} initialScene={{ scene: Avatar3DScene }} />
                <View style={styles.overlay} {...this.state.panResponder.panHandlers} />
            </View>
        );
    }
}

export default Avatar;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1
    },
    viro: {
        zIndex: -1
    }
});