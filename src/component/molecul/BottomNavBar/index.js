import React from 'react';
import { Text, View, Image } from 'react-native';


const BottomNav = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={props.bottomicon} style={{ width: 23, height: 23, marginTop: 6 }} />
            <Text style={{
                fontSize: 10,
                color: '#545454',
                marginTop: 0,
                marginBottom: 5
            }}>{props.bottomtitle}</Text>
        </View>
    )
}

export default BottomNav;