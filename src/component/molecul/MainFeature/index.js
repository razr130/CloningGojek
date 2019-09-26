import React from 'react';
import { Text, View, Image } from 'react-native';

const MainFeature = (props) => {
    return (
        <View style={{width: '25%', alignItems: 'center', marginBottom: 15 }}>
            <View style={{
                width: 58,
                height: 58,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 18,
                borderColor: '#e8e8e8',
                borderWidth: 1
            }}>
                <Image source={props.MainFeatureIcon} />
            </View>
            <Text style={{ fontSize: 9, fontWeight: 'bold', marginTop: 6, color: '#545454' }}>{props.MainFeatureTitle}</Text>
        </View>
    )
}

export default MainFeature;