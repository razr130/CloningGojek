import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import GoNews from '../../../component/molecul/GoNews';
import BottomNavBar from '../../../container/organism/BottomNav';
import { SafeAreaView } from 'react-navigation';


class Orders extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: []
        }
    }

    renderItem = ({ item }) => {
        return (
            <GoNews newstitle={item.title} newsimage={item.thumbnail_image_name} onPress={() => this.props.navigation.navigate('NewsDetail')} />
        )
    }

    componentDidMount() {
        return fetch('https://s3-us-west-2.amazonaws.com/youtubeassets/home.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    dataSource: responseJson,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <View style={{
                backgroundColor: '#ffffff',
                flex: 1
            }}>
                <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.title}
                    />
                </SafeAreaView>
            </View>
        );
    }
}

export default Orders;
