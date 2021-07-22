import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Col, Row, Grid } from "react-native-easy-grid";
import YoutubeCard from "./Cards/YoutubeCard";
import AnimatedScrollView from './AnimatedScrollView';

const TikTok = () => (
  <View>
    <View style={{width: "100%", height:80}}>
      <Image 
        resizeMode="cover" 
        style={{width: "100%", height: 80}} 
        source={{uri: "https://media.discordapp.net/attachments/519799997534044170/835482185448423455/tiktok_banniere.png?width=998&height=200"}} />
    </View>
    <AnimatedScrollView showsVerticalScrollIndicator={false}>
      <View>
        
        <Grid>
          <Col>
            <View style={styles.tiktokBanner}>
              <Text style={{color: "white"}}>TikTok 1</Text>
            </View>
          </Col>
          <Col>
            <View style={styles.tiktokBanner}>
              <Text style={{color: "white"}}>TikTok 2</Text>
            </View>
          </Col>
          <Col>
            <View style={styles.tiktokBanner}>
              <Text style={{color: "white"}}>TikTok 3</Text>
            </View>
          </Col>
        </Grid>

        <Grid>
          <Col>
            <View style={styles.tiktokBanner}>
              <Text style={{color: "white"}}>TikTok 4</Text>
            </View>
          </Col>
          <Col>
            <View style={styles.tiktokBanner}>
              <Text style={{color: "white"}}>TikTok 5</Text>
            </View>
          </Col>
          <Col>
            <View style={styles.tiktokBanner}>
              <Text style={{color: "white"}}>TikTok 6</Text>
            </View>
          </Col>
        </Grid>

        <Grid>
          <Col>
            <View style={styles.tiktokBanner}>
              <Text style={{color: "white"}}>TikTok 7</Text>
            </View>
          </Col>
          <Col>
            <View style={styles.tiktokBanner}>
              <Text style={{color: "white"}}>TikTok 8</Text>
            </View>
          </Col>
          <Col>
            <View style={styles.tiktokBanner}>
              <Text style={{color: "white"}}>TikTok 9</Text>
            </View>
          </Col>
        </Grid>
      </View>
    </AnimatedScrollView>
  </View>
);

const YouTube = () => (
  <View>
    <View style={{width: "100%", height:80}}>
      <Image resizeMode="cover" 
        style={{width: "100%",
        height: 80}} 
        source={{uri: "https://media.discordapp.net/attachments/519799997534044170/835483812381196298/yy.png?width=998&height=200"}} />
    </View>
    <AnimatedScrollView showsVerticalScrollIndicator={false}>
      <View>
        <YoutubeCard videoId="inFDDLgHr1E" title="Nom de la vidéo" author="Tobloxia" date="23/04/2021" views={12} />
      </View>

      <View>
        <YoutubeCard videoId="pT2sg_yh2wc" title="Nom de la vidéo" author="Tobloxia" date="23/04/2021" views={12} />
      </View>

      <View>
        <YoutubeCard videoId="AX2CnPeu1fk" title="Nom de la vidéo" author="Tobloxia" date="23/04/2021" views={12} />
      </View>

      <View>
        <YoutubeCard videoId="dAvNO2mBfV4" title="Nom de la vidéo" author="Tobloxia" date="23/04/2021" views={12} />
      </View>

      <View>
        <YoutubeCard videoId="aulMEfS4nbo" title="Nom de la vidéo" author="Tobloxia" date="23/04/2021" views={12} />
      </View>

      <View>
        <YoutubeCard videoId="T0eHTpOec74" title="Nom de la vidéo" author="Tobloxia" date="23/04/2021" views={12} />
      </View>
    </AnimatedScrollView>
  </View>

);
 
const Twitch = () => (
  <View>
  <View style={{width: "100%", height:80}}>
      <Image resizeMode="cover" 
        style={{width: "100%",
        height: 80}} 
        source={{uri: "https://media.discordapp.net/attachments/519799997534044170/835484949363949609/ww.png?width=998&height=200"}} />
    </View>
  <AnimatedScrollView showsVerticalScrollIndicator={false}>
      <View>
        <YoutubeCard videoId="mv4pqttZ7tA" title="Nom de la rediff" author="Tobloxia" date="23/04/2021" views={12} />
      </View>

      <View>
        <YoutubeCard videoId="Z3ejysKJC20" title="Nom de la rediff" author="Tobloxia" date="23/04/2021" views={12} />
      </View>

      <View>
        <YoutubeCard videoId="dy7BM0pH0rE" title="Nom de la rediff" author="Tobloxia" date="23/04/2021" views={12} />
      </View>

      <View>
        <YoutubeCard videoId="5tc4S6jdoik" title="Nom de la rediff" author="Tobloxia" date="23/04/2021" views={12} />
      </View>

      <View>
        <YoutubeCard videoId="TEKd_nyjM88" title="Nom de la rediff" author="Tobloxia" date="23/04/2021" views={12} />
      </View>

      <View>
        <YoutubeCard videoId="h2VqCnmni8M" title="Nom de la rediff" author="Tobloxia" date="23/04/2021" views={12} />
      </View>
  </AnimatedScrollView>
</View>
);
 
const initialLayout = { width: Dimensions.get('window').width };


const Social = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'tiktokkey', title: 'TikTok' },
    { key: 'youtubekey', title: 'YouTube' },
    { key: 'twitchkey', title: 'Twitch' },
  ]);

  const renderScene = SceneMap({
    tiktokkey: TikTok,
    youtubekey: YouTube,
    twitchkey: Twitch
  });

  const renderTabBar = props => (
    <View>
      <View style={{width: "100%", height:150}}>
          <Image
          resizeMode="cover" 
          style={{width: "100%",
            height: 150}}
          source={{uri: 'https://media.discordapp.net/attachments/519799997534044170/835251248659038258/toblo_community.png?width=998&height=399'}}
        />
      </View>
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#55efc4' }}
        style={{ backgroundColor: '#636e72' }}
      />
    </View>
  );
  return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.container}
        renderTabBar={renderTabBar}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  socialBanner: {
    backgroundColor: "#55efc4",
    paddingTop: "8%",
    paddingBottom: "8%",
    alignItems: "center"
  },
  tiktokBanner: {
    height: 250,
    backgroundColor: "#e67e22",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#333",
    borderWidth: 0.5
  }
});

export default Social;