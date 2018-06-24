import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

const Initial = props => {
  return (
    <View style={styles.container}>
      <Text>Money Mentor</Text>
      <View style={{ padding: 10 }}>
        <Button
          raised
          buttonStyle={{
            backgroundColor: '#118C8B',
            borderRadius: 10,
            width: '90%',
          }}
          textStyle={{ textAlign: 'center' }}
          title={`Login`}
          onPress={() => props.navigation.navigate('Login', { title: 'Login' })}
        >
          Login
        </Button>
      </View>
      <View style={{ padding: 10 }}>
        <Button
          raised
          buttonStyle={{
            backgroundColor: '#118C8B',
            borderRadius: 10,
            width: '90%',
          }}
          textStyle={{ textAlign: 'center' }}
          title={`Signup`}
          onPress={() =>
            props.navigation.navigate('Signup', { title: 'Signup' })
          }
        >
          Signup
        </Button>
      </View>
    </View>
  );
};

export default Initial;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2D3DA',
  },
});
