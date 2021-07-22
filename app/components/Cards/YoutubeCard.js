import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity} from 'react-native';

const YoutubeCard = (props)=>{
let title = props.title;
let views = props.views;
let author = props.author;
let date = props.date;
let videoId = props.videoId;
  return(
      <TouchableOpacity>
        <View style={{flexDirection:"row",margin:10,marginBottom:0}}>
            <Image 
            source={{uri:`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}}
            style={{
                width:"45%",
                height:100
            }} />
            <View style={{
                paddingLeft:7
            }}>
                <Text style={{
                    fontSize:17,
                    width:Dimensions.get("screen").width/2,
                    color:"black",
                    fontWeight: "bold"
                }}
                ellipsizeMode="tail"
                numberOfLines={3}
                >{title}</Text>
                <Text style={{fontSize:12, color:"black"}}>{author}</Text>
                <Text style={{fontSize:12, color:"black"}}>{date} · {views}k vues</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

YoutubeCard.propTypes = {

    // Infos
    title: PropTypes.string,
    author:  PropTypes.string,
    date: PropTypes.string,
    views: PropTypes.number,
    videoId: PropTypes.string 
};

export default YoutubeCard;