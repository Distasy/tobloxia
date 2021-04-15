import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, Text } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { vw, vh, vmin, vmax } from 'react-native-viewport-units-fix';


export default function HorizontalCardv2(props) {

    // ~~~~ Importation des props ~~~~  //
    const vertical = props.vertical;
    const title = props.title;
    const desc = props.desc;
    const img = props.img;
    const url = props.url;
    const gradiant = props.gradiant;
    const lowerPrice = props.lowerPrice;

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;






    // ~~~~ Card Horizontal  ~~~~  //
    if (vertical === false) {

        const width  = vw * 90;
        const height = vw *  65;
        return (
            <TouchableOpacity onPress={() => alert('test')} style={[styles.image, { width: width, height: height, backgroundColor: '#000' }]}>
                <View style={styles.shadow}>

                    <Image
                        source={{ uri: img }}

                        style={
                            [styles.image,
                            {
                                width: width,
                                height: height,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                            }
                            ]}
                    />

                    <LinearGradient
                        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.0)', 'rgba(0,0,0,0.0)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.6)']}
                        style={[styles.FadeAway, {
                            width: width, height: height,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                        }]}>

                    </LinearGradient>
                </View>
            </TouchableOpacity>
        )
    } else {
        const width = 135 * props.size; //135 * props.size; windowWidth
        const height = 170 * props.size; //170 * props.size; windowHeight
        // ~~~~ Card Vertical ~~~~  //
        if (gradiant === true) {
            return (
                <TouchableOpacity onPress={() => alert('test')} style={[styles.image, { width: width, height: height, backgroundColor: '#000' }]}>
                    <View>
                        <View style={styles.shadow}>
                            <Image
                                source={{ uri: img }}

                                style={
                                    [styles.image,
                                    {
                                        width: width,
                                        height: height,
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                    }
                                    ]}
                            />
                            <LinearGradient
                                start={[1.0, 0.4]}
                                end={[1.0, 2.0]}
                                colors={['rgba(51, 51, 51, 0.20)', '#333333', '#333333']}
                                style={styles.FadeAway_discover}>
                                <View>
                                    <Text style={[styles.FadeAway_h2_v, { fontSize: 17 }]}>
                                        {title}
                                    </Text>
                                    <Text style={styles.FadeAway_p_v}>Minimum {lowerPrice} ZB.</Text>
                                </View>

                            </LinearGradient>
                        </View>
                    </View>
                </TouchableOpacity>


            )

        } else {


            return (

                <TouchableOpacity onPress={() => alert('test')} style={[styles.image, { width: width, height: height, backgroundColor: '#000' }]}>
                    <View>
                        <View style={styles.shadow}>
                            <Image
                                source={{ uri: img }}

                                style={
                                    [styles.image,
                                    {
                                        width: width,
                                        height: height,
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                    }
                                    ]}
                            />
                            <View style={styles.FadeAway}>
                                <Text style={styles.FadeAway_h2_v}>
                                    {title}
                                </Text>
                                <Text style={styles.FadeAway_p_v}>{desc}</Text>
                            </View>

                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
    }
}

// ~~~~ Style ~~~~  //
const styles = StyleSheet.create({

    image: {
        borderRadius: 20,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    shadow: {
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
    },
    FadeAway: {
        borderRadius: 20,
    },
    FadeAway_h2_h: { //horizontal
        marginLeft: '5%',
        marginTop: '16%',
        textAlign: 'left',
        color: '#474747',
        fontWeight: 'bold',
        fontSize: 30
    },
    FadeAway_h2_v: { //vertical
        marginLeft: '5%',
        marginTop: '80%',
        textAlign: 'left',
        color: '#f3f3f3',
        fontWeight: 'bold',

    },
    FadeAway_p_h: { //horizontal
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 0,
        textAlign: 'left',
        color: '#474747',
        fontSize: 15
    },
    FadeAway_p_v: { //vertical
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 0,
        textAlign: 'left',
        color: '#f3f3f3',
        fontSize: 15
    },
    FadeAway_discover: {
        position: 'absolute',
        width: '100%',
        height: 170 * 1.1,
        borderRadius: 20,
    },

});


// ~~~~ Props ~~~~  //
HorizontalCardv2.propTypes = {

    // Type
    vertical: PropTypes.bool.isRequired,

    // Infos
    title: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string,
    url: PropTypes.string,
    gradiant: PropTypes.bool,
    lowerPrice: PropTypes.number,

    // Dimensions
    size: PropTypes.number.isRequired,

};