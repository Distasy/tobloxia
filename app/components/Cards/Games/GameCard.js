import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/AntDesign';
import { vw, vh, vmin, vmax } from 'react-native-viewport-units-fix';
import * as Animatable from 'react-native-animatable';
import TextTicker from 'react-native-text-ticker';

const GameCard = ({name, id, navigation}) => {

    //let mapId = props.mapId;

    const mapImage = "https://www.roblox.com/asset-thumbnail/image?assetId=" + id + "&width=768&height=432&format=png";
    const width = vw * 75;
    const height = vw * 70;
    return (
        <View style={{ alignItems: "center", width: width, height: height, backgroundColor: "#333333", borderRadius: 20, marginBottom: 20 }}>
            
            <Grid>
                <Row size={80}>
                    <View style={{ height: "100%", widht: "100%" }}>
                        <Image
                            source={{ uri: mapImage }}
                            style={
                                [styles.image,
                                {
                                    width: vw * 75,
                                    height: vw * 50,
                                }
                                ]}
                        />
                    </View>
                    <LinearGradient
                        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.0)', 'rgba(0,0,0,0.0)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.2)']}
                        style={[styles.FadeAway, {
                            width: width, height: height,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                        }]}>

                    </LinearGradient>
                </Row>
                <Row size={25}>
                    <Grid>
                        <Row style={{ height: "50%" }}>
                            <View style={{ alignItems: "center", height: "100%", width: "100%" }}>
                                <TextTicker
                                    style={{ fontSize: 25 }}
                                    duration={6500}
                                    loop
                                    bounce
                                    scroll
                                    repeatSpacer={20}
                                    marqueeDelay={2000}
                                >

                                    <Text style={[styles.title, { color: "white", fontSize: vw * 4 }]}>{name}</Text>
                                </TextTicker>
                            </View>

                        </Row>

                        <Row>
                            <Grid>
                                <Col >
                                    <Grid >
                                        <Col >
                                            <View style={{ height: "100%", width: "100%", alignItems: "center" }}>
                                                <Animatable.View
                                                    iterationCount="infinite"
                                                    animation="tada"
                                                    easing="ease-out"
                                                    duration={2000}
                                                >
                                                    <Icon name="like1" size={vw * 6} color="white" />
                                                </Animatable.View>
                                            </View>
                                        </Col>

                                        <Col >
                                            <View style={{ height: "100%", width: "100%" }}>
                                                <Text style={[styles.info, { fontSize: vw * 5 }]}>98,2%</Text>
                                            </View>
                                        </Col>
                                    </Grid>

                                </Col>


                                <Col >
                                    <Grid>
                                        <Col>
                                            <View style={{ height: "100%", width: "100%", alignItems: "center" }}>
                                                <Animatable.View
                                                    iterationCount="infinite"
                                                    animation="swing"
                                                    easing="ease-out"
                                                    duration={1200}
                                                >
                                                    <Icon name="smile-circle" size={vw * 6} color="white" />
                                                </Animatable.View>
                                            </View>

                                        </Col>

                                        <Col >
                                            <View style={{ height: "100%", width: "100%" }}>
                                                <Text style={[styles.info, { fontSize: vw * 5 }]}>2,5 k</Text>
                                            </View>
                                        </Col>
                                    </Grid>

                                </Col>

                            </Grid>
                        </Row>
                    </Grid>
                </Row>
            </Grid>
        </View>

    );

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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
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


});


// ~~~~ Props ~~~~  //
GameCard.propTypes = {

    // Type
    mapId: PropTypes.number,


};

export default GameCard;