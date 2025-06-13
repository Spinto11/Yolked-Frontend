import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

const { width } = Dimensions.get('window');
const CARD_HEIGHT = 120;
const CARD_RADIUS = 18;
const BUTTON_WIDTH = width * 0.85;
const COLOR_BG = '#000';
const COLOR_CONTINUE_ENABLED = '#DBC078';
const COLOR_CONTINUE_DISABLED = '#666';
const COLOR_TEXT = '#fff';

const options = [
  {
    key: 'beginner',
    title: 'COMPLETE BEGINNER',
    desc: 'New to the gym, or returning after a long break.',
    image: require('../../assets/images/complete beginner.png'),
  },
  {
    key: 'novice',
    title: 'NOVICE',
    desc: 'Some experience but training for less than 1 year or inconsistently.',
    image: require('../../assets/images/novice.png'),
  },
  {
    key: 'intermediate',
    title: 'INTERMEDIATE',
    desc: 'Consistent training for 1-3 years with good knowledge.',
    image: require('../../assets/images/intermediate.png'),
  },
  {
    key: 'advanced',
    title: 'ADVANCED',
    desc: 'Active training for 3+ years.',
    image: require('../../assets/images/advanced.png'),
  },
  {
    key: 'professional',
    title: 'PROFESSIONAL',
    desc: 'Competitive athlete. Broad-based knowledge.',
    image: require('../../assets/images/professional.png'),
  },
];

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '5F_ExperienceLevel'>;
};

export default function ExperienceLevelScreen({ navigation }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.title}>WHAT'S YOUR FITNESS LEVEL?</Text>
        <Text style={styles.subtitle}>We'll tailor your experience accordingly</Text>
        <FlatList
          data={options}
          keyExtractor={item => item.key}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.card, selected === item.key && styles.cardSelected]}
              onPress={() => setSelected(item.key)}
              activeOpacity={0.9}
            >
              <ImageBackground
                source={item.image}
                style={styles.cardBg}
                imageStyle={{ borderRadius: CARD_RADIUS }}
              >
                <View style={styles.cardOverlay} />
                <View style={styles.cardTextWrap}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardDesc}>{item.desc}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          style={[
            styles.continueButton,
            selected ? styles.continueButtonEnabled : styles.continueButtonDisabled,
          ]}
          disabled={!selected}
          onPress={() => {
            // TODO: Navigate to next step
            navigation.navigate('5G_TrainType');
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
    paddingHorizontal: 20,
    paddingTop: 10,
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
    fontSize: 36,
    color: COLOR_TEXT,
    fontFamily: 'BebasNeue',
    marginTop: 10,
    marginBottom: 8,
    alignSelf: 'flex-start',
    letterSpacing: 0.5,
    marginLeft: 10,
  },
  subtitle: {
    color: COLOR_TEXT,
    fontSize: 13,
    opacity: 0.8,
    marginBottom: 18,
    alignSelf: 'flex-start',
    marginLeft: 10,
    lineHeight: 18,
  },
  listContent: {
    paddingBottom: 30,
  },
  card: {
    height: CARD_HEIGHT,
    borderRadius: CARD_RADIUS,
    marginBottom: 18,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  cardSelected: {
    borderColor: COLOR_CONTINUE_ENABLED,
  },
  cardBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
    borderRadius: CARD_RADIUS,
  },
  cardTextWrap: {
    padding: 16,
  },
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
  continueButton: {
    width: BUTTON_WIDTH,
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 14,
    alignSelf: 'center',
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