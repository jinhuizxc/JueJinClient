/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry,Text, View, StyleSheet, PixelRatio, Platform, TouchableOpacity, Image, TextInput, BackAndroid} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Button from './js/component/Button';
import TextButton from './js/component/TextButton';
import ImageButton from './js/component/ImageButtonWithText';
import TextDivider from './js/component/TextDivider';
import px2dp from './js/util/px2dp';

class HomeScreen extends React.Component {
    // static navigationOptions = {
    //     title: 'Welcome',
    // };
    render() {
        return (
            <View style={styles.view}>
                <View style={styles.actionBar}>
                    <ImageButton
                        icon="md-arrow-back"
                        color="white"
                        imgSize={px2dp(25)}
                        btnStyle={{width: px2dp(55), height: px2dp(60)}}
                    />
                </View>
                <View style={styles.logo}>
                    <Image style={{width:px2dp(45), height:px2dp(45)}} source={require('./js/image/ic_login_logo.png')}/>
                </View>
                <View style={styles.editGroup}>
                    <View style={styles.editView1}>
                        <TextInput
                            style={styles.edit}
                            underlineColorAndroid="transparent"
                            placeholder="手机号/邮箱"
                            placeholderTextColor="#c4c4c4"/>
                    </View>
                    <View style={{height: 1/PixelRatio.get(), backgroundColor:'#c4c4c4'}}/>
                    <View style={styles.editView2}>
                        <TextInput
                            style={styles.edit}
                            underlineColorAndroid="transparent"
                            placeholder="密码"
                            placeholderTextColor="#c4c4c4"/>
                    </View>
                    <View style={{marginTop: px2dp(10), height: px2dp(40)}}>
                        <Button text="登录"/>
                    </View>
                    <View style={styles.textButtonLine}>
                        <TextButton text="忘记密码?" color="rgba(255,255,255,0.5)"/>
                        <TextButton text="注册账号" />
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, justifyContent: 'flex-end', marginLeft: px2dp(20), marginRight: px2dp(20)}}>
                        <TextDivider text="其他账号登录"/>
                    </View>
                    <View style={styles.thirdPartyView}>
                        <ImageButton text="微博" image={require('./js/image/weibo_login.png')} color="rgba(255,255,255,0.7)"/>
                        <ImageButton text="微信" image={require('./js/image/wechat_login.png')} color="rgba(255,255,255,0.7)"/>
                        <ImageButton text="Github" image={require('./js/image/github_login.png')} color="rgba(255,255,255,0.7)"/>
                    </View>
                </View>
            </View>
        );
    }
}


// 官方侧滑！
// const SimpleApp = StackNavigator({
//     Home: { screen: HomeScreen },
// });

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'rgb(22,131,251)'
    },
    actionBar:{
        marginTop: (Platform.OS === 'ios') ? px2dp(10) : 0,
    },
    logo:{
        alignItems: 'center',
        marginTop: px2dp(40)
    },
    edit:{
        height: px2dp(40),
        fontSize: px2dp(13),
        backgroundColor: '#fff',
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
        justifyContent: 'center',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3
    },
    editGroup:{
        margin: px2dp(20)
    },
    textButtonLine:{
        marginTop: px2dp(12),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    thirdPartyView:{
        flex: 1,
        marginTop: px2dp(10),
        flexDirection:'row',
        alignItems: 'flex-start',
        justifyContent:'space-around'
    }

});

AppRegistry.registerComponent('JueJinClient', () => HomeScreen);