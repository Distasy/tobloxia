import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, Text } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { Col, Row, Grid } from "react-native-easy-grid";
import { ProgressBar } from 'react-native-paper';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import Icon from 'react-native-vector-icons/AntDesign';
import { vw, vh, vmin, vmax } from 'react-native-viewport-units-fix';
import * as Animatable from 'react-native-animatable';
import TextTicker from 'react-native-text-ticker';
import fetch from 'node-fetch';

export default function TobloCard(props)
{

    let objId = props.objId;

    const objImage = "https://cdn.discordapp.com/attachments/671292077870415872/833786601955786812/toblo3.png";
    const width  = "100%";
    const height = vw *  40;
    return (

            <View style={{ alignItems:"center", width:width, height:height, backgroundColor:"#333333", borderRadius:20, marginBottom:20 }}>
                            <Image
                                source={{ uri: objImage }}
                                style={
    
                                    {
                                        width:"100%",
                                        height:"100%",
                                    }
                                    }
                            />
            </View>

        );

}

// ~~~~ Style ~~~~  //
const styles = StyleSheet.create({
    main: {
        height: "100%",
        width:"100%",
    },
    header: {
        backgroundColor:"#333333",
        width:"100%",
        height:"40%",
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    pseudo: {
        fontWeight: "bold",
        fontSize:20,
        color:"white",
    },
    grade: {
        fontSize:18,
        color:"grey"
    },
    title : {
        color:"white"
    },

    info : {
        fontWeight: "bold",
        color:"white"
    },

    body: {
        height:"60%",
        width:"100%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: "5%",
        paddingRight: "5%"
    },

    actions: {
        
        color:"white"
        
    },
    number : {
        fontWeight: "bold",
        color:"white"
    },

    shadow: {
        borderRadius: 20,
        backgroundColor:"red",
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
TobloCard.propTypes = {

    // Type
    objId: PropTypes.number,


};