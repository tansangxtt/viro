import React, { Component } from 'react';
import { StyleSheet, Image} from 'react-native';


class Lock extends Component {
  render() {
    return (
      <Image style={styles.image} source={require('../../res/ui/commons/lock.png')} />
    );
  }
}

export default Lock;


const styles = StyleSheet.create({
  image: {
    width: 15,
    height: 15,
  },
});