import React, { useState } from "react";
import { View, StyleSheet, Text, Modal, Alert, Pressable, TextInput } from 'react-native';
import AnimatedScrollView from './AnimatedScrollView';
import GamesFetch from './Cards/Games/GamesFetch';
import { vw } from 'react-native-viewport-units-fix';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import Slider from "react-native-slider";
import { Col, Grid } from "react-native-easy-grid";

const Games = () => {

  const width  = "100%";
  const height = vw * 35;
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setVal] = useState(0);
  const [gameLink, onChangeText] = React.useState("Useless Text");

  return (
    <AnimatedScrollView styles={styles.container}>
      <View style={{height:height, width:width, backgroundColor:"#333333", alignItems:"center"}}>
        <Text style={styles.title}>Jeux mis en avant</Text>
        <View style={{height:"50%", width:"80%", backroundColor:"red"}}>
         <AwesomeButtonRick  width='100%' textSize={20} textColor="white" backgroundColor="#55efc4" backgroundDarker="#00b894" onPress={() => setModalVisible(true)}>
Promouvoir mon jeu</AwesomeButtonRick>
        </View>
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
          <View style={[styles.modalView,{height:vw*100, width:vw*80}]}  >
            <Text style={styles.modalText}>Saisissez votre budget</Text>
            <Grid >
                <Col>
                  <Text style={styles.value}>{parseInt(value *1000)} Tbx</Text>
                </Col>

                <Col >
                  <View>
                  <Text style={[styles.value, {right:0, position:"absolute", marginRight:"5%"}]}>{parseInt(value *30)} h</Text>

                  </View>
                  
                </Col>


            </Grid>
            
            <Slider
              value={value}
              animateTransitions
              minimumValue={0}
              maximumValue={1}
              step={0.1}
              onValueChange={value => setVal(value)}
              thumbTintColor={"#55efc4"}
            />

            <TextInput
                    style={[styles.input, {height: vw*10, width:"100%", marginBottom:"7%"}]}
                    onChangeText={text => onChangeText(text)}
                    placeholder="Lien de votre jeu"
                    keyboardType="default"
                    textAlign="center"
                    padding={5}
                  />
            <Pressable
              style={[styles.button, {marginBottom:"7%", backgroundColor:"#55efc4"}]}
              onPress={() => alert('test')}
            >
              <Text style={styles.textStyle}>Valider</Text>
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



    
        <GamesFetch />
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
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
  }
});

export default Games;


