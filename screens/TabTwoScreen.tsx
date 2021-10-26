import * as React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import TeamItemComponent from '../components/TeamItemComponent';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.label}>Create team</Text>
      </TouchableOpacity>
      <View style={styles.containerList}>
        <TeamItemComponent />
        <TeamItemComponent />
        <TeamItemComponent />
        
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerList:{
    flex:1,
    backgroundColor: Colors.dark.green
  },
  button:{
    width: viewportWidth - 30,
    height: viewportHeight / 12,
    backgroundColor: Colors.dark.blue,
    borderRadius: 20,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  label:{
    color: Colors.dark.white,
    fontSize:22
  }


});
