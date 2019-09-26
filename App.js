import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchBar from './src/component/molecul/SearchBar';
import GoNews from './src/component/molecul/GoNews';
import NearbyGoFood from './src/container/organism/NearbyGoFood';
import BottomNavBar from './src/container/organism/BottomNav';
import GoPay from './src/container/organism/GoPay';
import MainFeatureOrganism from './src/container/organism/MainFeature';




class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
          <SearchBar />
          <GoPay />        
          <MainFeatureOrganism />
          <View style={{ backgroundColor: '#eeeeee', height: 10, marginTop: 20 }}></View>
          <GoNews />
          <NearbyGoFood />
        </ScrollView>
        <BottomNavBar />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#ffffff',
    flex: 1
  },

  mainmenubutton: {
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    borderColor: '#e8e8e8',
    borderWidth: 1
  },

  horizontalscrollimage: {
    height: undefined,
    width: undefined,
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 10
  },

  newsbutton: {
    backgroundColor: '#61a756',
    borderRadius: 7,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },

  box: {
    flex: 1,
    height: 80,
    borderRadius: 10
  },
  bottomnav: {
    flexDirection: 'row'
  },
  bottomnavtext: {
    fontSize: 10,
    color: '#545454',
    marginTop: 0,
    marginBottom: 5
  },
  searchbox: {
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 25,
    height: 40,
    padding: 12,
    paddingStart: 40,
    marginHorizontal: 20,
    color: '#545454',
    fontSize: 13
  },
  moneytext: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'right'
  }



})