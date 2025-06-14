import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

const options = [
  {
    key: 'full',
    title: 'FULL COACHING',
    desc: 'Great for new gym-goers, auto-generates weekly plans, lets you approve and customize every workout, and more.',
  },
  {
    key: 'guided',
    title: 'GUIDED COACHING',
    desc: 'Learns your training style over time, then offers personalized planning based on your routine.',
  },
  {
    key: 'none',
    title: 'NO COACHING',
    desc: 'Workout tracking only, no guidance, just full control. You can change this anytime.',
  },
];

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '5L_CoachFeature'>;
};

export default function CoachFeatureScreen({ navigation }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <ImageBackground source={require('../../assets/images/guided.png')} style={styles.bg}>
      <SafeAreaView style={styles.overlay}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.title}>
          HOW WOULD YOU LIKE <Text style={styles.gold}>YOLKED</Text> TO GUIDE YOU?
        </Text>
        <Text style={styles.subtitle}>
          Our AI coach from your scheduling patterns and preferences. The more you use Yolked, the better it adapts to you.
        </Text>
        <View style={styles.optionsWrap}>
          {options.map(option => (
            <TouchableOpacity
              key={option.key}
              style={[styles.card, selected === option.key && styles.cardSelected]}
              onPress={() => setSelected(option.key)}
              activeOpacity={0.9}
            >
              <Text style={styles.cardTitle}>{option.title}</Text>
              <Text style={styles.cardDesc}>{option.desc}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={[styles.continueButton, selected ? styles.continueButtonEnabled : styles.continueButtonDisabled]}
          disabled={!selected}
          onPress={() => navigation.navigate('5M_SubscriptionTrial')}
        >
          <Text style={styles.continueText}>CONTINUE</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>You can update or limit this at any time in your <Text style={styles.underline}>preferences</Text>.</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: 'cover' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.55)', padding: 20 },
  backButton: { marginBottom: 10 },
  backArrow: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginLeft: 10, marginTop: 10 },
  title: { fontSize: 32, color: '#fff', fontFamily: 'BebasNeue', marginTop: 10, marginBottom: 8, letterSpacing: 0.5, textAlign: 'center' },
  gold: { color: '#DBC078' },
  subtitle: { color: '#fff', fontSize: 14, opacity: 0.8, marginBottom: 24, textAlign: 'center', lineHeight: 20 },
  optionsWrap: { marginBottom: 30 },
  card: { width: '90%', alignSelf: 'center', backgroundColor: 'rgba(50,50,50,0.55)', borderRadius: 18, padding: 22, marginBottom: 18 },
  cardSelected: { borderWidth: 2, borderColor: '#DBC078', backgroundColor: '#DBC078'},
  cardTitle: { color: '#fff', fontFamily: 'BebasNeue', fontSize: 20, fontWeight: 'bold', marginBottom: 6 },
  cardDesc: { color: '#fff', fontSize: 14, opacity: 0.85, fontWeight: '400' },
  continueButton: { width: '100%', borderRadius: 20, alignItems: 'center', paddingVertical: 14, alignSelf: 'center', marginTop: 10 },
  continueButtonEnabled: { backgroundColor: '#DBC078' },
  continueButtonDisabled: { backgroundColor: '#666' },
  continueText: { color: '#222', fontSize: 18, fontWeight: 'bold', fontFamily: 'BebasNeue' },
  footer: { color: '#fff', fontSize: 12, opacity: 0.7, textAlign: 'center', marginTop: 18 },
  underline: { textDecorationLine: 'underline' },
}); 