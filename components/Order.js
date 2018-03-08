import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Order extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.titleText}> Order </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 10,
  },
});
