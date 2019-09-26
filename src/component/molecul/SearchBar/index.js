import React from 'react';
import { View, Image, TextInput, SafeAreaView } from 'react-native';



const SearchBar = () => {
    return (

        <SafeAreaView style={{ marginTop: 20, flexDirection: 'row', backgroundColor: 'white' }}>
            <View style={{ position: 'relative', marginEnd: 0, flex: 1 }}>
                <TextInput placeholder="What do you want to eat ? " style={{
                    borderWidth: 1,
                    borderColor: '#e8e8e8',
                    borderRadius: 25,
                    height: 40,
                    padding: 12,
                    paddingStart: 40,
                    marginHorizontal: 20,
                    color: '#545454',
                    fontSize: 13
                }} />
                <Image source={require('../../../assets/icon/search.png')} style={{ position: 'absolute', left: 30, top: 7 }} />
            </View>
            <View style={{ width: 45, alignContent: 'center', justifyContent: 'center' }}>
                <Image source={require('../../../assets/icon/promo.png')} />
            </View>
        </SafeAreaView>

    )
}

export default SearchBar;