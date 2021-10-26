import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.textInput}/>
      <Text style={styles.label}>Contraseña</Text>
      <TextInput style={styles.textInput}/>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.labelButton}> Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.labelButton}> Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    flex:1,
    backgroundColor: Colors.dark.green,
    color: Colors.dark.white
  },
  label:{
    flex:1,
    color: Colors.dark.blue,
    fontSize:22,
  },
  signUpButton:{
    flex:1,
    backgroundColor: Colors.dark.blue,
    borderRadius:15
  },
  signInButton:{
    flex:1,
    backgroundColor: Colors.dark.red,
    borderRadius:15
  },
  labelButton:{
    flex:1,
    color: Colors.dark.white,
    fontWeight: 'bold',
    fontSize:20
  }
});
