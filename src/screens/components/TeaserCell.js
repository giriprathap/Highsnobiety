import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground,Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:5,
        marginRight:5,
        marginTop: 0,
        marginBottom: 0,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    photo: {
        height: 150,
        width: 150,
    },
    favButtom: {
        width:35,
        height:35,
        justifyContent:"flex-end"
    }
});

const favImage = '../../assets/fav.png';
const unfavImage = '../../assets/unfav.png';

var savedFavourites = [];

buttonPressAction = (item) =>{
    savedFavourites.push(item);
    console.log("item data to store",savedFavourites);
}


const TeaserCell = ({ item, onPress,navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('FeedWebview',{
            slug: item.slug,
        })}>
    <View style={styles.container}>
        <View style={styles.photo}>
        
         <ImageBackground source={{ uri: item.featuredImage.assets[0].path }} style={styles.photo}>
         <TouchableOpacity style={styles.favButtom} onPress={onPress}>
             <Image  style={styles.favButtom} source={ require(favImage)}/>
         </TouchableOpacity>
        </ImageBackground>
        </View>
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {item.title}
            </Text>
        </View>
    </View>
    </TouchableOpacity>

);
}

export default TeaserCell;