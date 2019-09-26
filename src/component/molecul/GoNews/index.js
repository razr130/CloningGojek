
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';


const GoNews = () => {
    return (
        <View style={{ marginHorizontal: 20, marginVertical: 20, borderBottomColor: '#eeeeee', borderBottomWidth: 1, paddingBottom: 20 }}>

            <View>
                <Image style={{ height: 200, borderRadius: 10 }} source={{ uri: 'https://i.ytimg.com/vi/gsUWM6e6l_c/maxresdefault.jpg' }} />
            </View>
            <View>
                <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 15, color: '#1a1a1a' }}>Ash Win Alolan League</Text>
                <Text style={{ color: '#7a7a7a', marginTop: 4, fontSize: 12, fontWeight: '500' }}>After 20 years struggling, now finally.</Text>
                <TouchableOpacity style={{
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

