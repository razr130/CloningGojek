
import React from 'react';
import { Text, View, Image } from 'react-native';


const GopaySaldo = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 13, alignItems: 'center' }}>
            <Image source={require('../../../assets/icon/gopay.png')} />
            <Text style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'right'
            }}>Rp {props.money}</Text>
        </View>
    )
}

export default GopaySaldo;
