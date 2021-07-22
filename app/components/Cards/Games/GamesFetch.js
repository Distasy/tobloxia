import React, {Component} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import GameCard from "./GameCard";
import { vh } from 'react-native-viewport-units-fix';

export default class GamesFetch extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource:[],
     };
   }
 
  componentDidMount(){
    fetch("https://games.roblox.com/v2/groups/6467035/games?sortOrder=Asc&limit=10")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource: responseJson.data,
       isLoading: false,
      })
    })
    .catch(error=>console.log(error))

    }
    
    render(){
      if (this.state.isLoading) {
        return (
          <View style={{ marginTop: vh * 35, }}>
            <ActivityIndicator size={50} color="#ff7675" />
          </View>
        );
      }

      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <FlatList
                  data={this.state.dataSource}
                  keyExtractor = { (item, index) => index.toString() }
                  renderItem={({item}) => 
                  <GameCard mapId={item.id} mapName={item.name} mapImg={item.rootPlace.id} mapVisits={item.placeVisits} />
                  }
              />
        </View>   
      )}
}