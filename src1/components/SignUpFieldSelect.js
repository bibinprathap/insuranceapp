import React, { Component, PropTypes } from 'react';

import { StyleSheet, View, Picker, Text, Image, Dimensions } from 'react-native';

export default class SignUpFieldSelect extends Component {
    render() {
        const {
            input: { value, onChange },
        } = this.props;
        return (
            <View style={styles.inputWrapper}>
                {/* <Image source={this.props.source} style={styles.inlineImg} /> */}
                <Text style={styles.text}>{this.props.placeholder + ':'}</Text>
                <View style={styles.input}>
                    <Picker selectedValue={value} onValueChange={(value) => onChange(value)}>
                        <Picker.Item label="" value="java1" />
                        <Picker.Item label="Option 1" value="java" />
                        <Picker.Item label="Option 2" value="js" />
                    </Picker>
                </View>
            </View>
        );
    }
}

SignUpFieldSelect.propTypes = {};

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
    },
    input: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 2,
        width: DEVICE_WIDTH - 150,
        height: 40,
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
