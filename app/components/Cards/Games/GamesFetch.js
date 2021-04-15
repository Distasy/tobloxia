import React, { PureComponent } from 'react';
import GameCard from './GameCard';
import {  FlatList, ActivityIndicator } from 'react-native';

export default class GamesFetch extends PureComponent {
    state = {
        gameList: [],
        loading: true
    }
    async componentDidMount() {
        try {
            const gameApiCall = await fetch('https://games.roblox.com/v2/groups/6467035/games?sortOrder=Asc&limit=10');
            const game = await gameApiCall.json();
            this.setState({gameList: game.data, loading: false});
        } catch(err) {
            console.log("Erreur", err);
        }
    }
    render() {
        const { gameList, loading } = this.state;
        const { navigation } = this.props;
        if(!loading) {
            return <FlatList 
                    data={gameList}
                    renderItem={(data) => <GameCard {...data.item} navigation={navigation} />}
                    keyExtractor={this._keyExtractor}
                    />
        } else {
            return <ActivityIndicator />
        }
    }
}