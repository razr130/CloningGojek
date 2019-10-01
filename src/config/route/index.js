import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Home, NewsDetail, Login, Register, Orders } from '../../container/page';




const TabNavigator = createBottomTabNavigator(
    {     
        Home: {
            screen: Home,
        },
        Orders: Orders,     
    },
    {     
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                if(routeName == "Home") {
                    return(
                        <Image style={{width: 27, height: 27}} 
                        source={ focused ? require('../../assets/icon/home-active.png') : 
                        require('../../assets/icon/home.png')} />
                    )
                }
                else{
                    return(
                        <Image style={{width: 27, height: 27}} 
                        source={ focused ? require('../../assets/icon/order-active.png') : 
                        require('../../assets/icon/order.png')} />
                    )
                }
            }
        }),
        tabBarOptions: {
            activeTintColor: '#61a756',
            inactiveTintColor: '#7a7a7a'
        }
    }
);

const OrderStack = createStackNavigator ({
    Tabs: { screen: TabNavigator,
    navigationOptions: {
        title: 'GOJEK',
        headerBackTitle: null,
        headerStyle: {
            backgroundColor: '#61a756',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    }},
    NewsDetail: { screen: NewsDetail,
        navigationOptions: {
            title: 'Detail',
            headerStyle: {
                backgroundColor: '#61a756',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
        }}
})



export default createAppContainer(OrderStack);