import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import hello from '../assets/images/hello.jpg';
import fast from '../assets/images/fast.jpg';
import start from '../assets/images/start.jpg';

const slides = [
  {
    key: '1',
    title: 'Welcome to Ananta',
    text: 'Discover amazing features and explore new experiences!',
    image: hello,
    backgroundColor: 'white',
  },
  {
    key: '2',
    title: 'Fast and Efficient',
    text: 'Our app is designed to provide lightning-fast experience!',
    image: fast,
    backgroundColor: 'white',
  },
  {
    key: '3',
    title: 'Get Started Now!',
    text: 'Join us and start your journey with Ananta.',
    image: start,
   backgroundColor: 'white',
  },
];

const IntroScreen = ({ navigation }: any) => {
  const _renderItem = ({ item }: any) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.slideTitle}>{item.title}</Text>
        <Text style={styles.slideText}>{item.text}</Text>
      </View>
    );
  };

  const onDone = () => {
    navigation.replace('OTP');
  };

  const renderDoneButton = () => (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Done</Text>
    </View>
  );

  const renderSkipButton = () => (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Skip</Text>
    </View>
  );

  const renderNextButton = () => (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Next</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        onDone={onDone}
        showSkipButton
        onSkip={onDone}
        showDoneButton
        renderDoneButton={renderDoneButton}
        renderSkipButton={renderSkipButton}
        renderNextButton={renderNextButton}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 50,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 20,
  },
  slideTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
  },
  slideText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  dot: {
    backgroundColor: 'lightgray',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'black',
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 4,
  },
});

export default IntroScreen;
