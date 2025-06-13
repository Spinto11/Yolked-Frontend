import React, { useState, useRef } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Animated,
  Easing,
  ScrollView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types/navigation'

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '3C_CreateAccount'>
}

export default function CreateAccountScreen({ navigation }: Props) {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const eyeOpacity = useRef(new Animated.Value(1)).current

  const isFormComplete = () => {
    return email.trim() !== '' && 
           firstName.trim() !== '' && 
           lastName.trim() !== '' && 
           username.trim() !== '' && 
           password.trim() !== ''
  }

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

  const handleContinue = () => {
    if (isFormComplete()) {
      navigation.navigate('4C_EnterPhone');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>‹</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.formContainer}>
        <Text style={styles.title}>CREATE AN ACCOUNT</Text>

        <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="First name"
          placeholderTextColor="#aaa"
          value={firstName}
          onChangeText={setFirstName}
        />

        <TextInput
          style={styles.input}
          placeholder="Last name"
          placeholderTextColor="#aaa"
          value={lastName}
          onChangeText={setLastName}
        />

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
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

        <Text style={styles.passwordHint}>
          Password must be 8 to 25 characters and include numbers and letters.
        </Text>

        <TouchableOpacity 
          style={[
            styles.continueButton,
            isFormComplete() ? styles.continueButtonActive : styles.continueButtonInactive
          ]} 
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>

        <Text style={styles.disclaimer}>
          By clicking continue, you agree to our <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>.
        </Text>
      </ScrollView>
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
    marginLeft: 30,
  },
  formContainer: {
    width: '85%',
    alignSelf: 'center',
    paddingBottom: 30,
  },
  title: {
    fontSize: 38,
    color: '#fff',
    fontFamily: 'BebasNeue',
    marginTop: 15,
    marginBottom: 30,
    marginLeft: 15,
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
  passwordHint: {
    color: '#888',
    fontSize: 12,
    marginBottom: 20,
  },
  continueButton: {
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  continueButtonActive: {
    backgroundColor: '#DBC078',
  },
  continueButtonInactive: {
    backgroundColor: '#666666',
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'BebasNeue',
    fontSize: 22,
  },
  disclaimer: {
    color: '#888',
    fontSize: 12,
    textAlign: 'center',
  },
  link: {
    textDecorationLine: 'underline',
  },
})
