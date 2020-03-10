import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Grid, Row, Col } from 'react-native-easy-grid'
import AvatarComponent from './AvatarComponent'
import Data from '../commons/data'

export default class FriendSuggestComponent extends Component {
    // data = [
    //     { id: 1, name: 'yasuo', url: require('../assets/img/avenger/yasuo.jpg'), friends: 15 },
    //     { id: 1, name: 'wonder', url: require('../assets/img/avenger/wonderwoman.jpg'), friends: 1 },
    //     { id: 1, name: 'wanda', url: require('../assets/img/avenger/wanda.jpg'), friends: 150 },
    //     { id: 1, name: 'suppergirl', url: require('../assets/img/avenger/suppergirl.jpg'), friends: 5000 },
    //     { id: 1, name: 'doctor', url: require('../assets/img/avenger/strange.jpg'), friends: 10 },
    //     { id: 1, name: 'spiderman', url: require('../assets/img/avenger/spiderman.jpeg'), friends: 101 },
    //     { id: 1, name: 'iron', url: require('../assets/img/avenger/ironman.jpeg'), friends: 321 },
    //     { id: 1, name: 'flash', url: require('../assets/img/avenger/flash.jpg'), friends: 15 },
    //     { id: 1, name: 'captain', url: require('../assets/img/avenger/captain.jpg'), friends: 2500 },
    //     { id: 1, name: 'blackwidow', url: require('../assets/img/avenger/blackwidow.jpeg'), friends: 1023 }
    // ]
    data = Data
    
    
    
    renderContent = () => {
        return (this.data.map((item, index) => {
            return (
                <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingTop:5, paddingBottom:5, borderWidth:1, borderStyle: 'solid', borderColor:'rgba(128,128,128,0.1)' }}>
                    <View style={{ flex: 1 }}>
                        <AvatarComponent img={item.url} />
                    </View>
                    <View style={{ flex: 3, justifyContent: 'flex-start' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                            <Text>{item.friends} bạn chung</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ width: 70, height: 30 }}>
                            <TouchableOpacity style={{ backgroundColor: '#9966FF', width: '100%', height: '100%', paddingTop: 5, borderRadius: 30 }}>
                                <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>Kết Bạn</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }))
    }

    render() {
        return (
            <Grid>
                <Row size={1} style={{ marginLeft: 5, marginTop: 5,maxHeight:80 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 30 }}><Icon name='group' size={18}></Icon> Gợi Ý Kết Bạn </Text>
                </Row>
                <Row size={8}>
                    <ScrollView>
                        {/* main content */}
                        <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
                            {/* detail content =====>> */}
                                {this.renderContent()}
                            {/* end detail content  */}
                        </View>
                        {/* end main content */}
                    </ScrollView>

                </Row>
            </Grid>
        )
    }
}
