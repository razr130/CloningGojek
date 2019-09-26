import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import BottomNav from '../../../component/molecul/BottomNavBar';



class BottomNavBar extends Component {
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: 'white', flexDirection: 'row' }}>
            <BottomNav bottomtitle="Home" bottomicon={require('../../../assets/icon/home.png')} />
            <BottomNav bottomtitle="Orders" bottomicon={require('../../../assets/icon/order.png')} />
            <BottomNav bottomtitle="Help" bottomicon={require('../../../assets/icon/help.png')} />
            <BottomNav bottomtitle="Inbox" bottomicon={require('../../../assets/icon/inbox.png')} />
            <BottomNav bottomtitle="Account" bottomicon={require('../../../assets/icon/account.png')} />
          </SafeAreaView>
        )
    }
}

export default BottomNavBar;