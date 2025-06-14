import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '5M_SubscriptionChoice'>;
};

const plans = {
  annual: {
    premium: { price: '$149.99', sub: 'per year', per: '$12.49/month', desc: "What's included >" },
    free: { price: '$0', sub: 'per year', per: '$0/month', desc: "What's included >" },
  },
  monthly: {
    premium: { price: '$15.99', sub: 'per month', per: '$191.88/year', desc: "What's included >" },
    free: { price: '$0', sub: 'per month', per: '$0/year', desc: "What's included >" },
  },
};

export default function SubscriptionChoiceScreen({ navigation }: Props) {
  const [billing, setBilling] = useState<'annual' | 'monthly'>('annual');
  const [selected, setSelected] = useState<'premium' | 'free' | null>(null);

  const plan = plans[billing];

  return (
    <ImageBackground source={require('../../assets/images/billed.png')} style={styles.bg}>
      <SafeAreaView style={styles.overlay}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.title}>
          AFTER YOUR <Text style={styles.gold}>YOLKED</Text> PREMIUM TRIAL ENDS YOU HAVE A CHOICE
        </Text>
        <View style={styles.toggleRow}>
          <TouchableOpacity
            style={[styles.toggleBtn, billing === 'annual' && styles.toggleBtnActive]}
            onPress={() => setBilling('annual')}
          >
            <Text style={[styles.toggleText, billing === 'annual' && styles.toggleTextActive]}>Billed annually</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleBtn, billing === 'monthly' && styles.toggleBtnActive]}
            onPress={() => setBilling('monthly')}
          >
            <Text style={[styles.toggleText, billing === 'monthly' && styles.toggleTextActive]}>Billed monthly</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.planCard, selected === 'premium' && styles.planCardSelected, { marginBottom: 18 }]}
          onPress={() => setSelected('premium')}
          activeOpacity={0.9}
        >
          <Text style={styles.planTitle}>YOLKED PREMIUM</Text>
          <Text style={styles.planPrice}>{plan.premium.price} <Text style={styles.planSub}>{plan.premium.sub}</Text></Text>
          <Text style={styles.planPer}>{plan.premium.per}</Text>
          <Text style={styles.planDesc}>{plan.premium.desc}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.planCard, selected === 'free' && styles.planCardSelected]}
          onPress={() => setSelected('free')}
          activeOpacity={0.9}
        >
          <Text style={styles.planTitle}>YOLKED FREE</Text>
          <Text style={styles.planPrice}>{plan.free.price} <Text style={styles.planSub}>{plan.free.sub}</Text></Text>
          <Text style={styles.planPer}>{plan.free.per}</Text>
          <Text style={styles.planDesc}>{plan.free.desc}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.continueButton, selected ? styles.continueButtonEnabled : styles.continueButtonDisabled]}
          disabled={!selected}
          onPress={() => navigation.navigate('MainHub')}
        >
          <Text style={styles.continueText}>CONTINUE</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>You won't be charged today. Cancel anytime before the trial ends. Manage anytime in Settings. You'll be reminded multiple times.</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: 'cover' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.55)', padding: 24 },
  backButton: { marginBottom: 10 },
  backArrow: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginLeft: 10, marginTop: 10 },
  title: { fontSize: 26, color: '#fff', fontFamily: 'BebasNeue', marginTop: 30, marginBottom: 32, letterSpacing: 0.5, textAlign: 'center', marginHorizontal: 20 },
  gold: { color: '#DBC078' },
  toggleRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 32 },
  toggleBtn: { paddingVertical: 8, paddingHorizontal: 22, borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.08)', marginHorizontal: 4 },
  toggleBtnActive: { backgroundColor: '#222' },
  toggleText: { color: '#fff', fontSize: 15, fontFamily: 'BebasNeue', opacity: 0.7 },
  toggleTextActive: { color: '#DBC078', opacity: 1 },
  planCard: {
    backgroundColor: 'rgba(50,50,50,0.55)',
    borderRadius: 18,
    padding: 32,
    marginBottom: 24,
    width: '90%',
    alignSelf: 'center',
    shadowColor: 'transparent',
  },
  planCardSelected: {
    borderWidth: 3,
    borderColor: '#DBC078',
    backgroundColor: 'rgba(219,192,120,0.18)',
    shadowColor: '#DBC078',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
    transform: [{ scale: 1.04 }],
  },
  planTitle: { color: '#fff', fontFamily: 'BebasNeue', fontSize: 20, fontWeight: 'bold', marginBottom: 6, letterSpacing: 0.5 },
  planPrice: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 2 },
  planSub: { color: '#fff', fontSize: 14, opacity: 0.7 },
  planPer: { color: '#fff', fontSize: 13, opacity: 0.7, marginBottom: 2 },
  planDesc: { color: '#fff', fontSize: 13, opacity: 0.8, fontWeight: '400', textDecorationLine: 'underline' },
  continueButton: { width: '100%', borderRadius: 20, alignItems: 'center', paddingVertical: 18, alignSelf: 'center', marginTop: 32, marginBottom: 24 },
  continueButtonEnabled: { backgroundColor: '#DBC078' },
  continueButtonDisabled: { backgroundColor: '#666' },
  continueText: { color: '#222', fontSize: 18, fontWeight: 'bold', fontFamily: 'BebasNeue' },
  footer: { color: '#fff', fontSize: 12, opacity: 0.7, textAlign: 'center', marginTop: 16 },
}); 