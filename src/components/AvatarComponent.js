import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'


export default class AvatarComponent extends Component {

    render() {
        prop = this.props.img
        return (
            <View>
                <Image source={{uri:prop}} style={{width:60, height:60,borderRadius:60/2, marginLeft:15}}/>
            </View>
        )
    }
}
