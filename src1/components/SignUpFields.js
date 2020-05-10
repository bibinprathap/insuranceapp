import React, { Component, PropTypes } from 'react';

import { StyleSheet, View, TextInput, Text, Image, Dimensions } from 'react-native';

export default class SignUpFields extends Component {
    render() {
        const {
            input: { value, onChange },
        } = this.props;
        return (
            <View style={styles.inputWrapper}>
                {/* <Image source={this.props.source} style={styles.inlineImg} /> */}
                <Text style={styles.text}>{this.props.placeholder + ':'}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    autoCapitalize={this.props.autoCapitalize}
                    returnKeyType={this.props.returnKeyType}
                    placeholderTextColor="white"
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    underlineColorAndroid="transparent"
                    selectTextOnFocus={true}
                />
            </View>
        );
    }
}

SignUpFields.propTypes = {};

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    text: {
        color: '#21386b',
        // fontWeight: 'bold',
        fontSize: 12,
        backgroundColor: 'transparent',
        marginTop: 15,
        paddingLeft: 20,
        minWidth: 130,
        alignItems: 'flex-end',
        // marginLeft: 15,
    },
    input: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 2,
        width: DEVICE_WIDTH - 150,
        height: 30,
        marginRight: 20,
        paddingLeft: 45,
        // color: '#ffffff',
    },
    inputWrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 35,
        top: 9,
    },
});
