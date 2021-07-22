import React, { useState } from "react";
import { View, StyleSheet, Text, Modal, Alert, Pressable, TextInput } from 'react-native';
import OfferCard from './Cards/Games/OfferCard';
import { vw } from 'react-native-viewport-units-fix';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import AnimatedScrollView from './AnimatedScrollView';
import { Col, Row, Grid } from "react-native-easy-grid";
import Slider from "react-native-slider";
import { Checkbox } from 'react-native-paper'; 
import Icon from 'react-native-vector-icons/AntDesign';
import FlipCard from 'react-native-flip-card';

 
const Advertisement = () => {

  const width  = "100%";
  const height = vw * 35;
  const [modalVisible, setModalVisible] = useState(false);
  const [gameLink, onChangeText] = React.useState("Useless Text");

  // Menu annonce
  const [checked1, setChecked1] = React.useState(false); //scripter
  const [checked2, setChecked2] = React.useState(false); //builder
  const [checked3, setChecked3] = React.useState(false); //animater
  const [checkedUrgent, setCheckedUrgent] = React.useState(false);

  // Menu recherche
  const [searchChecked1, setSearchChecked1] = React.useState(false); //scripter
  const [searchChecked2, setSearchChecked2] = React.useState(false); //builder
  const [searchChecked3, setSearchChecked3] = React.useState(false); //animater



  const [salaire, setVal] = useState(0);
  const [prixUrgent, setUrgent] = useState(0);

  // builder CodeSandbox
  // animater woman
  // scripter database  
  return (
    <AnimatedScrollView>
      <View style={styles.container}>
      <View style={{height:height, width:width, backgroundColor:"#333333", alignItems:"center" }}>
        <Text style={styles.title}>Développement de jeux</Text>
        <View style={{height:"50%", width:"80%", backroundColor:"red"}}>
         <AwesomeButtonRick  width='100%' textSize={20} textColor="white" backgroundColor="#55efc4" backgroundDarker="#00b894" onPress={() => setModalVisible(true)}>
Déposer une annonce</AwesomeButtonRick>
        </View>
    </View>

    <View  style={{height:vw*15, width:"100%"}} >
    <FlipCard flipHorizontal={false} flipVertical={true} friction={15}>
        <View style={{height:"100%", width:"100%", backgroundColor:"#55efc4", alignItems:"center", justifyContent:"center", borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
          <Icon name="search1" size={vw*10} color="#333333" />
        </View>

        <View style={{height:"100%", width:"100%", backgroundColor:"#333333"}}>
          <Grid>
            <Col>
              <Grid>
                <Col>
                  <View style={{height:"100%", width:"100%", justifyContent:"center", alignItems:"center"}}>
                    <Checkbox
                          style={{alignSelf: "center"}}
                          status={searchChecked1 ? 'checked' : 'unchecked'}
                          onPress={() => {
                            setSearchChecked1(!searchChecked1);
                          }}
                        />

                  </View>
                </Col>
                <Col size={2}>
                <View style={{height:"100%", width:"100%", justifyContent:"center"}}>
                        <Text style={styles.searchJob}>Scripter</Text>


                </View>
                          
                </Col>
              </Grid>
            
            </Col>

            <Col>
            <Grid>
                <Col>
                  <View style={{height:"100%", width:"100%", justifyContent:"center", alignItems:"center"}}>
                    <Checkbox
                          style={{alignSelf: "center"}}
                          status={searchChecked2 ? 'checked' : 'unchecked'}
                          onPress={() => {
                            setSearchChecked2(!searchChecked2);
                          }}
                        />

                  </View>
                </Col>
                <Col size={2}>
                <View style={{height:"100%", width:"100%", justifyContent:"center"}}>
                        <Text style={styles.searchJob}>Builder</Text>


                </View>
                          
                </Col>
              </Grid>
            </Col>
            <Col>
            <Grid>
                <Col>
                  <View style={{height:"100%", width:"100%", justifyContent:"center", alignItems:"center"}}>
                    <Checkbox
                          style={{alignSelf: "center"}}
                          status={searchChecked3 ? 'checked' : 'unchecked'}
                          onPress={() => {
                            setSearchChecked3(!searchChecked3);
                          }}
                        />

                  </View>
                </Col>
                <Col size={2}>
                <View style={{height:"100%", width:"100%", justifyContent:"center"}}>
                        <Text style={styles.searchJob}>Animater</Text>


                </View>
                          
                </Col>
              </Grid>
            </Col>


          </Grid>
        </View>
    </FlipCard>
    </View>

    

    <View style={styles.centeredView}>
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
          <View style={[styles.modalView,{height:vw*140, width:vw*80}]}  >
            <Text style={styles.modalText}>Création d'une annonce</Text>
            <Text style={{
              marginBottom: 15,
              fontSize:18,
              color:"#55efc4",
              fontWeight:"bold",
              textAlign: "center"}}>Vous recherchez</Text>
            <Grid style={{height:vw}}>
                <Col>
                  <Grid >
                    <Row >
                      <View style={{height:"100%", width:"100%", alignItems:"center"}}>
                        <Checkbox
                        style={{alignSelf: "center"}}
                        status={checked1 ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setChecked1(!checked1);
                        }}
                      />

                      </View>

                    </Row>


                    <Row size={1}>
                      <View style={{height:"100%", width:"100%", alignItems:"center"}}>
                      <Text style={styles.job}>Scripter</Text>
                      </View>
                  
                  
                    </Row>
                  </Grid>
                </Col>

                <Col>
                  <Grid >
                    <Row >
                      <View style={{height:"100%", width:"100%", alignItems:"center"}}>
                        <Checkbox
                        style={{alignSelf: "center"}}
                        status={checked2 ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setChecked2(!checked2);
                        }}
                      />

                      </View>

                    </Row>


                    <Row size={1}>
                      <View style={{height:"100%", width:"100%", alignItems:"center"}}>
                      <Text style={styles.job}>Builder</Text>
                      </View>
                  
                  
                    </Row>
                  </Grid>
                </Col>
                <Col>
                  <Grid >
                    <Row>
                      <View style={{height:"100%", width:"100%", alignItems:"center"}}>
                        <Checkbox
                        style={{alignSelf: "center"}}
                        status={checked3 ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setChecked3(!checked3);
                        }}
                      />

                      </View>

                    </Row>


                    <Row size={1}>
                      <View style={{height:"100%", width:"100%", alignItems:"center"}}>
                      <Text style={styles.job}>Animateur</Text>
                      </View>
                  
                  
                    </Row>
                  </Grid>
                </Col>

            </Grid>
            <Grid>
              <Col>
                        <View style={{height:"100%", width:"100%", justifyContent:"center"}}>
                          <Text style={{fontWeight:"bold", fontSize:17}}>Urgent (+50Tbx)</Text>
                        </View>
                
              </Col>
              <Col size={1.1}>
                <View style={{height:"100%", width:"100%", justifyContent:"center"}}>
                <Checkbox
                        style={{alignSelf: "center"}}
                        status={checkedUrgent ? 'checked' : 'unchecked'}
                        color="#f1c40f"
                        onPress={() => {
                          setCheckedUrgent(!checkedUrgent);
                          checkedUrgent ? setUrgent(0) : setUrgent(50)
                        }}
                      />
                </View>

              </Col>

            </Grid>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Salaire: {parseInt(salaire * 100)} Tbx</Text>
            <Slider

              value={salaire}
              animateTransitions
              minimumValue={0}
              maximumValue={1}
              step={0.1}
              onValueChange={salaire => setVal(salaire)}
              thumbTintColor={"#55efc4"}
            />
            <TextInput
                    style={[styles.input, {height: vw*30, width:"100%", marginBottom:"7%"}]}
                    onChangeText={text => onChangeText(text)}
                    placeholder="Quel est votre problème ?"
                    keyboardType="default"
                    textAlign="center"
                    multiline
                    padding={5}
                  />
            <Pressable
              style={[styles.button, {marginBottom:"5%", backgroundColor:"#55efc4"}]}
              onPress={() => alert('test')}
            >
              <Text style={styles.textStyle}>Mettre en ligne: ({parseInt(salaire * 100) + prixUrgent} Tbx)</Text>
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
    </View>

    <OfferCard robloxId={1036465979} salaire={1200} autheur="Tchoow" reputation={5} builder scripter urgent urlBackground="https://i.ytimg.com/vi/1wKvAIJedGw/maxresdefault.jpg" description="Coucou je suis la description Coucou je suis la description Coucou je suis la description Coucou je suis la descriptionCoucou je suis la description Coucou je suis la description" />
    <OfferCard robloxId={107436912}  salaire={750}  autheur="Quentin"reputation={6} builder urgent={false} urlBackground="https://45secondes.fr/wp-content/uploads/2020/11/1605947412_257_Comment-creer-votre-propre-PNJ-a-Roblox.jpg" description="Coucou je suis la description Coucou je suis la description Coucou je suis la description Coucou je suis la descriptionCoucou je suis la description Coucou je suis la description" />
    <OfferCard robloxId={2432936862} salaire={850}  autheur="Tchoow" reputation={4} animater builder urgent={false} urlBackground="https://tra.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FBIN.2F2020.2F03.2F04.2Fa77a4e93-2e68-45df-8b39-8f618efe03cb.2Epng/1200x630/quality/80/ce-jeu-video-simpliste-a-permis-a-ses-createurs-de-18-ans-de-devenir-millionnaires-on-y-a-joue-et-on-sest-fait-massacrer.jpg" description="Coucou je suis la description Coucou je suis la description Coucou je suis la description Coucou je suis la descriptionCoucou je suis la description Coucou je suis la description" />
    <OfferCard robloxId={2432936862} salaire={500}  autheur="Quentin"reputation={8} animater builder scripter urgent={true} urlBackground="https://tra.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FBIN.2F2020.2F03.2F04.2Fa77a4e93-2e68-45df-8b39-8f618efe03cb.2Epng/1200x630/quality/80/ce-jeu-video-simpliste-a-permis-a-ses-createurs-de-18-ans-de-devenir-millionnaires-on-y-a-joue-et-on-sest-fait-massacrer.jpg" description="Coucou je suis la description Coucou je suis la description Coucou je suis la description Coucou je suis la descriptionCoucou je suis la description Coucou je suis la description" />

    </View>
    </AnimatedScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    borderWidth: 2,
    borderRadius:10
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop:"2%",
    marginBottom:"5%"
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
    padding: 12,
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
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontSize:25,
    textAlign: "center",
    fontWeight: "bold",

  },
  value: {
    fontSize:20,
    fontWeight:"bold"
  },
  job : {
    fontSize:15,
    fontWeight:"bold"
  },
  searchJob : {
    fontSize:15,
    fontWeight:"bold",
    color:"#fff"
  },

});

export default Advertisement;
