
import React, { Component } from 'react';
import { ViroCamera, ViroScene, ViroDirectionalLight, ViroImage, ViroAmbientLight, ViroNode, ViroSkyBox } from 'react-viro';

var CharacterHome = require('./CharacterHome');

export default class AvatarHome3DScene extends Component {

  constructor(props) {
    super(props);
      this.state = {
          bodyColor: global.bodyColor,
          refreshReq: !this.props.sceneNavigator.viroAppProps.refreshReq,
      };
    }

  componentDidMount() {
    //this.intervalId = setInterval(() => (
    //  this.setState(() => (
    //    {
    //      bodyColor: global.bodyColor
    //    }
    //  ))
    //), 1000);

    //  this.refeshInterval = setInterval(() => {
    //      this.props.sceneNavigator.replace({ scene: AvatarHome3DScene });
    //      console.warn("Replace");
    //      this.setState({ bodyColor: global.bodyColor });
    //  }, 10000);

      console.log("LOG__" + "AvatarHome3DScene did mount");
    }    

  componentWillUnmount() {
      //clearInterval(this.intervalId);
      //clearInterval(this.refeshInterval);
      console.log("LOG__" + "AvatarHome3DScene will unmount");
    }

    render() {        
        console.log("LOG__" + "AvatarHome3DScene Render " + this.props.sceneNavigator.viroAppProps.refreshReq);        

    let props = this.props.sceneNavigator.viroAppProps;
    let background = null;

    if (props.backgroundImage) {
      background = <ViroImage height={20} width={20} position={[0, 2, -5.5]} source={props.backgroundImage} />
    } else {
      background = <ViroSkyBox color={props.backgroundColor || "#e9e9ef"} />
    }

    let rotation = 0;
    if (props.fixedRotation) {
      rotation = props.fixedRotation;
    } else if (props.rotationY) {
      rotation = props.rotationY;
    }

    return (
      <ViroScene>
        < ViroCamera position={props.camPos || [0, 1, 2]} active={true} />
        {background}

        <ViroDirectionalLight influenceBitMask={1} color="#ffffff" direction={[0, 0, -1]} intensity={global.dirIntensity} />
        <ViroDirectionalLight influenceBitMask={2} color={this.state.bodyColor.face} direction={[0, 0, -1]} intensity={global.dirIntensity} />
        <ViroDirectionalLight influenceBitMask={4} color={this.state.bodyColor.body} direction={[0, 0, -1]} intensity={global.dirIntensity} />
        <ViroDirectionalLight influenceBitMask={8} color={this.state.bodyColor.shoes} direction={[0, 0, -1]} intensity={global.dirIntensity} />

        <ViroAmbientLight influenceBitMask={1} color="#ffffff" intensity={global.ambIntensity1} />
        <ViroAmbientLight influenceBitMask={2} color={this.state.bodyColor.face} intensity={global.ambIntensity} />
        <ViroAmbientLight influenceBitMask={4} color={this.state.bodyColor.body} intensity={global.ambIntensity} />
        <ViroAmbientLight influenceBitMask={8} color={this.state.bodyColor.shoes} intensity={global.ambIntensity} />

            <ViroNode position={props.avatarPos || [0, 0, 0]} rotation={[0, rotation, 0]}>
                <CharacterHome index={0} refreshReq={this.state.refreshReq} />
        </ViroNode>
      </ViroScene>
    );
  }
}

module.exports = AvatarHome3DScene;
