import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class AvatarComponent extends Component {
    render() {
        console.log(this.props.img);
        return (
            <View>
                <Image source={this.props.img} style={{width:60, height:60,borderRadius:60/2, marginLeft:15}}/>
            </View>
        )
    }
}
