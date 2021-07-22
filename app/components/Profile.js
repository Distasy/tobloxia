import React, { useRef } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AnimatedScrollView from './AnimatedScrollView';
import { IconButton } from 'react-native-paper';
import ClaimModal from "./Modals/ClaimModal";

const Profile = ({ navigation }) => {
  const modalRef = useRef(null);
  return (
    <AnimatedScrollView showsVerticalScrollIndicator={false}>
      <View style={{alignSelf: "center", marginTop: 20}}>
        <View style={styles.profilImage}>
          <Image source={require('../../assets/icon.png')} style={styles.image} resizeMode="center" />
        </View>

        <View>
          <IconButton
            icon="cash-refund"
            size={25}
            style={styles.add}
            color="#55efc4" 
            onPress={() => modalRef.current.openModal()}
          />
          <ClaimModal ref={modalRef} />
        </View>
      </View>

      <View style={styles.intoContainer}>
        <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Quentin</Text>
        <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14}]}>Silver</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={[styles.text, { fontSize: 24 }]}>2</Text>
          <Text style={[styles.text, styles.subText]}>Jeux</Text>
        </View>
        <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
          <Text style={[styles.text, { fontSize: 24 }]}>750</Text>
          <Text style={[styles.text, styles.subText]}>Tbx</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={[styles.text, { fontSize: 24 }]}>5</Text>
          <Text style={[styles.text, styles.subText]}>Annonces</Text>
        </View>
      </View>

      <View style={{ marginTop: 32 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.mediaImageContainer}>
            <Image source={require("../../assets/icon.png")} style={[styles.image, {borderRadius: 0}]} resizeMode="cover" />
          </View>
          <View style={styles.mediaImageContainer}>
            <Image source={require("../../assets/icon.png")} style={[styles.image, {borderRadius: 0}]} resizeMode="cover" />
          </View>
          <View style={styles.mediaImageContainer}>
            <Image source={require("../../assets/icon.png")} style={[styles.image, {borderRadius: 0}]} resizeMode="cover" />
          </View>
          <View style={styles.mediaImageContainer}>
            <Image source={require("../../assets/icon.png")} style={[styles.image, {borderRadius: 0}]} resizeMode="cover" />
          </View>
          <View style={styles.mediaImageContainer}>
            <Image source={require("../../assets/icon.png")} style={[styles.image, {borderRadius: 0}]} resizeMode="cover" />
          </View>
        </ScrollView>
      
        <View style={styles.mediaCount}>
          <Text style={[styles.text, {fontSize: 24, color: "#DFD8C8", fontWeight: "300"}]}>5</Text>
          <Text style={[styles.text, { fontSize: 12, color: "#DFD8C8", textTransform: "uppercase" }]}>Annonces</Text>
        </View>
      </View>

      <Text style={[styles.subText, styles.recent]}>Activités récentes</Text>

      <View style={{alignItems: "center"}}>

        <View style={styles.recentItem}>
          <View style={styles.recentItemIndicator}></View>
          <View style={{ width: 280 }}>
            <Text style={[styles.text, {color: "#41444B", fontWeight: "300"}]}>
              Vous avez gagnez{" "}
              <Text style={{fontWeight: "400"}}>
                1 TBX <Text style={{ fontWeight: "400" }}>en regardant une pub</Text>
              </Text>
            </Text>
          </View>    
        </View>

        <View style={styles.recentItem}>
          <View style={styles.recentItemIndicator}></View>
          <View style={{ width: 280 }}>
            <Text style={[styles.text, {color: "#41444B", fontWeight: "300"}]}>
              Vous avez gagnez{" "}
              <Text style={{fontWeight: "400"}}>
                1 TBX <Text style={{ fontWeight: "400" }}>en regardant une pub</Text>
              </Text>
            </Text>
          </View>    
        </View>

        <View style={styles.recentItem}>
          <View style={styles.recentItemIndicator}></View>
          <View style={{ width: 280 }}>
            <Text style={[styles.text, {color: "#41444B", fontWeight: "300"}]}>
              Vous avez gagnez{" "}
              <Text style={[ styles.text, { color: "#41444B", fontWeight: "400" }]}>
                1 TBX <Text style={{ fontWeight: "400" }}>en regardant une pub</Text>
              </Text>
            </Text>
          </View>    
        </View>

      </View>
    </AnimatedScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1"
  },
  text: {
    color: "#525750"
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500"
  },
  image: {
    flex: 1,
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
  },
  profilImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
  },
  dm: {
    backgroundColor: "#414448",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  active: {
    backgroundColor: "#34FF89",
    position: "absolute",
    bottom: 20,
    left: 20,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10
  },
  add: {
    backgroundColor: "#636e72",
    position: "absolute",
    bottom: -5,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  intoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,

  },
  statsBox: {
    alignItems: "center",
    flex: 1
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10
  },
  mediaCount: {
    backgroundColor: "#636e72",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 20,
    shadowOpacity: 1
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16
  },
  recentItemIndicator: {
    backgroundColor: "#636e72",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20
  }
})

export default Profile;
