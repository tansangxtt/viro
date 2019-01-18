import React, { Component } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import Avatar from '../commons/Avatar.js';
import BackButton from '../commons/BackButton.js';
import Panel from './Panel.js';



export class Profile extends Component {
  render() {
    var medals = [];

    return (
      <View style={styles.container}>
        <BackButton />
        <View style={styles.contentContainer}>

          <Avatar style={styles.avatar} />

          <View style={styles.panelContainer}>
            <Panel text={"Quizzes\nDone"} value={0} backgroundImage={require("../../res/ui/profile/panel_quizzes.png")} />
            <Panel text={"Videos\nWatched"} value={0} backgroundImage={require("../../res/ui/profile/panel_videos.png")} />
            <Panel text={"Articles\nRead"} value={0} backgroundImage={require("../../res/ui/profile/panel_articles.png")} />
          </View>

          <View style={styles.medalsContainer}>
            <Text style={styles.medalsTitle} >Medals Earned</Text>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  panelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: '#3162ac',
  },
  contentContainer: {
    marginTop: 150,
    flex: 1,
  },
  avatar: {
    zIndex: -100,
  },
  medalsTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  medalsContainer: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: '#3162ac',
  },
  scrollContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  curve: {
    width: Dimensions.get('window').width,
  },
  thumbnail: {
    height: 80,
    width: 80,
  },
});
