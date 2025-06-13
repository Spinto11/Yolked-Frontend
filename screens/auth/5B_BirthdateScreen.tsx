import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Platform,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import DateTimePicker from '@react-native-community/datetimepicker';

const { width } = Dimensions.get('window');
const BUTTON_WIDTH = width * 0.85;
const COLOR_BG = '#000';
const COLOR_CONTINUE_ENABLED = '#DBC078';
const COLOR_CONTINUE_DISABLED = '#666';
const COLOR_TEXT = '#fff';

// Calculate the max date for 14 years old
const today = new Date();
const maxDate = new Date(today.getFullYear() - 14, today.getMonth(), today.getDate());

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '5B_Birthdate'>;
};

export default function BirthdateScreen({ navigation }: Props) {
  const [date, setDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    setShowPicker(Platform.OS === 'ios');
    if (selectedDate) setDate(selectedDate);
  };

  const isOldEnough = date && date <= maxDate;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        {/* Back Arrow */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        {/* Title and Subtitle */}
        <Text style={styles.title}>WHEN WERE YOU BORN?</Text>
        <Text style={styles.subtitle}>
          This will be used to help us customize your experience in the best way possible.
        </Text>

        {/* Date Picker */}
        <TouchableOpacity
          style={styles.pickerButton}
          onPress={() => setShowPicker(true)}
          activeOpacity={0.85}
        >
          <Text style={styles.pickerText}>
            {date ? date.toLocaleDateString() : 'Select your birthdate'}
          </Text>
        </TouchableOpacity>
        {showPicker && (
          <DateTimePicker
            value={date || new Date(2000, 0, 1)}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onChange}
            maximumDate={maxDate}
            minimumDate={new Date(1900, 0, 1)}
            textColor={COLOR_TEXT}
            style={styles.datePicker}
          />
        )}

        {/* Continue Button */}
        <TouchableOpacity
          style={[
            styles.continueButton,
            isOldEnough ? styles.continueButtonEnabled : styles.continueButtonDisabled,
          ]}
          disabled={!isOldEnough}
          onPress={() => {
            navigation.navigate('5C_HeightWeight');
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
  inner: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
  },
  backArrow: {
    color: COLOR_TEXT,
    fontSize: 28,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    color: COLOR_TEXT,
    fontFamily: 'BebasNeue',
    marginTop: 10,
    marginBottom: 8,
    alignSelf: 'flex-start',
    letterSpacing: 0.5,
  },
  subtitle: {
    color: COLOR_TEXT,
    fontSize: 13,
    opacity: 0.8,
    marginBottom: 30,
    alignSelf: 'flex-start',
    marginRight: 15,
    lineHeight: 18,
  },
  pickerButton: {
    width: BUTTON_WIDTH,
    borderRadius: 10,
    backgroundColor: '#232323',
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 10,
  },
  pickerText: {
    color: COLOR_TEXT,
    fontFamily: 'BebasNeue',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    opacity: 0.8,
  },
  datePicker: {
    width: BUTTON_WIDTH,
    alignSelf: 'center',
    backgroundColor: '#232323',
    borderRadius: 10,
    marginBottom: 40,
  },
  continueButton: {
    width: BUTTON_WIDTH,
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 14,
    marginTop: 10,
    marginBottom: 10,
  },
  continueButtonEnabled: {
    backgroundColor: COLOR_CONTINUE_ENABLED,
  },
  continueButtonDisabled: {
    backgroundColor: COLOR_CONTINUE_DISABLED,
  },
  continueText: {
    color: COLOR_BG,
    fontFamily: 'BebasNeue',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
