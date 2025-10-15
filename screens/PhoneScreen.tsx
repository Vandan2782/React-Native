import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { useNavigation } from '@react-navigation/native';

const PhoneScreen = () => {
  const [countryCode, setCountryCode] = useState('IN');
  const [callingCode, setCallingCode] = useState('91');
  const [visible, setVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigation = useNavigation(); 

  const onSelect = (country: any) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  const handleContinue = () => {
    if (phoneNumber.trim() === '') {
      Alert.alert('Validation', 'Please enter a phone number');
      return;
    }

    // 👇 navigate to OTP screen and pass data
    navigation.navigate('OTP', {
      phone: phoneNumber,
      code: callingCode,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your phone number</Text>

      <View style={styles.phoneContainer}>
        <TouchableOpacity onPress={() => setVisible(true)} style={styles.countryPicker}>
          <CountryPicker
            countryCode={countryCode}
            withCallingCode
            withFlag
            withFilter
            withAlphaFilter
            onSelect={onSelect}
            visible={visible}
            onClose={() => setVisible(false)}
          />
          <Text style={styles.callingCode}>+{callingCode}</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          maxLength={10}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhoneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 30,
    color: '#222',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 10,
    width: '100%',
    height: 55,
  },
  countryPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  callingCode: {
    fontSize: 16,
    marginLeft: 5,
    color: '#333',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginTop: 30,
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
});
