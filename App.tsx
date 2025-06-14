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
import BirthdateScreen from './screens/auth/5B_BirthdateScreen'
import HeightWeightScreen from './screens/auth/5C_HeightWeightScreen'
import LocationScreen from './screens/auth/5D_LocationScreen'
import ExperienceLevelScreen from './screens/auth/5F_ExperienceLevelScreen'
import TrainTypeScreen from './screens/auth/5G_TrainTypeScreen'
import TrainFrequencyScreen from './screens/auth/5H_TrainFrequencyScreen'
import TrainLengthScreen from './screens/auth/5I_TrainLengthScreen'
import GoalScreen from './screens/auth/5J_GoalScreen'
import GymAccessScreen from './screens/auth/5K_GymAccessScreen'
import CoachFeatureScreen from './screens/auth/5L_CoachFeatureScreen'
import SubscriptionTrialScreen from './screens/auth/5M_SubscriptionTrialScreen'
import SubscriptionChoiceScreen from './screens/auth/5M_SubscriptionChoiceScreen'
import MainHub from './screens/main/MainHub'

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
        <Stack.Screen name="5B_Birthdate" component={BirthdateScreen} />
        <Stack.Screen name="5C_HeightWeight" component={HeightWeightScreen} />
        <Stack.Screen name="5D_Location" component={LocationScreen} />
        <Stack.Screen name="5F_ExperienceLevel" component={ExperienceLevelScreen} />
        <Stack.Screen name="5G_TrainType" component={TrainTypeScreen} />
        <Stack.Screen name="5H_TrainFrequency" component={TrainFrequencyScreen} />
        <Stack.Screen name="5I_TrainLength" component={TrainLengthScreen} />
        <Stack.Screen name="5J_Goal" component={GoalScreen} />
        <Stack.Screen name="5K_GymAccess" component={GymAccessScreen} />
        <Stack.Screen name="5L_CoachFeature" component={CoachFeatureScreen} />
        <Stack.Screen name="5M_SubscriptionTrial" component={SubscriptionTrialScreen} />
        <Stack.Screen name="5M_SubscriptionChoice" component={SubscriptionChoiceScreen} />
        <Stack.Screen name="MainHub" component={MainHub} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
