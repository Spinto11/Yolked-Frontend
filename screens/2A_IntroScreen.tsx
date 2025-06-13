import { useEffect } from 'react'
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native'
import { IntroScreenNavigationProp } from '../types/navigation'

type Props = {
  navigation: IntroScreenNavigationProp
}

export default function IntroScreen({ navigation }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('2BCD_Intro')
    }, 3000) // 3 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <ImageBackground source={require('../assets/images/Mike-Mentzer.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <Image source={require('../assets/Logo/png/Color logo - no background.png')} style={styles.logo} resizeMode="contain" />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 220,
    height: 220,
  },
})
