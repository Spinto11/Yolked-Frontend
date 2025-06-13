import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/navigation'

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '2E_Final'>
}

export default function GetStartedScreen({ navigation }: Props) {
  return (
    <ImageBackground
      source={require('../assets/images/GetStarted.png')} // Replace with your background image
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Image
          source={require('../assets/images/Egg.png')} // Logo top-left
          style={styles.logo}
        />

        <View style={styles.content}>
          <Text style={styles.slogan}>BREAK OUT OF YOUR SHELL.</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('3C_CreateAccount')}
          >
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>

          <Text style={styles.subtext}>Already a Yolked member?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('3A_Login')}>
            <Text style={styles.loginText}>LOG IN</Text>
          </TouchableOpacity>

        </View>
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
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  logo: {
    width: 60,
    height: 60,
    marginTop: 50,
    marginLeft: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 80,
    paddingHorizontal: 30,
  },
  slogan: {
    fontSize: 36,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'BebasNeue',
    letterSpacing: 1,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#DBC078',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 16,
  },
  buttonText: {
    color: '#000',
    fontFamily: 'BebasNeue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subtext: {
    color: '#fff',
    fontSize: 13,
    opacity: 0.8,
    marginBottom: 6,
  },
  loginText: {
    color: '#DBC078',
    fontFamily: 'BebasNeue',
    fontWeight: 'bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
})
