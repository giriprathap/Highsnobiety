import React,{ useState, useEffect } from 'react';
import {FlatList,Text,View,StyleSheet,StatusBar,TouchableOpacity, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import TeaserCell from './components/TeaserCell';


var favoritesArray = [];
var newsListArray = [];
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  feedText:{
      fontSize: 40,
      fontWeight: "bold"
  }
});

const onFavButtonPress = (item) => {

  if (favoritesArray.includes(item)) {
    var index = favoritesArray.indexOf(item);
    favoritesArray.splice(index, 1);
  }else{
    favoritesArray.push(item);
 }
  storeData(favoritesArray);
  
  console.log("favorites in method",favoritesArray);
}

 storeData = async (favoritesArray) => {
  try {
    await AsyncStorage.setItem(
      'Favorites',
      JSON.stringify(favoritesArray)
    );
  } catch (error) {
     console.log("save failed");
  }
};

retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('Favorites');
    if (value !== null) {
      favoritesArray = JSON.parse(value);
    }
  } catch (error) {
    console.log("Retrieve failed");
  }
};

const Feed = ({ extraData,navigation }) => {
  newsListArray = extraData.latestNewsConnection.nodes;
  useEffect(() => {
    retrieveData();
  },[favoritesArray]);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate('Saved',{
          favorites: favoritesArray,
        })} title="Saved" />
      ),
    });
  }, [navigation]);
    return(
        <View style={styles.container}>
            <FlatList
            data={newsListArray}
            renderItem={({ item }) => (
              <TeaserCell item={item} onPress={() => onFavButtonPress(item)} navigation={navigation}/>
          )}             
          />
        </View>
    );
}

export default Feed;





