import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Login from "./components/Login";
import ListOrders from "./components/ListOrders";
import Home from "./components/Home";
import Order from "./components/Order";

const Stylelist = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      header: null,
      title: 'Login',
    }),
  },
  Home: {
    screen: TabNavigator({
      Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
          title: 'Home',
        }),
      },
      Orders: {
        screen: ListOrders,
        navigationOptions: ({ navigation }) => ({
          title: 'Orders',
        }),
      },
      Order: {
        screen: Order,
        navigationOptions: ({ navigation }) => ({
          title: 'Order',
        }),
      },
    }),
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
    }),
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar hidden={true}/>
        <Stylelist />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
});
