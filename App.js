import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PhotoWithInfo from './InfoContent'
import Buttons from './Buttons';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('./assets/Visible-logo.png')} />
      </View>
      <View style={styles.line} />

      {/* Content */}
      <View style={styles.infoContainer}>
        <PhotoWithInfo />
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>
        <Buttons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20, 
  },
  imageContainer: {
    position: 'absolute',
    top: 40, 
    right: 20, 
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  line: {
    height: 10, 
    backgroundColor: '#1505fc', 
    marginTop: 125, 
  },
});
