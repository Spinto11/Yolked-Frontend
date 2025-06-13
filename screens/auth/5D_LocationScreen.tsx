import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  Alert,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import * as Location from 'expo-location';

const { width } = Dimensions.get('window');
const BUTTON_WIDTH = width * 0.85;

// Colors
const COLOR_BG = '#000';
const COLOR_OVERLAY = 'rgba(0,0,0,0.45)';
const COLOR_GOLD = '#DBC078';
const COLOR_GRAY = '#3A3A3C';
const COLOR_TEXT = '#fff';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '5D_Location'>;
};

export default function LocationScreen({ navigation }: Props) {
  const handleEnableLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      navigation.navigate('5F_ExperienceLevel');
    } else {
      Alert.alert('Permission Denied', 'Location permission is required to find gyms and partners near you.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/location.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.contentWrapper}>
          <View style={{ flex: 1 }} />
          <View style={styles.centerContent}>
            <Text style={styles.title}>FIND GYMS & PARTNERS{"\n"}NEAR YOU</Text>
            <Text style={styles.subtitle}>
              Yolked uses your location to find nearby gyms, suggest workout partners, and track outdoor activities
            </Text>
            <View style={styles.iconCircle}>
              <Image
                source={require('../../assets/images/location-icon.png')}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.enableButton} onPress={handleEnableLocation}>
              <Text style={styles.enableButtonText}>ENABLE LOCATION</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notNowButton} onPress={() => navigation.navigate('5F_ExperienceLevel')}>
              <Text style={styles.notNowButtonText}>NOT NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BG,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLOR_OVERLAY,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  centerContent: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    color: COLOR_TEXT,
    fontSize: 36,
    fontFamily: 'BebasNeue',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10, // 👈 smaller gap after title
    letterSpacing: 1,
  },
  subtitle: {
    color: COLOR_TEXT,
    fontSize: 14,
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: 200, // 👈 enough space before icon
    fontWeight: '400',
    lineHeight: 20,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: COLOR_BG,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10, // 👈 space between icon and iconSubtitle
  },
  icon: {
    width: 36,
    height: 36,
    tintColor: COLOR_GOLD,
  },
  buttonGroup: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  enableButton: {
    width: BUTTON_WIDTH,
    backgroundColor: COLOR_GOLD,
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 14,
    marginBottom: 16,
  },
  enableButtonText: {
    color: COLOR_BG,
    fontFamily: 'BebasNeue',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  notNowButton: {
    width: BUTTON_WIDTH,
    backgroundColor: COLOR_GRAY,
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 14,
  },
  notNowButtonText: {
    color: COLOR_TEXT,
    fontFamily: 'BebasNeue',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    opacity: 0.8,
  },
}); 