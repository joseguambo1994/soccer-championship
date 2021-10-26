import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

export default function TeamItemComponent() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemText}>Equipo 1</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  itemContainer:{
      flex:1,
      backgroundColor: Colors.dark.white,
      margin: 10,
      borderRadius: 15,
      borderColor: Colors.dark.blue,
      borderWidth:2
  },
  itemText:{
      fontSize:18,
      color: Colors.dark.blue
  }

});
