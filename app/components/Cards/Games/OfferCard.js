import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Modal, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/AntDesign';
import { vw, vh, vmin, vmax } from 'react-native-viewport-units-fix';
import * as Animatable from 'react-native-animatable';
import TextTicker from 'react-native-text-ticker';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import AnimatedScrollView from '../../AnimatedScrollView';

export default function OfferCard(props) {


    let robloxId = props.robloxId;
    let urgent = props.urgent;
    const urlBackground = props.urlBackground;
    let salaire = props.salaire;
    const reputation = props.reputation;
    const autheur = props.autheur;
    const description = props.description;

    let isReputation;

    if ( reputation >= 5 )
       isReputation = true
    else 
       isReputation = false

    const builder = props.builder;
    const scripter = props.scripter;
    const animater = props.animater;


    const [modalVisible, setModalVisible] = useState(false);

    const robloxAvatar = "https://www.roblox.com/headshot-thumbnail/image?userId=" + robloxId + "&width=420&height=420&format=png";
    const width = vw * 85;
    const height = vw * 80;


    let searchJob = "";
    if (scripter) searchJob+= "#Scripter"
    if (builder) searchJob+= " #Builder"
    if (animater) searchJob+= " #Animater"




    if (urgent)
    {

        return (
            <View style={{ alignItems: "center", width: width, height: height, backgroundColor: "#333333", borderRadius: 20, marginBottom: 20 }}>
                

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                    
                    <View style={[styles.modalView, {width:vw*90, alignItems:"center", backgroundColor:"white"}]}>
                    
                        <Text style={styles.modalText}>par @{autheur}</Text>
                        <Image
                                            source={{ uri: urlBackground }}
                                            style={
                                                {
                                                    width: "95%",
                                                    height: "30%",
                                                    borderRadius:20,
                                                    marginBottom:"5%"
                                                }
                                                }
                                        />
                        <View style={{backgroundColor:"#dfe6e9", borderRadius:5, padding:5, width:"90%", marginBottom:"5%"}}>
                        <Text>{description}

                        </Text>

                        </View>
                        <View style={{backgroundColor:"#dfe6e9", borderRadius:5, padding:5, height:"10%", width:"90%", marginBottom:"5%"}}>
                            <Grid>
                                <Row>
                                    <Grid>
                                    <Col>
                                    <View style={{height:"100%", width:"100%", alignItems:"center", justifyContent:"center"}}>
                                    <Text style={styles.board}>Salaire: {salaire} Tbx</Text>
                                    </View>
                                     
                                    </Col>
                                    <Col>
                                    <View style={{height:"100%", width:"100%", alignItems:"center", justifyContent:"center"}}>
                                    <Text style={[styles.board, {color:"#f1c40f"}]}>Prime: 50 Tbx </Text>
                                    </View>
                                    </Col>
                                    </Grid>
                                </Row>
                                <Row>
                                <View style={{height:"100%", width:"100%", alignItems:"center", justifyContent:"center"}}>
                                    <Text style={[styles.board, isReputation ? styles.reputationValid : styles.reputationInvalid]}>Réputation: {reputation}/10</Text>
                                    </View>
                                </Row>

                            </Grid>
                            
                            
                            



                        </View>

                        <Pressable
                            style={[styles.button, {marginBottom:"3%", backgroundColor:"#f1c40f"}]}
                            onPress={() => alert('test')}
                            >
                            <Text style={styles.textStyle}>Postuler</Text>
                            </Pressable>
                            <Pressable
                            style={[styles.button, {backgroundColor:"#333333"}] }
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>Retour</Text>
                        </Pressable>

                        


                    </View>
                    </View>

            </Modal>
                
                
                
                <Grid  >
                    <Row style={{ borderColor:"#f1c40f",  borderBottomWidth:vw*2}}>
                        <Grid>
                            <Col>
                                <View style={{justifyContent:"center", height:"100%", width:"100%"}}>
                                <Image
                                            source={{ uri: robloxAvatar }}
                                            style={
                                                [styles.image,
                                                {
                                                    width: vw*15,
                                                    height: vw*15,
                                                    borderRadius:90,
                                                    borderColor:"grey",
                                                    borderWidth:3
                                                }
                                                ]}
                                        />
    
                                </View>
    
                            </Col>
    
                            <Col size={4}>
                                <View style={{height:"100%", width:"100%", justifyContent:"center"}}>
                                <Text style={{fontSize:vw*6, fontWeight:"bold", textAlign:"right", color:"#55efc4", opacity:0.8, paddingRight:"5%"}}>{searchJob}</Text>
                                </View>
                            </Col>
    
                        </Grid>
    
    
                    </Row>
                    <Row size={3}>
                    <View style={{height:"100%", width:"100%", backgroundColor:"#333333", borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
    
                                <Image
                                            source={{ uri: urlBackground }}
                                            style={
                                                {
                                                    width: "100%",
                                                    height: "100%",
                                                    opacity:0.25,
                                                    borderBottomLeftRadius:20,
                                                    borderBottomRightRadius:20
                                                }
                                                }
                                        />
                    
                    </View>
                    <View style={{height:"100%", width:"100%", position:"absolute"}}>
                        <Grid>
                            <Row>
                                <View style={{height:"100%", width:"100%", alignItems:"center"}}>
                                    <View style={{width:"40%", height:"30%",  backgroundColor:"#f1c40f", borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                                            <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center', fontSize:vw*6, fontWeight:"bold", color:"black", }}>Urgent</Animatable.Text>

                                    </View>
    
                                </View>
                            </Row>
    
                            <Row>
                                <View style={{height:"100%", width:"100%", alignItems:"center"}}>
                                <Text style={{fontSize:vw*7, fontWeight:"bold", color:"#f1c40f"}}>Salaire: {salaire} Tbx</Text>
                                    <View style={{width:"80%"}}>
    
                                    <AwesomeButtonRick  width='100%' textSize={20} textColor="white" backgroundColor="#95a5a6" backgroundDarker="#7f8c8d"  onPress={() => setModalVisible(true)}>
    Voir l'annonce</AwesomeButtonRick>
                                    </View>
    
                                    
                                </View>
    
                            </Row>
    
                        </Grid>
    
                    </View>
                    </Row>
    
                </Grid>
            </View>
    
        );
  
    }
    else
    {

        return (
            <View style={{ alignItems: "center", width: width, height: height, backgroundColor: "#333333", borderRadius: 20, marginBottom: 20 }}>

            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                    
                    <View style={[styles.modalView, {width:vw*90, alignItems:"center"}]}>
                    
                        <Text style={styles.modalText}>par @{autheur}</Text>
                        <Image
                                            source={{ uri: urlBackground }}
                                            style={
                                                {
                                                    width: "95%",
                                                    height: "30%",
                                                    borderRadius:20,
                                                    marginBottom:"5%"
                                                }
                                                }
                                        />
                        <View style={{backgroundColor:"#dfe6e9", borderRadius:5, padding:5, width:"90%", marginBottom:"5%"}}>
                        <Text>{description}

                        </Text>

                        </View>
                        <View style={{backgroundColor:"#dfe6e9", borderRadius:5, padding:5, height:"10%", width:"90%", marginBottom:"5%"}}>
                            <Grid>
                                <Row>
                                    <Grid>
                                    <Col>
                                    <View style={{height:"100%", width:"100%", alignItems:"center", justifyContent:"center"}}>
                                    <Text style={styles.board}>Salaire: {salaire} Tbx</Text>
                                    </View>
                                     
                                    </Col>
                                    <Col>
                                    <View style={{height:"100%", width:"100%", alignItems:"center", justifyContent:"center"}}>
                                    <Text style={[styles.board, {color:"#f1c40f"}]}>Prime: 0 Tbx </Text>
                                    </View>
                                    </Col>
                                    </Grid>
                                </Row>
                                <Row>
                                <View style={{height:"100%", width:"100%", alignItems:"center", justifyContent:"center"}}>
                                    <Text style={[styles.board, isReputation ? styles.reputationValid : styles.reputationInvalid]}>Réputation: {reputation}/10</Text>
                                    </View>
                                </Row>

                            </Grid>
                            
                            
                            



                        </View>

                        <Pressable
                            style={[styles.button, {marginBottom:"3%", backgroundColor:"#f1c40f"}]}
                            onPress={() => alert('test')}
                            >
                            <Text style={styles.textStyle}>Postuler</Text>
                            </Pressable>
                            <Pressable
                            style={[styles.button, {backgroundColor:"#333333"}] }
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>Retour</Text>
                        </Pressable>

                        


                    </View>
                    </View>

            </Modal>



                <Grid  >
                    <Row style={{ borderColor:"#55efc4",  borderBottomWidth:vw*2}}>
                        <Grid>
                            <Col>
                                <View style={{justifyContent:"center", height:"100%", width:"100%"}}>
                                <Image
                                            source={{ uri: robloxAvatar }}
                                            style={
                                                [styles.image,
                                                {
                                                    width: vw*15,
                                                    height: vw*15,
                                                    borderRadius:90,
                                                    borderColor:"grey",
                                                    borderWidth:3
                                                }
                                                ]}
                                        />
    
                                </View>
    
                            </Col>
    
                            <Col size={4}>
                                <View style={{height:"100%", width:"100%", justifyContent:"center"}}>
                                <Text style={{fontSize:vw*6, fontWeight:"bold", textAlign:"right", color:"#55efc4", opacity:0.8, paddingRight:"5%"}}>{searchJob}</Text>
                                </View>
                            </Col>
    
                        </Grid>
    
    
                    </Row>
                    <Row size={3}>
                    <View style={{height:"100%", width:"100%", backgroundColor:"#333333", borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
    
                                <Image
                                            source={{ uri: urlBackground }}
                                            style={
                                                {
                                                    width: "100%",
                                                    height: "100%",
                                                    opacity:0.25,
                                                    borderBottomLeftRadius:20,
                                                    borderBottomRightRadius:20
                                                }
                                                }
                                        />
                    
                    </View>
                    <View style={{height:"100%", width:"100%", position:"absolute"}}>
                        <Grid>
                            <Row>
                                <View style={{height:"100%", width:"100%", alignItems:"center"}}>
    
                                </View>
                            </Row>
    
                            <Row>
                                <View style={{height:"100%", width:"100%", alignItems:"center"}}>
                                <Text style={{fontSize:vw*7, fontWeight:"bold", color:"#f1c40f"}}>Salaire: {salaire} Tbx</Text>
                                    <View style={{width:"80%"}}>
    
                                    <AwesomeButtonRick  width='100%' textSize={20} textColor="white" backgroundColor="#95a5a6" backgroundDarker="#7f8c8d"  onPress={() => setModalVisible(true)}>
    Voir l'annonce</AwesomeButtonRick>
                                    </View>
    
                                    
                                </View>
    
                            </Row>
    
                        </Grid>
    
                    </View>
                    </Row>
    
                </Grid>
            </View>
    
        );
      
    }



}

// ~~~~ Style ~~~~  //
const styles = StyleSheet.create({
    main: {
        height: "100%",
        width: "100%",
    },
    header: {
        backgroundColor: "#333333",
        width: "100%",
        height: "40%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    pseudo: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
    },
    grade: {
        fontSize: 18,
        color: "grey"
    },
    title: {
        color: "white"
    },

    info: {
        fontWeight: "bold",
        color: "white"
    },

    body: {
        height: "60%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: "5%",
        paddingRight: "5%"
    },

    actions: {

        color: "white"

    },
    number: {
        fontWeight: "bold",
        color: "white"
    },
    image: {
        marginLeft:"10%"
    },
    shadow: {
        borderRadius: 20,
        backgroundColor: "red",
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width:"80%",
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
    
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize:15
      },
      modalText: {
        marginTop: "2%",
        marginBottom: "2%",
        fontSize:25,
        textAlign: "center",
        fontWeight: "bold",
    
      },
      board: {
          fontWeight:"bold",
          fontSize:17,
      },
      reputationValid :{
        color:"green"
      },
      reputationInvalid :{
        color:"red"
      },


});


// ~~~~ Props ~~~~  //
OfferCard.propTypes = {

    // Type
    robloxId: PropTypes.number,
    urlBackground: PropTypes.string,
    urgent: PropTypes.bool,
    salaire: PropTypes.number,
    scripter: PropTypes.bool,
    builder: PropTypes.bool,
    animater: PropTypes.bool,
    reputation: PropTypes.number,
    decription: PropTypes.string,
    autheur: PropTypes.string


};