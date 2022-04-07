import React,{ useState, useEffect } from 'react';
import {FlatList,Text,View,StyleSheet,StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {feedData} from '../data/feedData';
import TeaserCell from './components/TeaserCell';

var favoritesArray = [];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
});

const onFavButtonPress = (item) => {
  if (favoritesArray.includes(item)) {
    var index = favoritesArray.indexOf(item);
    favoritesArray.splice(index, 1);
    storeData(favoritesArray);
  }
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

const Saved = ({ route,navigation }) => {
  const [favorites,SetFavorites] = useState([]);
  useEffect(() => {
    retrieveData();
  },[favoritesArray]);

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Favorites');
      if (value !== null) {
        favoritesArray = JSON.parse(value);
        SetFavorites(favoritesArray);
      }
    } catch (error) {
      console.log("Retrieve failed");
    }
  };

    return(
        <View style={styles.container}>
            <FlatList
            data={favorites}
            renderItem={({ item }) => (
              <TeaserCell item={item} onPress={() => onFavButtonPress(item)} navigation={navigation}/>
          )} 
            numColumns={2}

             />
        </View>
    );
}

export default Saved;





