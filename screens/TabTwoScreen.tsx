import { useFocusEffect } from '@react-navigation/core';
import React, {useEffect, useState}  from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import TeamItemComponent from '../components/TeamItemComponent';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { db } from '../firebase';
import { RootTabScreenProps } from '../types';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
let arrayOfDocs:any[] = [];
export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  
  const [teams, setTeams] = useState(arrayOfDocs)
  
   useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        console.log("Screen Two got focused")

        db.collection("teams").get().then((querySnapshot) => {
          let arrayOfDocs: string[] = []
          querySnapshot.forEach((doc) => {
              console.log(doc.id, " => ", doc.data());
              arrayOfDocs.push(doc.get('name'))
          });
          console.log(" size" , querySnapshot.docs.length)
          setTeams(()=> querySnapshot.docs)
      });

      });
  
      return unsubscribe;
    }, [navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.label}>Create team</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.label} >Fetch data</Text>
      </TouchableOpacity>
      <View style={styles.containerList}>
        {
          teams.map( (item) => 
          <View style={{backgroundColor:'orange', flex:1}}>
            <Text>{item.get('name')}</Text>
          </View>
          )
        }

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
