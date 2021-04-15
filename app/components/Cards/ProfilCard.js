import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, Text } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { Col, Row, Grid } from "react-native-easy-grid";
import { ProgressBar } from 'react-native-paper';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import Icon from 'react-native-vector-icons/AntDesign';
import { vw, vh, vmin, vmax } from 'react-native-viewport-units-fix';

export default function ProfilCard(props) {

    // ~~~~ Importation des props ~~~~  //
    const vertical = props.vertical;
    const title = props.title;
    const desc = props.desc;
    const img = props.img;
    const url = props.url;
    const gradiant = props.gradiant;
    const lowerPrice = props.lowerPrice;

    let robloxId = props.robloxId;

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    const robloxAvatar = "https://www.roblox.com/headshot-thumbnail/image?userId=" + robloxId + "&width=420&height=420&format=png";
    const width  = vw * 90;
    const height = vw *  69;
    return (
            <View style={{ alignItems:"center", width:width, height:height, marginBottom:20, marginTop: 50}}>
                <View style={{backgroundColor:"#ff7675", borderRadius: 20, height:"100%", width:"100%"}}>
                    <View style={styles.header}>
                        <Grid>
                            <Col style={{width:"30%"}}>
                                <View style={{height:"100%", width:"100%", justifyContent:"center",  alignItems:"center" }}>
                                    <Image
                                        source={{ uri: robloxAvatar }}
                                        style={
                                            [styles.image,
                                            {
                                                width: vw*20,
                                                height: vw*20,
                                                borderRadius:90,
                                                borderColor:"grey",
                                                borderWidth:3
                                            }
                                            ]}
                                    />
                                    <LinearGradient
                                        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.0)', 'rgba(0,0,0,0.0)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)']}
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

                            </Col >

                            <Col style={{width:"45%", justifyContent:"center", left:"5%"}}>
                                    <Text style={styles.pseudo}>Tchoow <Icon name="checkcircle" size={18} color="#55efc4" /></Text>
                                    <Text style={styles.grade}>Membre silver</Text>
                            
                            </Col>

                            <Col style={{ width:"25%", justifyContent:"center", right:vw*3}}>
                                    <Text style={styles.sold}>750 Tbx</Text>
                            </Col>
                        
                        
                        </Grid>
                        <View styles={{height:"20%", width:"100%"}}>
                            <ProgressBar progress={0.5} color={"#55efc4"} style={{height: 10}} />
                        </View>
                        


                    </View>
                    
                    <View style={styles.body}>
                        <Grid style={{height:"20%"}}>
                            <Col style={{alignItems:"center", justifyContent:"center"}}>
                                <Text style={[styles.actions, {fontSize:vw*5}]}>
                                    Actions
                                </Text>
                               <Text style={[styles.number, {fontSize:vw*8}]}>
                                    412
                                </Text>
                            </Col>

                            <Col style={{alignItems:"center",  justifyContent:"center"}}>
                                <Text style={[styles.actions, {fontSize:vw*5}]}>
                                    Tbx collectés
                                </Text>
                               <Text style={[styles.number, {fontSize:vw*8}]}>
                                    720
                                </Text>
                            </Col>
                        </Grid>



                        <AwesomeButtonRick style={{marginBottom: "3%"}} width={'100%'} textSize={20} textColor={"white"} backgroundColor={"#55efc4"} backgroundDarker={"#00b894"}>Demander un paiement</AwesomeButtonRick>

                    </View>
                
                </View>
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
    sold : {
        fontWeight: "bold",
        fontSize:22,
        color:"#ff7675"
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
    image: {
        borderRadius: 20,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
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
ProfilCard.propTypes = {

    // Type
    robloxId: PropTypes.number,


};