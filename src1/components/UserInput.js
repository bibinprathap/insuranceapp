import React, { Component, PropTypes } from 'react';

import { StyleSheet, View, TextInput, Image, Dimensions } from 'react-native';

export default class UserInput extends Component {
    render() {
        const {
            input: { value, onChange },
        } = this.props;
        return (
            <View style={styles.inputWrapper}>
                <Image source={this.props.source} style={styles.inlineImg} />
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

UserInput.propTypes = {};

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#ddd',
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 10,
        // color: '#ffffff',
    },
    inputWrapper: {
        flex: 1,
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
