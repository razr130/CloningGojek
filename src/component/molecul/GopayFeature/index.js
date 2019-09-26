import React from 'react';
import { Text, View, Image } from 'react-native';


const GopayFeatures = (props) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={props.gopaybuttonimage} />
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginTop: 5 }}>{props.gopaybuttontitle}</Text>
      </View>
    )
  }

  export default GopayFeatures;