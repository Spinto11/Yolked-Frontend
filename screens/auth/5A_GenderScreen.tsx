import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
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
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>‹</Text>
      </TouchableOpacity>
      <Text style={styles.title}>WHAT'S YOUR GENDER?</Text>
      <Text style={styles.subtitle}>This will be used to help us customize your experience in the best way possible.</Text>
      <View style={{ marginTop: 32, marginBottom: 32 }}>
        {options.map(opt => (
          <TouchableOpacity
            key={opt.value}
            style={[styles.option, selected === opt.value ? styles.optionSelected : styles.optionUnselected]}
            onPress={() => setSelected(opt.value)}
          >
            <Text style={styles.optionText}>{opt.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={[styles.continueButton, !selected && styles.continueButtonDisabled]}
        disabled={!selected}
        onPress={() => {/* TODO: navigate to next step */}}
      >
        <Text style={styles.continueText}>CONTINUE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 24,
  },
  backButton: {
    marginBottom: 10,
  },
  backArrow: {
    color: '#fff',
    fontSize: 30,
    marginLeft: 10,
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
    marginBottom: 10,
    marginLeft: 5,
    opacity: 0.8,
  },
  option: {
    borderRadius: 8,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 18,
  },
  optionSelected: {
    backgroundColor: '#DBC078',
  },
  optionUnselected: {
    backgroundColor: '#333',
  },
  optionText: {
    color: '#fff',
    fontFamily: 'BebasNeue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#DBC078',
    borderRadius: 30,
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 20,
  },
  continueButtonDisabled: {
    backgroundColor: '#666',
  },
  continueText: {
    color: '#fff',
    fontFamily: 'BebasNeue',
    fontSize: 20,
    fontWeight: 'bold',
  },
}); 