import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import NearbyFood from '../../../component/molecul/NearbyGoFood';


class NearbyGoFood extends Component {
    render() {
        return (
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ marginBottom: 10 }}>
                    <Image source={require('../../../assets/logo/go-food.png')} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold', color: '#1c1c1c' }}>Nearby Restaurant</Text>
                    <Text style={{ fontWeight: 'bold', color: '#61a756' }}>See All</Text>
                </View>
                <ScrollView horizontal={true} style={{ marginVertical: 20, flexDirection: 'row' }}>
                    <NearbyFood imageurl='https://craftlog.com/m/i/5213227=s1280=h960' foodtitle="Ayam Goreng Kremes" />
                    <NearbyFood imageurl='https://craftlog.com/m/i/5213227=s1280=h960' foodtitle="Ayam Goreng Kremes" />
                    <NearbyFood imageurl='https://craftlog.com/m/i/5213227=s1280=h960' foodtitle="Ayam Goreng Kremes" />
                    <NearbyFood imageurl='https://craftlog.com/m/i/5213227=s1280=h960' foodtitle="Ayam Goreng Kremes" />
                    <NearbyFood imageurl='https://craftlog.com/m/i/5213227=s1280=h960' foodtitle="Ayam Goreng Kremes" />
                    <NearbyFood imageurl='https://craftlog.com/m/i/5213227=s1280=h960' foodtitle="Ayam Goreng Kremes" />
                    
                </ScrollView>
            </View>
        )
    }
}

export default NearbyGoFood;