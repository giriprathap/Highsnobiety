import React from 'react';
import {FlatList,Text,View,StyleSheet,StatusBar} from 'react-native';
import {feedData} from '../data/feedData';
import TeaserCell from './components/TeaserCell';



  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const Feed = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    return(
        <View style={styles.container}>
            <Text style={styles.feedText}>Feed</Text>
            <FlatList
            data={feedData}
            renderItem={TeaserCell}
             />
        </View>
    );
}

export default Feed;




const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    feedText:{
        fontSize: 40,
        fontWeight: "bold"
    }
  });
  
