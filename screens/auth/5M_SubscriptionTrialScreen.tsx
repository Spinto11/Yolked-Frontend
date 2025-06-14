import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { FontAwesome5 } from '@expo/vector-icons';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '5M_SubscriptionTrial'>;
};

export default function SubscriptionTrialScreen({ navigation }: Props) {
  return (
    <ImageBackground source={require('../../assets/images/freetrial.png')} style={styles.bg}>
      <SafeAreaView style={styles.overlay}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.title}>
          DO MORE WITH <Text style={styles.gold}>YOLKED</Text> PREMIUM. TRY OUR 7 DAY FREE TRIAL.
        </Text>
        <View style={styles.featureRow}>
          <FontAwesome5 name="dumbbell" size={36} color="#DBC078" style={styles.icon} />
          <View style={styles.featureTextWrap}>
            <Text style={styles.featureTitle}>AI COACHING</Text>
            <Text style={styles.featureDesc}>Get customized workouts, expert guidance, and real-time adjustments based on your performance.</Text>
          </View>
        </View>
        <View style={styles.featureRow}>
          <FontAwesome5 name="users" size={36} color="#DBC078" style={styles.icon} />
          <View style={styles.featureTextWrap}>
            <Text style={styles.featureTitle}>CONNECT WITH YOLKED COMMUNITY</Text>
            <Text style={styles.featureDesc}>Find gym partners, match with verified coaches, and build your fitness network.</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.trialButton}
          onPress={() => navigation.navigate('5M_SubscriptionChoice')}
        >
          <Text style={styles.trialButtonText}>START 7 DAY FREE TRIAL</Text>
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
  title: { fontSize: 28, color: '#fff', fontFamily: 'BebasNeue', marginTop: 30, marginBottom: 32, letterSpacing: 0.5, textAlign: 'center', marginHorizontal: 20 },
  gold: { color: '#DBC078' },
  featureRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 32, padding: 12, borderRadius: 14, backgroundColor: 'rgba(50,50,50,0.35)' },
  icon: { width: 30, height: 30, marginRight: 24, marginTop: 10, marginLeft: 10 },
  featureTextWrap: { flex: 1 },
  featureTitle: { color: '#fff', fontFamily: 'BebasNeue', fontSize: 16, fontWeight: 'bold', marginBottom: 2, marginLeft: 10 },
  featureDesc: { color: '#fff', fontSize: 13, opacity: 0.8, fontWeight: '400', lineHeight: 18, marginLeft: 10 },
  trialButton: { width: '90%', borderRadius: 20, alignItems: 'center', paddingVertical: 18, alignSelf: 'center', marginTop: 40, marginBottom: 24, backgroundColor: '#DBC078' },
  trialButtonText: { color: '#222', fontSize: 18, fontWeight: 'bold', fontFamily: 'BebasNeue' },
  footer: { color: '#fff', fontSize: 12, opacity: 0.7, textAlign: 'center', marginTop: 24 },
}); 