import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { styles, colorTheme } from '../../common/styles';


class Initial extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: colorTheme.blue.medium },
  };
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('../../../public/img/animatedClouds.gif')}
        >
        <View style={styles.logoLocation}>
          <Image
            style={styles.logo}
            source={require('../../../public/img/animatedLogo.gif')}
          />



          <Text style={styles.initialScreenText}>MONEY</Text>
          <Text style={styles.initialScreenTextSecondLine}>MENTOR</Text>
        </View>
        <View style={{
        position: 'absolute', bottom: 20}}>
        <View style={{
        padding: 10}}>
          <Button
            raised
            buttonStyle={styles.orangebutton}
            textStyle={styles.buttontext}
            title={`Login`}
            onPress={() =>
              this.props.navigation.navigate('Login', { title: 'Login' })
            }
          >
            Login
          </Button>
        </View>
        <View style={{
        padding: 10}}>
          <Button
            raised
            buttonStyle={styles.orangebutton}
            textStyle={styles.buttontext}
            title={`Signup`}
            onPress={() =>
              this.props.navigation.navigate('Signup', { title: 'Signup' })
            }
          >
            Signup
          </Button>

          <Button
            raised
            buttonStyle={styles.orangebutton}
            textStyle={styles.buttontext}
            title={`Budget Setup`}
            onPress={() =>
              this.props.navigation.navigate('BudgetSetup', { title: 'BudgetSetup' })
            }
          >
          </Button>

        </View>
        </View>
      </ImageBackground>
      </View>
    );
  }
}

export default Initial;
