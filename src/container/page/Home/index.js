import React, { Component } from 'react';
import { View, ScrollView, FlatList, Text } from 'react-native';
import SearchBar from '../../../component/molecul/SearchBar';
import GoNews from '../../../component/molecul/GoNews';
import NearbyGoFood from '../../../container/organism/NearbyGoFood';
import BottomNavBar from '../../../container/organism/BottomNav';
import GoPay from '../../../container/organism/GoPay';
import MainFeatureOrganism from '../../../container/organism/MainFeature';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

class Home extends Component {

    constructor() {
        super();
        this.state = {
            dataSource: []
        }
    }

    renderItem = ({item}) => {
        return(
            <GoNews newstitle={item.title} newsimage={item.thumbnail_image_name} onPress={() => this.props.navigation.navigate('NewsDetail')} />
        )
    }

    componentDidMount(){
        return fetch('https://s3-us-west-2.amazonaws.com/youtubeassets/home.json')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              dataSource: responseJson,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }

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
                    {/* <GoNews newstitle="Fucking ash" onPress={() => this.props.navigation.navigate('NewsDetail')} /> */}
                    <FlatList
                         data={this.state.dataSource}
                         renderItem={this.renderItem}
                         keyExtractor={item => item.title}
                    />
                    <NearbyGoFood />
                </ScrollView>
                <BottomNavBar />
            </View>
        );
    }
}

export default Home;