import React, { Component } from 'react';
import { View, ScrollView, FlatList, Text } from 'react-native';
import SearchBar from '../../../component/molecul/SearchBar';
import GoNews from '../../../component/molecul/GoNews';
import NearbyGoFood from '../../../container/organism/NearbyGoFood';
import BottomNavBar from '../../../container/organism/BottomNav';
import GoPay from '../../../container/organism/GoPay';
import MainFeatureOrganism from '../../../container/organism/MainFeature';


class Home extends Component {
    
      
    render() {
        return (
            <View style={{
                backgroundColor: '#ffffff',
                flex: 1
            }}>
                <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
                    <SearchBar />
                    <GoPay />
                    <MainFeatureOrganism />
                    <View style={{ backgroundColor: '#eeeeee', height: 10, marginTop: 20 }}></View>
                    <NearbyGoFood />
                </ScrollView>
            </View>
        );
    }
}

export default Home;