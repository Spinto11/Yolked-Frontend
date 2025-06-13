import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

// Screens
import IntroScreen from './screens/2A_IntroScreen'
import IntroScreen2B from './screens/2BCD_IntroScreen'
import GetStartedScreen from './screens/2E_GetStartedScreen'
import LoginScreen from './screens/auth/3A_loginScreen'
import ForgotPasswordScreen from './screens/auth/3B_ForgotPasswordScreen'
import CreateAccountScreen from './screens/auth/3C_CreateAccountScreen'
import EnterPhoneScreen from './screens/auth/4C_EnterPhoneScreen'
import Onboarding4GScreen from './screens/auth/4G_OnboardingScreen'
import Onboarding4HScreen from './screens/auth/4H_OnboardingScreen'
import GenderScreen from './screens/auth/5A_GenderScreen'

// Navigation Types
import { RootStackParamList } from './types/navigation'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  const [fontsLoaded] = useFonts({
    'BebasNeue': require('./assets/fonts/BebasNeue-Regular.ttf'),
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Screen name="2A_Intro" component={IntroScreen} />
        <Stack.Screen name="2BCD_Intro" component={IntroScreen2B} />
        <Stack.Screen name="2E_Final" component={GetStartedScreen} />
        <Stack.Screen name="3A_Login" component={LoginScreen} />
        <Stack.Screen name="3B_ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="3C_CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="4C_EnterPhone" component={EnterPhoneScreen} />
        <Stack.Screen name="4G_Onboarding" component={Onboarding4GScreen} />
        <Stack.Screen name="4H_Onboarding" component={Onboarding4HScreen} />
        <Stack.Screen name="5A_Gender" component={GenderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
