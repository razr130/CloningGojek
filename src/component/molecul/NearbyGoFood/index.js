import React from 'react';
import { Text, View, Image } from 'react-native';


const NearbyFood = (props) => {
    return (
        <View style={{ marginHorizontal: 5 }}>
                        <View style={{ width: 120, height: 120 }}>
                            <Image source={{ uri: props.imageurl }} style={{
                                height: undefined,
                                width: undefined,
                                flex: 1,
                                resizeMode: 'cover',
                                borderRadius: 10
                            }} />
                        </View>
                        <Text style={{ fontWeight: 'bold', color: '#1c1c1c', fontSize: 12, marginVertical: 10 }}>{props.foodtitle}</Text>
                    </View>
    )
}

export default NearbyFood;