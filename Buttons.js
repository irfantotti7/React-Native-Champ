import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Buttons = () => {
  const buttons = ['My Badges', 'My Profile', 'Achievements'];

  const onPressButton = (button) => {
    console.log('Button pressed:', button);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => onPressButton(button)}
          >
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  button: {
    marginRight: 15,
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 8,
    backgroundColor: '#6263ec',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f0f0f1',
  },
});

export default Buttons;
