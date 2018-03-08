import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.homeContainer}>
        <Text  style={styles.titleText}> Home </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 10,
  },
});
