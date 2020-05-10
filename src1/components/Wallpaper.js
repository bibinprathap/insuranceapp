import React, { Component, PropTypes } from 'react';
import { StyleSheet, Dimensions, ImageBackground } from 'react-native';

import bgSrc from '../assets/images/wallpaper.png';

export default class Wallpaper extends Component {
    render() {
        return (
            <ImageBackground style={styles.picture} source={bgSrc}>
                {this.props.children}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    picture: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 305,
        resizeMode: 'cover',
    },
});
