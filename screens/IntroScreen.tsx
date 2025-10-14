import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import react from '../assets/images/reactnative.png'

const IntroScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={react}
        style={styles.image}
      />
      <Text style={styles.heading}>Let’s Get Started!</Text>
      <Text style={styles.description}>
        Discover amazing features and explore new experiences with MyApp.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Home')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
    borderRadius: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 10,
    color: '#000',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#0078D7',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default IntroScreen;
