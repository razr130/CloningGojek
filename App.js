import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

 class HomeScreen extends Component {
  render() {


    return (
      <View style={styles.parent}>
        <View style={{backgroundColor: 'white', flex:1}}>
          
          {/* search bar */}
          <SafeAreaView style={{marginTop: 20, flexDirection: 'row'}}>
            <View style={{position: 'relative', marginEnd: 0, flex: 1}}>
              <TextInput placeholder="What do you want to eat ? " style={styles.searchbox} />
              <Image source={require('./icon/search.png')} style={{position: 'absolute', left: 30, top: 7}} />
            </View>
            <View style={{width: 45, alignContent: 'center', justifyContent: 'center'}}>
              <Image source={require('./icon/promo.png')} />
            </View>
          </SafeAreaView>

          {/* gopay */}

          <View style={{ marginHorizontal: 20, borderRadius: 10, backgroundColor: '#2c5fb8', marginTop: 20}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 13, alignItems: 'center'}}>
              <Image source={require('./icon/gopay.png')} />
              <Text style={styles.moneytext}>Rp 2.350.000</Text>
            </View>
            <View style={{backgroundColor: '#2f65bd', flexDirection: 'row', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingVertical: 20}}>
              <View style={{flex: 1, justifyContent: 'center' ,alignItems: 'center'}}>
              <Image source={require('./icon/pay.png')} />
                <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Pay</Text>
              </View>
              <View style={{flex: 1, justifyContent: 'center' ,alignItems: 'center'}}>
              <Image source={require('./icon/nearby.png')} />
                <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Nearby</Text>
              </View>
              <View style={{flex: 1, justifyContent: 'center' ,alignItems: 'center'}}>
              <Image source={require('./icon/topup.png')} />
                <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Top up</Text>
              </View>
              <View style={{flex: 1, justifyContent: 'center' ,alignItems: 'center'}}>
              <Image source={require('./icon/more.png')} />
                <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>More</Text>
              </View>
            </View>
          </View>

          {/* main feature */}
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 20, marginTop: 15}}>
            <View style={{justifyContent: 'space-between', width: '100%', flexDirection: 'row', marginBottom: 10}}>
             <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 58, height: 58, alignItems: 'center', justifyContent: 'center', borderRadius: 18, borderColor: '#e8e8e8', borderWidth: 1}}>
                <Image source={require('./icon/go-ride.png')} />
              </View>
              <Text style={{fontSize: 9, fontWeight: 'bold', marginTop: 6, color:'#545454'}}>GO-RIDE</Text>
             </View>
              
             <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 58, height: 58, alignItems: 'center', justifyContent: 'center', borderRadius: 18, borderColor: '#e8e8e8', borderWidth: 1}}>
                <Image source={require('./icon/go-food.png')} />
              </View>
              <Text style={{fontSize: 9, fontWeight: 'bold', marginTop: 6, color:'#545454'}}>GO-FOOD</Text>
             </View>
             <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 58, height: 58, alignItems: 'center', justifyContent: 'center', borderRadius: 18, borderColor: '#e8e8e8', borderWidth: 1}}>
                <Image source={require('./icon/go-car.png')} />
              </View>
              <Text style={{fontSize: 9, fontWeight: 'bold', marginTop: 6, color:'#545454'}}>GO-CAR</Text>
             </View>
             <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 58, height: 58, alignItems: 'center', justifyContent: 'center', borderRadius: 18, borderColor: '#e8e8e8', borderWidth: 1}}>
                <Image source={require('./icon/go-deals.png')} />
              </View>
              <Text style={{fontSize: 9, fontWeight: 'bold', marginTop: 6, color:'#545454'}}>GO-DEALS</Text>
             </View>
            </View>
            <View style={{justifyContent: 'space-between', width: '100%', flexDirection: 'row'}}>
            <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 58, height: 58, alignItems: 'center', justifyContent: 'center', borderRadius: 18, borderColor: '#e8e8e8', borderWidth: 1}}>
                <Image source={require('./icon/go-pulsa.png')} />
              </View>
              <Text style={{fontSize: 9, fontWeight: 'bold', marginTop: 6, color:'#545454'}}>GO-PULSA</Text>
             </View>
             <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 58, height: 58, alignItems: 'center', justifyContent: 'center', borderRadius: 18, borderColor: '#e8e8e8', borderWidth: 1}}>
                <Image source={require('./icon/go-send.png')} />
              </View>
              <Text style={{fontSize: 9, fontWeight: 'bold', marginTop: 6, color:'#545454'}}>GO-SEND</Text>
             </View>
             <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 58, height: 58, alignItems: 'center', justifyContent: 'center', borderRadius: 18, borderColor: '#e8e8e8', borderWidth: 1}}>
                <Image source={require('./icon/go-bluebird.png')} />
              </View>
              <Text style={{fontSize: 9, fontWeight: 'bold', marginTop: 6, color:'#545454'}}>GO-BLUEBIRD</Text>
             </View>
             <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 58, height: 58, alignItems: 'center', justifyContent: 'center', borderRadius: 18, borderColor: '#e8e8e8', borderWidth: 1}}>
                <Image source={require('./icon/go-more.png')} />
              </View>
              <Text style={{fontSize: 9, fontWeight: 'bold', marginTop: 6, color:'#545454'}}>MORE</Text>
             </View>
            </View>
          </View>

          {/* garis abu */}
          <View style={{backgroundColor: '#eeeeee', height: 10, marginTop: 20}}></View>

          {/* news */}
          <View>
            
          </View>

        </View>
        <SafeAreaView style={[{backgroundColor: 'white'}, styles.bottomnav]}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./icon/home.png')} />
              <Text style={[styles.bottomnavtext,{marginTop: 5}]}>Home</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./icon/order.png')} />
            <Text style={[styles.bottomnavtext,{marginTop: 5}]}>Orders</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./icon/help.png')} />
            <Text style={[styles.bottomnavtext,{marginTop: 5}]}>Help</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./icon/inbox.png')} />
            <Text style={[styles.bottomnavtext,{marginTop: 5}]}>Inbox</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./icon/account.png')} />
            <Text style={[styles.bottomnavtext,{marginTop: 5}]}>Account</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#ffffff',
    flex: 1
  },

  box: {
    flex: 1,
    height: 80,
    borderRadius: 10
  },
  bottomnav: {
    height: 70,
    flexDirection: 'row'
  },
  bottomnavtext: {
    fontSize: 12,
    color: '#545454'
  },
  searchbox: {
    borderWidth: 1, 
    borderColor: '#e8e8e8',
    borderRadius: 25,
    height: 40,
    padding: 12,
    paddingStart: 40,
    marginHorizontal: 20,
    color: '#545454',
    fontSize: 13
  },
  moneytext: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'right'
  }



})