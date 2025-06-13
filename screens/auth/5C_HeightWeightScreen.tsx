import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Switch,
  Platform,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { Picker } from '@react-native-picker/picker';

const { width } = Dimensions.get('window');
const BUTTON_WIDTH = width * 0.85;
const COLOR_BG = '#111';
const COLOR_CONTINUE_ENABLED = '#DBC078';
const COLOR_CONTINUE_DISABLED = '#666';
const COLOR_TEXT = '#fff';

const HEIGHT_FEET = Array.from({ length: 7 }, (_, i) => 2 + i); // 2-8 ft
const HEIGHT_INCHES = Array.from({ length: 12 }, (_, i) => i); // 0-11 in
const WEIGHT_LB = Array.from({ length: 106 }, (_, i) => 100 + i); // 100-205 lb
const HEIGHT_CM = Array.from({ length: 101 }, (_, i) => 100 + i); // 100-200 cm
const WEIGHT_KG = Array.from({ length: 101 }, (_, i) => 40 + i); // 40-140 kg


type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '5C_HeightWeight'>;
};

export default function HeightWeightScreen({ navigation }: Props) {
  const [isMetric, setIsMetric] = useState(false);
  // Imperial
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(6);
  const [weightLb, setWeightLb] = useState(160);
  // Metric
  const [heightCm, setHeightCm] = useState(170);
  const [weightKg, setWeightKg] = useState(70);

  const canContinue = isMetric
    ? heightCm && weightKg
    : feet && inches >= 0 && weightLb;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        {/* Back Arrow */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        {/* Title and Subtitle */}
        <Text style={styles.title}>HEIGHT & WEIGHT</Text>
        <Text style={styles.subtitle}>
          This will be used to help us customize your experience in the best way possible.
        </Text>

        {/* Toggle */}
        <View style={styles.toggleRow}>
          <Text style={[styles.toggleLabel, !isMetric && styles.toggleLabelActive]}>IMPERIAL</Text>
          <Switch
            value={isMetric}
            onValueChange={setIsMetric}
            trackColor={{ false: '#444', true: '#DBC078' }}
            thumbColor={isMetric ? '#fff' : '#fff'}
          />
          <Text style={[styles.toggleLabel, isMetric && styles.toggleLabelActive]}>METRIC</Text>
        </View>

        {/* Pickers */}
        <View style={styles.pickersRow}>
          {/* Height Picker */}
          <View style={styles.pickerCol}>
            <Text style={styles.pickerTitle}>Height</Text>
            {isMetric ? (
              <Picker
                selectedValue={heightCm}
                style={styles.picker}
                itemStyle={styles.pickerItem}
                onValueChange={setHeightCm}
              >
                {HEIGHT_CM.map(cm => (
                  <Picker.Item key={cm} label={`${cm} cm`} value={cm} />
                ))}
              </Picker>
            ) : (
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Picker
                  selectedValue={feet}
                  style={[styles.picker, { width: 80 }]}
                  itemStyle={styles.pickerItem}
                  onValueChange={setFeet}
                >
                  {HEIGHT_FEET.map(ft => (
                    <Picker.Item key={ft} label={`${ft} ft`} value={ft} />
                  ))}
                </Picker>
                <Picker
                  selectedValue={inches}
                  style={[styles.picker, { width: 80 }]}
                  itemStyle={styles.pickerItem}
                  onValueChange={setInches}
                >
                  {HEIGHT_INCHES.map(inc => (
                    <Picker.Item key={inc} label={`${inc} in`} value={inc} />
                  ))}
                </Picker>
              </View>
            )}
          </View>
          {/* Weight Picker */}
          <View style={styles.pickerCol}>
            <Text style={styles.pickerTitle}>Weight</Text>
            {isMetric ? (
              <Picker
                selectedValue={weightKg}
                style={styles.picker}
                itemStyle={styles.pickerItem}
                onValueChange={setWeightKg}
              >
                {WEIGHT_KG.map(kg => (
                  <Picker.Item key={kg} label={`${kg} kg`} value={kg} />
                ))}
              </Picker>
            ) : (
              <Picker
                selectedValue={weightLb}
                style={styles.picker}
                itemStyle={styles.pickerItem}
                onValueChange={setWeightLb}
              >
                {WEIGHT_LB.map(lb => (
                  <Picker.Item key={lb} label={`${lb} lb`} value={lb} />
                ))}
              </Picker>
            )}
          </View>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={[
            styles.continueButton,
            canContinue ? styles.continueButtonEnabled : styles.continueButtonDisabled,
          ]}
          disabled={!canContinue}
          onPress={() => {
            navigation.navigate('5D_Location');
          }}
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
    backgroundColor: COLOR_BG,
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
    color: COLOR_TEXT,
    fontSize: 28,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    color: COLOR_TEXT,
    fontFamily: 'BebasNeue',
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 5,
    letterSpacing: 0.5,
  },
  subtitle: {
    color: COLOR_TEXT,
    fontSize: 13,
    opacity: 0.8,
    marginBottom: 32,
    marginRight: 15,
    marginLeft: 5,
    lineHeight: 18,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  toggleLabel: {
    color: '#fff',
    fontFamily: 'BebasNeue',
    fontSize: 16,
    opacity: 0.5,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  toggleLabelActive: {
    opacity: 1,
    color: '#DBC078',
  },
  pickersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
    marginTop: 10,
  },
  pickerCol: {
    flex: 1,
    alignItems: 'center',
  },
  pickerTitle: {
    color: '#fff',
    fontFamily: 'BebasNeue',
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  picker: {
    width: 120,
    height: Platform.OS === 'ios' ? 120 : 50,
    color: '#fff',
    backgroundColor: '#232323',
    borderRadius: 10,
    marginBottom: 0,
  },
  pickerItem: {
    color: '#fff',
    fontFamily: 'BebasNeue',
    fontSize: 18,
    height: 120,
  },
  continueButton: {
    width: BUTTON_WIDTH,
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 14,
    alignSelf: 'center',
    marginTop: 30,
  },
  continueButtonEnabled: {
    backgroundColor: COLOR_CONTINUE_ENABLED,
  },
  continueButtonDisabled: {
    backgroundColor: COLOR_CONTINUE_DISABLED,
  },
  continueText: {
    color: '#000',
    fontFamily: 'BebasNeue',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
}); 