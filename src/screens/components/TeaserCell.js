import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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
});

const TeaserCell = ({ item }) => (
    <View style={styles.container}>
        <Image source={{ uri: item.imageURL }} style={styles.photo} />
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {item.title}
            </Text>
        </View>

    </View>
);

export default TeaserCell;