/* @flow */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Logo from '../components/Logo';
import SingUpForm from '../components/SingUpForm';
import Wallpaper from '../components/Wallpaper';
import { Actions } from 'react-native-router-flux';

export default class SignUp extends Component {
    handleSubmit = (values) => {
        var user = {};
        user.set('username', values.email);
        user.set('email', values.email);
        user.set('password', values.password);
        user.set('phone', values.phoneNumber);
        Actions.loginScreen();

        // user.signUp(
        //     { ACL: new Parse.ACL() },
        //     {
        //         success: function (user) {

        //         },
        //         error: function (user, error) {
        //             console.warn('Error: ' + error.message);
        //         },
        //     }
        // );
    };

    render() {
        return (
            <Wallpaper>
                <View style={{ position: 'absolute', top: 20, left: 0, right: 0, justifyContent: 'center' }}>
                    <Logo size={2} />
                </View>
                <SingUpForm onSubmit={this.handleSubmit} />
            </Wallpaper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});
