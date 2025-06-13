import React, { useState, useRef } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView, 
  Animated,
  Easing
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types/navigation'



type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '3A_Login'>
}

export default function LoginScreen({ navigation }: Props) {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const eyeOpacity = useRef(new Animated.Value(1)).current

const togglePassword = () => {
  Animated.sequence([
    Animated.timing(eyeOpacity, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.linear,
    }),
    Animated.timing(eyeOpacity, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.linear,
    }),
  ]).start(() => {
    setShowPassword(prev => !prev)
  })
}

  

  const handleLogin = () => {
    console.log('Logging in with:', identifier, password)
    // TODO: Connect with backend
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.navigate('2E_Final')}
      >
        <Text style={styles.backArrow}>‹</Text>
      </TouchableOpacity>
  
      <Text style={styles.title}>LOG IN</Text>
      <Text style={styles.subtitle}>Please sign in with your yolked account.</Text>
      <Text style={styles.createLink}>
        New to yolked? <Text style={styles.createText} onPress={() => navigation.navigate('3C_CreateAccount')}>Create an account</Text>
      </Text>
  
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username or Email"
          placeholderTextColor="#aaa"
          value={identifier}
          onChangeText={setIdentifier}
          autoCapitalize="none"
        />
  
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity style={styles.eyeIcon} onPress={togglePassword}>
            <Animated.View style={{ opacity: eyeOpacity }}>
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={20}
                color="#aaa"
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
  
        <TouchableOpacity onPress={() => navigation.navigate('3B_ForgotPassword')}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.faceIdButton}>
          <Image
            source={require('../../assets/images/faceid.png')}
            style={{ width: 22, height: 22, marginRight: 8 }}
          />
          <Text style={styles.faceIdText}>Login with Face ID</Text>
        </TouchableOpacity>
      </View>
  
      <Text style={styles.orText}>or log in with</Text>
  
      <View style={styles.socialIcons}>
        <Image source={require('../../assets/images/google.png')} style={styles.icon} />
        <Image source={require('../../assets/images/facebook.png')} style={styles.icon} />
        <Image source={require('../../assets/images/apple.png')} style={styles.icon} />
      </View>
    </SafeAreaView>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 24,
  },
  backButton: {
    marginBottom: 10,
  },
  backArrow: {
    color: '#fff',
    fontSize: 30,
    marginLeft:30,
  },
  title: {
    fontSize: 38,
    color: '#fff',
    fontFamily: 'BebasNeue',
    marginTop: 15,
    marginLeft:55,
  },
  subtitle: {
    fontSize: 13,
    color: '#aaa',
    marginBottom: 4,
    marginLeft:55,
  },
  
  createLink: {
    fontSize: 13,
    marginBottom: 30,
    color: '#aaa',
    marginLeft:54,
  },
  createText: {
    color: '#DBC078',
    textDecorationLine: 'underline',
  },
  input: {
    backgroundColor: '#212020',
    color: '#fff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 26,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 14,
    top: 16,
  },
  forgotPassword: {
    color: '#DBC078',
    fontSize: 13,
    textAlign: 'right',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#DBC078',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  loginButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'BebasNeue',
    fontSize: 22,
  },
  faceIdButton: {
    flexDirection: 'row',
    backgroundColor: '#3A3A3C',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  faceIdText: {
    color: '#fff',
    fontSize: 14,
  },
  orText: {
    color: '#aaa',
    textAlign: 'center',
    fontSize: 13,
    marginBottom: 25,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 80,
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '85%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  
})
