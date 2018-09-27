/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Image } from 'react-native';
import { createStackNavigator, NavigationActions, createBottomTabNavigator } from 'react-navigation';
import Login from './js/views/Login';
import Detail from './js/views/Detail';
import Home from './js/views/Home';
import Favorites from './js/views/Favorites';
import Menu from './js/views/Menu'
import Search from './js/views/Search';
import Settings from './js/views/Settings';
import {Provider} from 'react-redux';
import {storeConfig} from './configurations/storeConfig';

export default class App extends Component {
    render() {

        const HomePageRouter = createBottomTabNavigator({
            Home: {
                screen: Home,
                navigationOptions: {
                    showLabel: false,
                    tabBarIcon: <Image style={{height:20,width:20}} source={require('./js/images/home.png')}/>,
                    showIcon: true
             }
            },
            Favorites: {
                screen: Favorites,
                navigationOptions: {
                    showLabel: false,
                    tabBarIcon: <Image style={{height:20,width:20}} source={require('./js/images/favorite.png')}/>,
                    showIcon: true
             }
            },
             Weekly_Menu: {
                screen: Menu,
                navigationOptions: {
                    showLabel: false,
                    tabBarIcon: <Image style={{height:20,width:20}} source={require('./js/images/spoon.png')}/>,
                    showIcon: true
             }
            },
            Search: {
                screen: Search,
                navigationOptions: {
                    showLabel: false,
                    tabBarIcon: <Image style={{height:20,width:20}} source={require('./js/images/search.png')}/>,
                    showIcon: true
             }
            },
            Settings: {
                screen: Settings,
                navigationOptions: {
                    showLabel: false,
                    tabBarIcon: <Image style={{height:20,width:20}} source={require('./js/images/settings.png')}/>,
                    showIcon: true
             }
            },
        });

        const RootNavigator = createStackNavigator({
            Login: {
                screen: Login
            },
           HomePage: {
                screen: HomePageRouter
            }
        }, navigationOptions = {
            headerMode: 'none'
        });
        
        return (
          
            <Provider store={storeConfig}>
                  <RootNavigator/>
            </Provider>  

        );
    }
}

