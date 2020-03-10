// danh sách tìm kiếm gần đây
// nằm phía trên của màn hình

import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import AvatarComponent from './AvatarComponent'
import Data from '../commons/data'

export default class SearchResultComponent extends Component {
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
