import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { View, Button, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';
import leftArrow from '../assets/images/left-arrow.png';
import Panelicons37 from '../assets/images/Panel-icons-37.png';
import Panelicons38 from '../assets/images/Panel-icons-38.png';
import Panelicons39 from '../assets/images/Panel-icons-39.png';

import usernameImg from '../assets/images/username.png';
import passwordImg from '../assets/images/password.png';

class LoginForm extends Component {
    forgotPswdPage() {
        Actions.singUp();
    }
    render() {
        return (
            <View style={this.outercontainer()}>
                <View style={this.container()}>
                    <View
                        style={{
                            flex: 1,
                            marginStart: 20,
                            alignItems: 'flex-start',
                            marginBottom: 10,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <View style={{ flex: 1 }}>
                            <Text style={this.text()}>Login</Text>
                        </View>
                        <View style={{ flex: 1, marginEnd: 30, justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'flex-end' }}>
                            {/* <Image source={leftArrow} style={{ backgroundColor: '#ddd' }} /> */}
                            <Text style={this.arrow()}>{'<'}</Text>
                        </View>
                        {/* {  width: 110  ,height: 30  } */}
                    </View>
                    <Field
                        name="username"
                        component={UserInput}
                        source={usernameImg}
                        placeholder="Email"
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                    />
                    <Field
                        name="password"
                        component={UserInput}
                        source={passwordImg}
                        secureTextEntry={true}
                        placeholder="Password"
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                    />
                </View>
                <View style={{ flex: 2, alignItems: 'center', marginTop: 10 }}>
                    <View style={{ flex: 0.5, marginStart: 20, alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <View style={{ flex: 1, justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={this.forgotPswdPage}>
                                <Image source={Panelicons37} style={{ height: 50, width: 50 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, marginEnd: 30, justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={this.forgotPswdPage}>
                                <Image source={Panelicons38} style={{ height: 50, width: 50 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, marginEnd: 30, justifyContent: 'flex-end', alignContent: 'flex-start', alignItems: 'flex-start' }}>
                            <TouchableOpacity onPress={this.forgotPswdPage}>
                                <Image source={Panelicons39} style={{ height: 50, width: 50 }} />
                            </TouchableOpacity>
                        </View>
                        {/* {  width: 110  ,height: 30  } */}
                    </View>
                    {/* <Field name="submit" component={ButtonSubmit} type="Login" action={this.props.handleSubmit} /> */}
                </View>
                <View style={this.forgetcontainer()}>
                    <Text
                        style={{
                            color: '#ddd',
                            fontSize: 20,
                        }}
                        onPress={this.forgotPswdPage}
                    >
                        Forgot Password?
                    </Text>
                </View>
            </View>
        );
    }

    text() {
        return {
            color: '#21386b',
            fontWeight: 'bold',
            fontSize: 20,
            backgroundColor: 'transparent',
            marginTop: 20,
        };
    }
    arrow() {
        return {
            color: '#ddd',
            fontSize: 20,
            backgroundColor: 'transparent',
            marginTop: 20,
        };
    }

    outercontainer() {
        return {
            flex: 0.5,
            alignItems: 'center',
            backgroundColor: '#fff',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            position: 'absolute',
            bottom: 0,
            height: Dimensions.get('window').height - 360,
        };
    }
    container() {
        return { flex: 5, alignItems: 'center', justifyContent: 'space-around' };
    }
    forgetcontainer() {
        const DEVICE_WIDTH = Dimensions.get('window').width;
        return {
            flex: 1.8,
            width: DEVICE_WIDTH,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            top: 20,
        };
    }
}

export default reduxForm({
    form: 'loginForm', // a unique identifier for this form
})(LoginForm);
