// danh sách tìm kiếm gần đây
// nằm phía trên của màn hình

import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import AvatarComponent from './AvatarComponent'

export default class SearchResultComponent extends Component {
    render() {
        return (
            <View style={{ marginLeft: 5, marginTop: 5 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 30 }}><Icon name='back-in-time' size={18}></Icon> Danh sách tìm kiếm gần đây </Text>
                <ScrollView
                    horizontal={true}
                >
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <AvatarComponent img={require('../assets/img/avenger/captain.jpg')} />
                        <Text style={{ marginLeft: 20 }}>captain</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <AvatarComponent img={require('../assets/img/avenger/flash.jpg')} />
                        <Text style={{ marginLeft: 20 }}>flash</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <AvatarComponent img={require('../assets/img/avenger/ironman.jpeg')} />
                        <Text style={{ marginLeft: 20 }}>ironman</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <AvatarComponent img={require('../assets/img/avenger/spiderman.jpeg')} />
                        <Text style={{ marginLeft: 20 }}>spiderman</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <AvatarComponent img={require('../assets/img/avenger/strange.jpg')} />
                        <Text style={{ marginLeft: 20 }}>spiderman</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <AvatarComponent img={require('../assets/img/avenger/wanda.jpg')} />
                        <Text style={{ marginLeft: 20 }}>wanda</Text>
                    </View>
                </ScrollView>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                </View>

            </View>
        )
    }
}
