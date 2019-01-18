import React, { Component } from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';


export class AvatarButton extends Component {

  constructor(props) {
      super(props);
      this.state = { pressStatus: false };
  }
  _onHideUnderlay() {
      this.setState({ pressStatus: false });
  }
  _onShowUnderlay() {
      this.setState({ pressStatus: true });
}

  render() {
    return (
      <TouchableHighlight style={styles.container} underlayColor="transparent" onPress={() => this.props.press()} 
        onHideUnderlay={this._onHideUnderlay.bind(this)}
        onShowUnderlay={this._onShowUnderlay.bind(this)}>
        <Image style={[styles.button, this.state.pressStatus ? styles.buttonPress: null]} source={this.props.source} />
      </TouchableHighlight>
    );
  }
}

export default AvatarButton;


const styles = StyleSheet.create({
  container:{
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
  },
  buttonPress:{
    transform: [{scale:1.1}],
  }
});