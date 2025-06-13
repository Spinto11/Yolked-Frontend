import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '5G_TrainType'>;
};

const options = [
  'UPPER / LOWER SPLIT',
  'PUSH / PULL / LEGS',
  'BODY PART SPLIT',
  'CHEST / BACK / LEGS / ARMS',
  'FULL BODY',
  'OTHER',
];

export default function TrainTypeScreen({ navigation }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <ImageBackground source={require('../../assets/images/howyoutrain.png')} style={styles.bg}>
      <SafeAreaView style={styles.overlay}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.title}>TELL US ABOUT HOW YOU TRAIN</Text>
        <View style={styles.optionsWrap}>
          {options.map(option => (
            <TouchableOpacity
              key={option}
              style={[styles.option, selected === option && styles.optionSelected]}
              onPress={() => setSelected(option)}
              activeOpacity={0.9}
            >
              <Text style={styles.optionText}>{option}</Text>
              {selected === option && <View style={styles.checkmark} />}
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={[styles.continueButton, selected ? styles.continueButtonEnabled : styles.continueButtonDisabled]}
          disabled={!selected}
          onPress={() => navigation.navigate('5H_TrainFrequency')}
        >
          <Text style={styles.continueText}>CONTINUE</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: 'cover' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.55)', padding: 20 },
  backButton: { marginBottom: 10 },
  backArrow: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginLeft: 20, marginTop: 10 },
  title: { fontSize: 36, color: '#fff', fontFamily: 'BebasNeue', marginVertical: 18, letterSpacing: 0.5, textAlign: 'center' },
  optionsWrap: { marginBottom: 30 },
  option: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.35)', borderRadius: 12, padding: 16, marginBottom: 14, borderWidth: 2, borderColor: 'transparent' },
  optionSelected: { backgroundColor: '#DBC078', borderColor: '#DBC078' },
  optionText: { color: '#fff', fontSize: 18, fontFamily: 'BebasNeue', flex: 1 },
  checkmark: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#fff', borderWidth: 2, borderColor: '#DBC078', marginLeft: 10 },
  continueButton: { width: '100%', borderRadius: 20, alignItems: 'center', paddingVertical: 14, alignSelf: 'center', marginTop: 10 },
  continueButtonEnabled: { backgroundColor: '#DBC078' },
  continueButtonDisabled: { backgroundColor: '#666' },
  continueText: { color: '#222', fontSize: 18, fontWeight: 'bold', fontFamily: 'BebasNeue' },
}); 