import React, { Component } from 'react';
import { View } from 'react-native';
import GoPaySaldo from '../../../component/molecul/GoPaySaldo';
import GopayFeatures from '../../../component/molecul/GopayFeature';


class GoPay extends Component {
    render() {
        return(
            <View style={{ marginHorizontal: 20, borderRadius: 10, backgroundColor: '#2c5fb8', marginTop: 20 }}>
            <GoPaySaldo money="2.470.000" />
            <View style={{ backgroundColor: '#2f65bd', flexDirection: 'row', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingVertical: 20 }}>
              <GopayFeatures gopaybuttontitle="Pay" gopaybuttonimage={require('../../../assets/icon/pay.png')} />
              <GopayFeatures gopaybuttontitle="Nearby" gopaybuttonimage={require('../../../assets/icon/nearby.png')} />
              <GopayFeatures gopaybuttontitle="Top Up" gopaybuttonimage={require('../../../assets/icon/topup.png')} />
              <GopayFeatures gopaybuttontitle="More" gopaybuttonimage={require('../../../assets/icon/more.png')} />
            </View>
          </View>
        )
    }
}

export default GoPay;