import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

interface HourInfo {
    name : string;
    category: string;
  }

export default function TeamItemComponent(props:HourInfo) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemText}>{props.name}</Text>
            
            <Text style={styles.itemText}>{props.category}</Text>
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
      width:300,
      height: 400,
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
