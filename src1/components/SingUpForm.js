import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { CheckBox, StyleSheet, View, Button, Text, Dimensions, TouchableOpacity, Image } from 'react-native';

import SignUpFields from './SignUpFields';
import SignUpFieldSelect from './SignUpFieldSelect';
import ButtonSubmit from './ButtonSubmit';

import Loginoptimize from '../assets/images/Login-optimize.png';
import usernameImg from '../assets/images/username.png';
import passwordImg from '../assets/images/password.png';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = { isSelected: true };
    }
    render() {
        return (
            <View style={this.outercontainer()}>
                <View style={this.container()}>
                    <View style={{ flex: 0.25, marginStart: 20, alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={this.text()}>Sign Up</Text>
                        </View>
                        <View style={{ flex: 1, marginEnd: 30, justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'flex-end' }}>
                            {/* <Image source={leftArrow} style={{ backgroundColor: '#ddd' }} /> */}
                            <Text style={this.arrow()}>{'<'}</Text>
                        </View>
                        {/* {  width: 110  ,height: 30  } */}
                    </View>

                    <View style={{ flex: 1.2, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this.forgotPswdPage}>
                            <Image source={Loginoptimize} style={{ height: 100, width: 100 }} />
                        </TouchableOpacity>

                        {/* {  width: 110  ,height: 30  } */}
                    </View>
                    {/* <Field name="submit" component={ButtonSubmit} type="Login" action={this.props.handleSubmit} /> */}

                    <View style={this.inputfields()}>
                        <Field
                            name="email"
                            component={SignUpFields}
                            source={usernameImg}
                            placeholder="First Name"
                            autoCapitalize={'none'}
                            returnKeyType={'done'}
                            autoCorrect={false}
                        />
                        <Field
                            name="email"
                            component={SignUpFields}
                            source={usernameImg}
                            placeholder="Last Name"
                            autoCapitalize={'none'}
                            returnKeyType={'done'}
                            autoCorrect={false}
                        />
                        <Field
                            name="phoneNumber"
                            component={SignUpFieldSelect}
                            source={usernameImg}
                            placeholder="Designation"
                            autoCapitalize={'none'}
                            returnKeyType={'done'}
                            autoCorrect={false}
                        />
                        <Field
                            name="password"
                            component={SignUpFields}
                            source={passwordImg}
                            secureTextEntry={true}
                            placeholder="Mobile"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                        />
                        <Field
                            name="password"
                            component={SignUpFields}
                            source={passwordImg}
                            secureTextEntry={true}
                            placeholder="Email"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                        />
                        <Field
                            name="password"
                            component={SignUpFields}
                            source={passwordImg}
                            secureTextEntry={true}
                            placeholder="Password"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                        />
                        <Field
                            name="password"
                            component={SignUpFields}
                            source={passwordImg}
                            secureTextEntry={true}
                            placeholder="Confirm Password"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                        />
                        <Field
                            name="confirmPassword"
                            component={SignUpFieldSelect}
                            source={passwordImg}
                            secureTextEntry={true}
                            placeholder="Division"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                        />
                        <Field
                            name="confirmPassword"
                            component={SignUpFieldSelect}
                            source={passwordImg}
                            secureTextEntry={true}
                            placeholder="Department"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                        />
                    </View>

                    <View
                        style={{
                            flex: 0.25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            marginBottom: 20,
                            marginTop: 10,
                        }}
                    >
                        <View style={{ borderRadius: 10, backgroundColor: this.state.isSelected ? '#d03988' : 'white' }}>
                            <CheckBox
                                value={this.state.isSelected}
                                onValueChange={() => {
                                    this.setState({ isSelected: !this.state.isSelected });
                                }}
                                style={{
                                    alignSelf: 'center',
                                }}
                            />
                        </View>
                        <Text
                            style={{
                                margin: 8,
                            }}
                        >
                            I agree to the terms & Condition
                        </Text>
                    </View>
                    <View style={this.submitbutton()}>
                        <Field name="submit" component={ButtonSubmit} type="Create Account" action={this.props.handleSubmit} />
                    </View>
                </View>
            </View>
        );
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
            height: Dimensions.get('window').height - 110,
        };
    }
    container() {
        return { flex: 1, alignItems: 'center' };
    }
    inputfields() {
        return { flex: 3, alignItems: 'center' };
    }
    submitbutton() {
        return { flex: 1, alignItems: 'center' };
    }
    text() {
        return {
            color: '#21386b',
            fontWeight: 'bold',
            fontSize: 20,
            backgroundColor: 'transparent',
            marginTop: 7,
        };
    }
    arrow() {
        return {
            color: '#ddd',
            fontSize: 20,
            backgroundColor: 'transparent',
            marginTop: 7,
        };
    }
}

export default reduxForm({
    form: 'signUpForm', // a unique identifier for this form
})(SignUpForm);
