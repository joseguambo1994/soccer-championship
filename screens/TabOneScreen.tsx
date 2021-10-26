import  React, {useEffect, useState} from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { auth } from '../firebase';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpUser = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        alert('User created successfully' + user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        
        alert('User creation failed' + ' '+ errorCode + ' ' + errorMessage)
      });
  };

  const signInUser = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        alert('User login success' + ' '+user)
        navigation.navigate('TabTwo')
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('User login failed' + ' '+ errorCode + ' ' + errorMessage)
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.textInput} onChangeText={(text)=>setEmail(text)}/>
      <Text style={styles.label}>Contraseña</Text>
      <TextInput style={styles.textInput} onChangeText={(text)=>setPassword(text)}/>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.labelButton} onPress={()=>signUpUser()}> Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.labelButton} onPress={()=>signInUser()}> Sign In</Text>
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
