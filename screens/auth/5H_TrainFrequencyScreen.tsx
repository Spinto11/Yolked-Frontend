import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '5H_TrainFrequency'>;
};

const options = [
  '1-3 DAYS',
  '4 DAYS',
  '5 DAYS',
  '6 DAYS',
  '7 DAYS',
];

export default function TrainFrequencyScreen({ navigation }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <ImageBackground source={require('../../assets/images/howoftentrain.png')} style={styles.bg}>
      <SafeAreaView style={styles.overlay}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.title}>HOW OFTEN DO/CAN YOU TRAIN EACH WEEK?</Text>
        <View style={styles.optionsGrid}>
          {options.map((option, idx) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.optionSquare,
                selected === option && styles.optionSelected,
                (idx % 2 === 0) ? { marginRight: 10 } : {},
              ]}
              onPress={() => setSelected(option)}
              activeOpacity={0.9}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={[styles.continueButton, selected ? styles.continueButtonEnabled : styles.continueButtonDisabled]}
          disabled={!selected}
          onPress={() => navigation.navigate('5I_TrainLength')}
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
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  optionSquare: {
    width: '30%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(50,50,50, 0.55)',
    borderRadius: 12,
    marginBottom: 10,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  optionSelected: { backgroundColor: '#DBC078', borderColor: '#DBC078' },
  optionText: { color: '#fff', fontSize: 24, fontFamily: 'BebasNeue', flex: 1, textAlign: 'center', marginTop: 40},
  checkmark: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#fff', borderWidth: 2, borderColor: '#DBC078', marginLeft: 10 },
  continueButton: { width: '90%', borderRadius: 20, alignItems: 'center', paddingVertical: 14, alignSelf: 'center', marginTop: 40},
  continueButtonEnabled: { backgroundColor: '#DBC078' },
  continueButtonDisabled: { backgroundColor: '#666' },
  continueText: { color: '#222', fontSize: 18, fontWeight: 'bold', fontFamily: 'BebasNeue' },
}); 