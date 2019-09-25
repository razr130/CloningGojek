import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class AwesomeApp extends Component {
  render() {


    return (
      <View style={styles.parent}>
        <View style={{backgroundColor: '#f1c40f', width: '100%', height: 100, borderRadius: 10, flexDirection: "row", padding: 5, marginBottom: 10,  position: 'relative'}}>
          <View style={{backgroundColor: 'red', width: 25, height: 25, borderRadius: 100, justifyContent: 'center', position: 'absolute', right: -10, top: -10}}>
            <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>1</Text>
          </View>
          </View>
        <View style={{backgroundColor: '#3498db', flex: 1, height: 80, marginRight: 5, borderRadius: 10, justifyContent: 'center'}}>
          <Text style={{color: 'white', fontStyle: 'italic', fontWeight: 'bold', textAlign: 'center'}}>HUBA</Text>
        </View>
        <View style={[{backgroundColor: '#2ecc71', marginHorizontal: 5}, styles.box]}></View>
        <View style={[{backgroundColor: '#3498db', marginLeft: 5}, styles.box]}></View>
        
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: 'wrap'
  },

  box: {
    flex: 1,
    height: 80,
    borderRadius: 10
  }

})