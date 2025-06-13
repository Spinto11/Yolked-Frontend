import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '5A_Gender'>;
};

const options = [
  { label: 'MALE', value: 'male' },
  { label: 'FEMALE', value: 'female' },
  { label: 'OTHER', value: 'other' },
];

export default function GenderScreen({ navigation }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        {/* Back Arrow */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>WHAT'S YOUR GENDER?</Text>
        <Text style={styles.subtitle}>
          This will be used to help us customize your experience in the best way possible.
        </Text>

        {/* Gender Options */}
        <View style={styles.optionsContainer}>
          {options.map(opt => (
            <TouchableOpacity
              key={opt.value}
              style={[
                styles.option,
                selected === opt.value
                  ? styles.optionSelected
                  : styles.optionUnselected,
              ]}
              onPress={() => setSelected(opt.value)}
              activeOpacity={0.85}
            >
              <Text
                style={[
                  styles.optionText,
                  selected === opt.value && styles.optionTextSelected,
                ]}
              >
                {opt.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={[
            styles.continueButton,
            selected
              ? styles.continueButtonEnabled
              : styles.continueButtonDisabled,
          ]}
          disabled={!selected}
          onPress={() => navigation.navigate('5B_Birthdate')}
        >
          <Text style={styles.continueText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 10,
    alignItems: 'flex-start',
  },
  backButton: {
    marginBottom: 10,
  },
  backArrow: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontFamily: 'BebasNeue',
    marginTop: 10,
    marginBottom: 8,
    letterSpacing: 0.5,
    marginLeft: 35,
  },
  subtitle: {
    color: '#fff',
    fontSize: 13,
    opacity: 0.8,
    marginBottom: 32,
    lineHeight: 18,
    marginRight: 15,
    marginLeft: 35,
  },
  optionsContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 180,
  },
  option: {
    width: '85%',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 50,
    justifyContent: 'center',
  },
  optionSelected: {
    backgroundColor: '#DBC078',
  },
  optionUnselected: {
    backgroundColor: '#3A3A3C',
  },
  optionText: {
    color: '#fff',
    fontFamily: 'BebasNeue',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  optionTextSelected: {
    color: '#000',
  },
  continueButton: {
    width: '85%',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 14,
    alignSelf: 'center',
  },
  continueButtonEnabled: {
    backgroundColor: '#DBC078',
  },
  continueButtonDisabled: {
    backgroundColor: '#666',
  },
  continueText: {
    color: '#000',
    fontFamily: 'BebasNeue',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
