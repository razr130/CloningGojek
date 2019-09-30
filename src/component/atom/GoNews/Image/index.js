import React from 'react';
import { View, Image } from 'react-native';

const GoNewsImage = (props) => {
    return (
        <View>
            <Image style={{ height: 200, borderRadius: 10 }} source={{ uri: props.newsimage }} />
        </View>
    )
}
export default GoNewsImage;