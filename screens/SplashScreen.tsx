import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Animated } from 'react-native';
import react from '../assets/images/reactnative.png';
import main from '../assets/images/mainlogo.webp'

const SplashScreen = ({ navigation }: any) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('Intro');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#121212" barStyle="light-content" />

      <Animated.View style={{ opacity: fadeAnim, alignItems: 'center' }}>
        <Image source={main} style={styles.logo} />
        <Text style={styles.title}>ANANTA</Text>
      </Animated.View>


      <View style={styles.footer}>
        <Text style={styles.footerText}>© {new Date().getFullYear()} Ananta. All rights reserved.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 20,
  },
  title: {
    color: 'gray',
    fontSize: 24,
    fontWeight: '500',
    fontFamily:'Roboto'
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  footerText: {
    color: 'gray',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default SplashScreen;
