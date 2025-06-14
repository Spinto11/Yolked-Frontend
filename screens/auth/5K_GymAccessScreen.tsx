import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '5K_GymAccess'>;
};

const options = [
  {
    key: 'commercial',
    title: 'COMMERCIAL GYM',
    desc: 'Extensive equipment, machines, cardio equipment, and free-weights.',
    image: require('../../assets/images/commercial_gym.png'),
  },
  {
    key: 'university',
    title: 'UNIVERSITY GYM',
    desc: 'A filled setup with machines, free weights, and cardio equipment.',
    image: require('../../assets/images/university_gym.png'),
  },
  {
    key: 'small',
    title: 'SMALL GYM',
    desc: 'Smaller gym, limited equipment.',
    image: require('../../assets/images/small_gym.png'),
  },
  {
    key: 'garage',
    title: 'GARAGE GYM',
    desc: 'Gym setup at home: squat rack, barbell, and dumbbells.',
    image: require('../../assets/images/garage_gym.png'),
  },
];

export default function GymAccessScreen({ navigation }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (key: string) => {
    if (selected.includes(key)) {
      setSelected(selected.filter(item => item !== key));
    } else {
      setSelected([...selected, key]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>WHAT EQUIPMENT DO YOU{"\n"}HAVE ACCESS TO?</Text>
      <FlatList
        data={options}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardWrap}
            onPress={() => toggleOption(item.key)}
            activeOpacity={0.9}
          >
            <ImageBackground source={item.image} style={styles.cardBg} imageStyle={styles.cardImg}>
              <View style={styles.cardOverlay} />
              <View style={styles.cardTextWrap}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDesc}>{item.desc}</Text>
                {selected.includes(item.key) && <Text style={styles.checkmark}>✓</Text>}
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={[styles.continueButton, selected.length > 0 ? styles.continueButtonEnabled : styles.continueButtonDisabled]}
        disabled={selected.length === 0}
        onPress={() => navigation.navigate('5L_CoachFeature')}
      >
        <Text style={styles.continueText}>CONTINUE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', paddingHorizontal: 16 },
  title: {
    fontSize: 32,
    color: '#fff',
    fontFamily: 'BebasNeue',
    marginTop: 18,
    marginBottom: 18,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  listContent: { paddingBottom: 20 },
  cardWrap: { marginBottom: 18, borderRadius: 16, overflow: 'hidden' },
  cardBg: { height: 180, justifyContent: 'flex-end' },
  cardImg: { borderRadius: 16 },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
    borderRadius: 16,
  },
  cardTextWrap: { padding: 24, position: 'relative' },
  cardTitle: {
    color: '#fff',
    fontFamily: 'BebasNeue',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  cardDesc: {
    color: '#fff',
    fontSize: 13,
    opacity: 0.8,
    fontWeight: '400',
  },
  checkmark: {
    position: 'absolute',
    right: 12,
    top: 10,
    color: '#fff',
    fontSize: 24,
    backgroundColor: '#DBC078',
    borderRadius: 12,
    width: 28,
    height: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
    overflow: 'hidden',
  },
  continueButton: {
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 14,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  continueButtonEnabled: { backgroundColor: '#DBC078' },
  continueButtonDisabled: { backgroundColor: '#666' },
  continueText: {
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'BebasNeue',
  },
}); 