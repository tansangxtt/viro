import React, { Component } from 'react';
import { StyleSheet, PanResponder, View } from 'react-native';
import { Viro3DSceneNavigator } from 'react-viro';

var AvatarHome3DScene = require('./AvatarHome3DScene');

export class AvatarHome extends Component {

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
            viroProps: {
                backgroundImage: this.props.backgroundImage,
                camPos: this.props.camPos,
                refreshReq: this.props.refreshReq,
                rotationY: 0,
            }
        };
        //this.state.rotationY = 0;
        //this.state.panResponder = PanResponder.create({
        //    onStartShouldSetPanResponder: () => true,
        //    onPanResponderMove: (evt, gestureState) => {
        //        if (this.props.fixedRotation !== null) {
        //            this.setState({
        //                rotationY: this.state.rotationY + gestureState.vx * 30
        //            });
        //        }

        //    },
        //});
    }

    componentDidMount() {
        console.log("LOG__" + "AvatarHome Did mount");
    }

    componentWillUnmount() {
        console.log("LOG__" + "AvatarHome will unmount");
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.refreshReq != this.props.refreshReq) {
            console.log("LOG__" + "AvatarHome WillReceiveProps");
            this.setState({
                viroProps: {
                    backgroundImage: this.props.backgroundImage,
                    camPos: this.props.camPos,
                    refreshReq: !this.props.refreshReq,
                }
            });
        }

    }   

    render() {
        let props = this.props;
        props.rotationY = this.state.rotationY;        
        return (           
            <View style={styles.container} >
                <Viro3DSceneNavigator style={styles.viro} apiKey="2AE4B758-D40B-4EE5-858A-54C8CE1CED20" viroAppProps={this.state.viroProps} initialScene={{ scene: AvatarHome3DScene }} />
                <View style={styles.overlay} {...this.state.panResponder.panHandlers} />
            </View>
        );
    }
}

export default AvatarHome;


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