import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'


export default class AvatarComponent extends Component {

    render() {
        prop = this.props.img
        // console.log(typeof(prop))
        if (isNaN(prop)) {
            console.log(prop)
            return (
                // <Text>{prop}</Text>
                <View>
                    <Image source={{uri:prop}} style={{width:60, height:60,borderRadius:60/2, marginLeft:15}}/>
                </View>
            )
        } else {
            //console.log('Error',prop)
            return <Text>{prop}</Text>
        }
    }
}
