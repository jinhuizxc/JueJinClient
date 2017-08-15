'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, PixelRatio, Platform, TouchableOpacity, Image, TextInput, BackHandler} from 'react-native';
import ImageButton from '../component/ImageButtonWithText';
import Button from '../component/Button';
import px2dp from '../util/px2dp';

export default class RegisterScreen extends Component {


    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.view}>
                <View style={styles.actionBar}>
                    <ImageButton
                        icon="md-arrow-back"
                        color="white"
                        imgSize={px2dp(25)}
                        btnStyle={{width: px2dp(55), height: px2dp(60)}}
                    />
                </View>
                <View style={styles.editGroup}>
                    <View style={styles.editView1}>
                        <TextInput
                            style={styles.edit}
                            underlineColorAndroid="transparent"
                            placeholder="邮箱/手机号"
                            placeholderTextColor="#c4c4c4"/>
                    </View>
                    <View style={{height: 1/PixelRatio.get(), backgroundColor:'#c4c4c4'}}/>
                    <View style={styles.editView2}>
                        <TextInput
                            style={styles.edit}
                            underlineColorAndroid="transparent"
                            placeholder="用户名"
                            placeholderTextColor="#c4c4c4"/>
                    </View>
                    <View style={{height: 1/PixelRatio.get(), backgroundColor:'#c4c4c4'}}/>
                    <View style={styles.editView3}>
                        <TextInput
                            style={styles.edit}
                            underlineColorAndroid="transparent"
                            placeholder="密码"
                            placeholderTextColor="#c4c4c4"/>
                    </View>
                    <View style={{marginTop: px2dp(15), height: px2dp(40)}}>
                        <Button text="注册" onPress={() => navigate('Login')}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'rgb(22,131,251)'
    },
    actionBar:{
        marginTop: (Platform.OS === 'ios') ? px2dp(10) : 0,
    },
    editGroup:{
        padding: px2dp(20)
    },
    edit:{
        height: px2dp(40),
        fontSize: px2dp(13),
        backgroundColor: 'white',
        paddingLeft: px2dp(15),
        paddingRight: px2dp(15)
    },
    editView1:{
        height: px2dp(48),
        backgroundColor:'white',
        justifyContent: 'center',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
    },
    editView2:{
        height: px2dp(48),
        backgroundColor:'white',
        justifyContent: 'center'
    },
    editView3:{
        height: px2dp(48),
        backgroundColor:'white',
        justifyContent: 'center',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3
    },
});