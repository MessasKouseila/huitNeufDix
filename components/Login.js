import React from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
import Home from "./Home";

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {profils: ["Skinny", "Medium", "Strong"]};
  }

  login(screen) {
    console.log(screen);
    this.props.navigation.navigate('Home');
  }


  render() {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.titleText}> Select your profile to start </Text>
        {this.state.profils.map((profil, i) => {
          var loged = this.login.bind(this, profil);
          return <View style={styles.button} key={i}>
            <Button
              key={i}
              onPress={loged}
              title={profil}
              color={"#475ba8"}
              accessibilityLabel="Select Profil to start"
            />
          </View>;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 10,
  },
  button: {
    marginBottom: 20,
    width: 200,
    height:30,
  },
});

