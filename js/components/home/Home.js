import React, { Component } from 'react';
import { StyleSheet, View, Alert, Button } from 'react-native';

import AvatarHome from '../commons/AvatarHome'
import NavBar from './NavBar.js'

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refresh: 0,
            refreshReq: false
        };
    }

    refresh() {
        //this.setState({ refresh: this.state.refresh + 1 });
        this.setState({
            refreshReq: !this.state.refreshReq,
        });

        
    }

    componentDidMount() {        

        console.log("LOG__" + "Home did mount");
       
    }

    componentWillUnmount() {
        console.log("LOG__" + "Home will unmount");
    }

    render() {
    return (
      <View style={styles.container}>
            <AvatarHome refreshReq={this.state.refreshReq} style={styles.avatar} backgroundImage={require("../../res/ui/home/background_square.png")} camPos={[0, 2, 3.5]} />

            <NavBar refreshCallback={() => this.refresh()} />

      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  avatar: {
    zIndex: -100,
  }
});
