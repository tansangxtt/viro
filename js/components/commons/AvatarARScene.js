
import React, { Component } from 'react';
import { ViroARScene, ViroDirectionalLight, ViroNode, ViroAmbientLight, ViroARPlaneSelector, ViroARPlane, ViroQuad } from 'react-viro';

var Character = require('./Character');

const DEFAULT_ROTATION = 0;
const DEFAULT_SCALE = 0.2

export class AvatarARScene extends Component {

    constructor(props) {
        super(props);

        this.prevRotationFactor = DEFAULT_ROTATION;
        this.prevScaleFactor = DEFAULT_SCALE;

        this.state = {};
        this.state.rotation = [0, DEFAULT_ROTATION, 0];
        this.state.scale = [DEFAULT_SCALE, DEFAULT_SCALE, DEFAULT_SCALE];
        this.state.bodyColor = global.bodyColor;

        this.viroAppProps = this.props.sceneNavigator.viroAppProps;
        //this.ARPlaneRef = React.createRef();
        this.ARPlaneRef = null;
    }

    componentDidMount = () => {
        this.viroAppProps.refresh(this.ARPlaneRef.reset);
        this.intervalId = setInterval(() => (
            this.setState(() => (
                {
                    bodyColor: global.bodyColor
                }
            ))
        ), 100);
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        console.log(error, info);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <Text>Something went wrong.</Text>;
        }

        return (
            <ViroARScene anchorDetectionTypes={"PlanesHorizontal"}>                
                <ViroARPlaneSelector ref={el => this.ARPlaneRef = el} minHeight={.05} minWidth={.05} alignment={"Horizontal"} onPlaneSelected={() => this.viroAppProps.onPlaneSelected()}>
                    <ViroDirectionalLight influenceBitMask={1} color="#ffffff" direction={[0, 0, -1]} intensity={global.dirIntensity} />
                    <ViroDirectionalLight influenceBitMask={2} color={this.state.bodyColor.face} direction={[0, 0, -1]} intensity={global.dirIntensity} />
                    <ViroDirectionalLight influenceBitMask={4} color={this.state.bodyColor.body} direction={[0, 0, -1]} intensity={global.dirIntensity} />
                    <ViroDirectionalLight influenceBitMask={8} color={this.state.bodyColor.shoes} direction={[0, 0, -1]} intensity={global.dirIntensity} />

                    <ViroAmbientLight influenceBitMask={1} color="#ffffff" intensity={global.ambIntensity1} />
                    <ViroAmbientLight influenceBitMask={2} color={this.state.bodyColor.face} intensity={global.ambIntensity} />
                    <ViroAmbientLight influenceBitMask={4} color={this.state.bodyColor.body} intensity={global.ambIntensity} />
                    <ViroAmbientLight influenceBitMask={8} color={this.state.bodyColor.shoes} intensity={global.ambIntensity} />

                    <ViroNode rotation={this.state.rotation} scale={this.state.scale} onDrag={this._onDrag} onPinch={this._onPinch} onRotate={this._onRotate} dragType="FixedToWorld">
                        <Character index={0} />
                    </ViroNode>
                </ViroARPlaneSelector>

            </ViroARScene>

        );
    }

    _onRotate = (rotateState, rotationFactor, source) => {
        if (rotateState == 1) {
            this.prevRotationFactor = this.state.rotation[1];
        } else if (rotateState == 2) {
            let newRotation = this.prevRotationFactor + rotationFactor;
            this.setState({
                rotation: [this.state.rotation[0], newRotation, this.state.rotation[2]]
            });
        }
    }

    _onPinch = (pinchState, scaleFactor, source) => {
        if (pinchState == 1) {
            this.prevScaleFactor = this.state.scale[0];
        } else if (pinchState == 2) {
            let newScale = this.prevScaleFactor * scaleFactor;
            this.setState({
                scale: [newScale, newScale, newScale]
            });
        }
    }

    _onDrag(draggedToPosition, source) {
    }
}

export default AvatarARScene;
