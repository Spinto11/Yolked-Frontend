import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '4H_Onboarding'>;
};

export default function Onboarding4HScreen({ navigation }: Props) {
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNext(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/gettoknowyou.png')}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        {/* Dark overlay */}
        <View style={styles.overlay} />

        {/* UI on top of overlay */}
        <View style={styles.contentWrapper}>
          {/* Top: back + skip */}
          <View style={styles.topRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.backArrow}>‹</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('5A_Gender')}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>

          {/* Center: text */}
          <View style={styles.centerContent}>
            <Text style={styles.text}>
              LET'S GET TO KNOW <Text style={styles.highlight}>YOU.</Text>
            </Text>
          </View>

          {/* Bottom: next */}
          {showNext && (
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => navigation.navigate('5A_Gender')}
            >
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backArrow: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  skipText: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.8,
    fontWeight: 'bold',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'BebasNeue',
    fontWeight: 'bold',
    letterSpacing: 1,
    lineHeight: 38,
  },
  highlight: {
    color: '#DBC078',
  },
  nextButton: {
    alignSelf: 'center',
    backgroundColor: '#DBC078',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 36,
  },
  nextText: {
    color: '#111',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'BebasNeue',
  },
});
