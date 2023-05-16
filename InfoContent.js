import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

function InfoSection() {
  const photoSource = require('./assets/IrfanT.jpg');
  const name = 'Irfan T';
  const designation = 'Software Engineer-I';

  return (
    <View style={styles.container}>
      <Image source={photoSource} style={styles.myPhoto} resizeMode='contain' />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.designation}>{designation}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 90
  },
  myPhoto: {
    width: 200,
    height:200,
    borderRadius: 50,
  },
  infoContainer: {
    marginLeft: 10
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  designation: {
    fontSize: 16,
  },
});

export default InfoSection;
