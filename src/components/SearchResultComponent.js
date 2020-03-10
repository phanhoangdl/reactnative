// danh sách tìm kiếm gần đây
// nằm phía trên của màn hình

import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import AvatarComponent from './AvatarComponent'
import Data from '../commons/data'

export default class SearchResultComponent extends Component {
    // data = [
    //     { id: 3, name: 'wanda', url: require('../assets/img/avenger/wanda.jpg'), friends: 150 },
    //     { id: 2, name: 'wonder', url: require('../assets/img/avenger/wonderwoman.jpg'), friends: 1 },
    //     { id: 4, name: 'suppergirl', url: require('../assets/img/avenger/suppergirl.jpg'), friends: 5000 },
    //     { id: 1, name: 'yasuo', url: require('../assets/img/avenger/yasuo.jpg'), friends: 15 },
    //     { id: 5, name: 'doctor', url: require('../assets/img/avenger/strange.jpg'), friends: 10 },
    //     { id: 7, name: 'iron', url: require('../assets/img/avenger/ironman.jpeg'), friends: 321 },
    //     { id: 6, name: 'spiderman', url: require('../assets/img/avenger/spiderman.jpeg'), friends: 101 },
    //     { id: 9, name: 'captain', url: require('../assets/img/avenger/captain.jpg'), friends: 2500 },
    //     { id: 8, name: 'flash', url: require('../assets/img/avenger/flash.jpg'), friends: 15 },
    //     { id: 10, name: 'blackwidow', url: require('../assets/img/avenger/blackwidow.jpeg'), friends: 1023 }
    // ]
    
    data = Data

    renderAvatar = () => {
        return (this.data.map((avatar, index) => {
            return (
                <View key={index} style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <AvatarComponent img={avatar.url} />
                    <Text style={{ marginLeft: 20 }}>{avatar.name}</Text>
                </View>
            )
        }))
    }

    render() {
        return (
            <View style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'rgba(128,128,128,0.1)', borderLeftColor: '#000000', width:'100%' }}>
                <View style={{ marginLeft: 5, marginTop: 5  }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 30 }}><Icon name='back-in-time' size={18}></Icon> Danh sách tìm kiếm gần đây </Text>
                    <ScrollView
                        horizontal={true}
                    >
                        {this.renderAvatar()}
                    </ScrollView>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                    </View>

                </View>
            </View>
        )
    }
}
