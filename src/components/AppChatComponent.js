import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Grid, Row, Col} from 'react-native-easy-grid'
import SearchResultComponent from './SearchResultComponent'
import FriendSuggestComponent from './FriendSuggestComponent'

export default class AppChatComponent extends Component {
    render() {
        return (
            <Grid>
                {/* searching result */}
                <Row size={1}>
                    <SearchResultComponent />
                </Row>

                {/* suggestion friend */}
                <Row size={3}>
                    <FriendSuggestComponent />
                </Row>
            </Grid>
        )
    }
}
