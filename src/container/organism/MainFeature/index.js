import React, { Component } from 'react';
import { View } from 'react-native';
import MainFeature from '../../../component/molecul/MainFeature';

class MainFeatureOrganism extends Component {
    render() {
        return(
            <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 15 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap' }}>
              <MainFeature MainFeatureTitle="GO-RIDE" MainFeatureIcon={require('../../../assets/icon/go-ride.png')} />
              <MainFeature MainFeatureTitle="GO-FOOD" MainFeatureIcon={require('../../../assets/icon/go-food.png')} />
              <MainFeature MainFeatureTitle="GO-CAR" MainFeatureIcon={require('../../../assets/icon/go-car.png')} />
              <MainFeature MainFeatureTitle="GO-DEALS" MainFeatureIcon={require('../../../assets/icon/go-deals.png')} />
              <MainFeature MainFeatureTitle="GO-PULSA" MainFeatureIcon={require('../../../assets/icon/go-pulsa.png')} />
              <MainFeature MainFeatureTitle="GO-SEND" MainFeatureIcon={require('../../../assets/icon/go-send.png')} />
              <MainFeature MainFeatureTitle="GO-BLUEBIRD" MainFeatureIcon={require('../../../assets/icon/go-bluebird.png')} />
              <MainFeature MainFeatureTitle="MORE" MainFeatureIcon={require('../../../assets/icon/go-more.png')} />
            </View>
          </View>
        )
    }
}

export default MainFeatureOrganism;