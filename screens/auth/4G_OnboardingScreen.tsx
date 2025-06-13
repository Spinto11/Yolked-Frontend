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
  navigation: NativeStackNavigationProp<RootStackParamList, '4G_Onboarding'>;
};

export default function Onboarding4GScreen({ navigation }: Props) {
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNext(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/4Gonboarding.png')}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        {/* Dark overlay ON TOP of the image but under UI */}
        <View style={styles.overlay} />

        {/* Main UI */}
        <View style={styles.contentWrapper}>
          {/* Top bar: Back and Skip */}
          <View style={styles.topRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.backArrow}>‹</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('5A_Gender')}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>

          {/* Center content */}
          <View style={styles.centerContent}>
            <Text style={styles.text}>
              GETTING <Text style={styles.highlight}>YOLKED</Text> STARTS{"\n"}
              WITH KNOWING WHAT YOU'RE MADE OF.
            </Text>
          </View>

          {/* Bottom button */}
          {showNext && (
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => navigation.navigate('4H_Onboarding')}
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
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
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
    zIndex: 2,
  },
  backArrow: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  skipText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.8,
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
    fontFamily: 'BebasNeue',
    fontWeight: 'bold',
  },
});
