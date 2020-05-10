import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Button, Text, Image } from 'react-native';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';
import Wallpaper from '../components/Wallpaper';
import SignupSection from '../components/SignupSection';

export default class LoginScreen extends Component {
    handleSubmit = (values) => {
        Actions.homeScreen();
    };

    render() {
        return (
            <Wallpaper>
                <View style={{ position: 'absolute', top: 20, left: 0, right: 0, justifyContent: 'center' }}>
                    <Logo size={2} />
                </View>
                <LoginForm onSubmit={this.handleSubmit} />
            </Wallpaper>
        );
    }
}

module.exports = LoginScreen;
