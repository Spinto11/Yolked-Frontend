import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types/navigation'

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '3B_ForgotPassword'>
}

export default function ForgotPasswordScreen({ navigation }: Props) {
  const [email, setEmail] = useState('')

  const handleReset = () => {
    console.log('Reset link sent to:', email)
    // TODO: Connect to backend (POST /auth/forgot-password)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>‹</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>FORGOT PASSWORD</Text>
        <Text style={styles.description}>
          Enter the email associated with your account, and we'll email you a reset password link.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetText}>RESET PASSWORD</Text>
        </TouchableOpacity>
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
  content: {
    width: '85%',
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 38,
    color: '#fff',
    fontFamily: 'BebasNeue',
    marginLeft:20,
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    color: '#aaa',
    marginBottom: 25,
    marginLeft:20,
  },
  input: {
    backgroundColor: '#212020',
    color: '#fff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 24,
  },
  resetButton: {
    backgroundColor: '#DBC078',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  resetText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'BebasNeue',
    fontSize: 22,
  },
})
