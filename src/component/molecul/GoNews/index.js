
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import GoNewsImage from '../../atom/GoNews/Image'
import GoNewsTitle from '../../atom/GoNews/Title'



const GoNews = (props,{onPress}) => {
    return (
        <View style={{ marginHorizontal: 20, marginVertical: 20, borderBottomColor: '#eeeeee', borderBottomWidth: 1, paddingBottom: 20 }}>

            
            <GoNewsImage newsimage={props.newsimage} />
            <View>
                <GoNewsTitle newstitle={props.newstitle} />
                <Text style={{ color: '#7a7a7a', marginTop: 4, fontSize: 12, fontWeight: '500' }}>After 20 years struggling, now finally.</Text>
                <TouchableOpacity onPress={onPress} style={{
                    backgroundColor: '#61a756',
                    borderRadius: 7,
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'flex-end'
                }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>READ</Text>

                </TouchableOpacity>
            </View>
        </View>

    )
}

export default GoNews;

