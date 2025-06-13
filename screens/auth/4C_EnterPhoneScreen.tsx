import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import CountryPicker, { Country, CountryCode, Flag } from 'react-native-country-picker-modal';


type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '3C_CreateAccount'>;
};

export default function EnterPhoneScreen({ navigation }: Props) {
  const [phone, setPhone] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [country, setCountry] = useState<Country>({
    cca2: 'US',
    callingCode: ['1'],
    flag: '🇺🇸',
    name: 'United States',
    currency: ['USD'],
    region: 'Americas',
    subregion: 'North America',
    translations: {},
    // Add any other required fields if needed by your TS config
  } as Country);
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const isPhoneValid = phone.trim().length > 0;

  const onSelect = (selectedCountry: Country) => {
    setCountryCode(selectedCountry.cca2 as CountryCode);
    setCountry(selectedCountry);
    setShowCountryPicker(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>‹</Text>
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>WHAT'S YOUR NUMBER?</Text>
        <Text style={styles.subtitle}>We'll use your number to verify your account.</Text>

        <View style={styles.inputRow}>
        <TouchableOpacity onPress={() => setShowCountryPicker(true)} activeOpacity={0.8}>
          <CountryPicker
            countryCode={countryCode}
            withFlag
            withCallingCodeButton
            withFilter
            withEmoji
            onSelect={onSelect}
            theme={{ backgroundColor: '#121212', onBackgroundTextColor: '#fff' }}
            containerButtonStyle={styles.countryPickerBtn}
          />
        </TouchableOpacity>


          <TextInput
            style={styles.phoneInput}
            placeholder="123 456 7890"
            placeholderTextColor="#aaa"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            maxLength={15}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.continueButton,
            isPhoneValid ? styles.continueButtonActive : styles.continueButtonInactive,
          ]}
          disabled={!isPhoneValid}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
          <Text style={styles.modalPhoneText}>
            +{country.callingCode[0]} {phone}
          </Text>



            <Text style={styles.modalMessage}>
              Is this number correct? We'll send you a confirmation code there.
            </Text>

            <TouchableOpacity
              style={[styles.continueButton, styles.continueButtonActive, { marginBottom: 10 }]}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('4G_Onboarding');
              }}
            >
              <Text style={styles.continueButtonText}>CONTINUE</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.continueButton, styles.continueButtonInactive]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.continueButtonText}>GO BACK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 24,
  },
  backButton: {
    marginBottom: 10,
  },
  backArrow: {
    color: '#fff',
    fontSize: 30,
    marginLeft: 30,
  },
  contentContainer: {
    width: '85%',
    alignSelf: 'center',
    paddingBottom: 30,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontFamily: 'BebasNeue',
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 5,
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 30,
    marginLeft: 5,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  countryPickerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#212020',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 48,
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
    backgroundColor: '#212020',
    color: '#fff',
    paddingHorizontal: 14,
    height: 48,
    borderRadius: 8,
    fontSize: 16,
  },
  continueButton: {
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  continueButtonActive: {
    backgroundColor: '#DBC078',
  },
  continueButtonInactive: {
    backgroundColor: '#666666',
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'BebasNeue',
    fontSize: 22,
    marginLeft: 80,
    marginRight: 80,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#222',
    borderRadius: 24,
    padding: 28,
    width: '85%',
    alignItems: 'center',
  },
  modalMessage: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
    marginTop: 4,
  },
  modalButtonConfirm: {
    backgroundColor: '#DBC078',
    marginBottom: 12,
    width: '100%',
  },
  modalButtonCancel: {
    backgroundColor: '#3A3A3C',
    width: '100%',
  },
  modalButtonText: {
    color: '#fff',
    fontFamily: 'BebasNeue',
    fontSize: 20,
  },
  modalHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  flagWrapper: {
    marginRight: 8,
  },
  flag: {
    fontSize: 24,
  },
  modalPhoneText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalButton: {
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    width: '90%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  
});


