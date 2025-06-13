import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import { useRef, useState, useEffect } from 'react'
import { RootStackParamList } from '../types/navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, '2BCD_Intro'>
}

const onboardingSlides = [
  {
    key: '1',
    image: require('../assets/images/Cbum.jpg'),
    lines: ['BREAK LIMITS.'],
  },
  {
    key: '2',
    image: require('../assets/images/aaron-brogden.png'),
    lines: ['BREAK LIMITS.', 'BUILD STRENGTH.'],
  },
  {
    key: '3',
    image: require('../assets/images/Cbum2.jpg'),
    lines: ['BREAK LIMITS.', 'BUILD STRENGTH.', 'GET YOLKED.'],
  },
]

const { width } = Dimensions.get('window')


export default function IntroScreen2B({ navigation }: Props) {
  const flatListRef = useRef<FlatList>(null)
  const [index, setIndex] = useState(0)
  const [showNext, setShowNext] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleScroll = (e: any) => {
    const newIndex = Math.round(e.nativeEvent.contentOffset.x / width)
    setIndex(newIndex)
  
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      setShowNext(false)
    }
  
    if (newIndex === onboardingSlides.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setShowNext(true)
      }, 5000)
    }
  }
  
  

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={flatListRef}
        data={onboardingSlides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({ item, index }) => (
          <ImageBackground source={item.image} style={styles.slide}>
            <View style={styles.fullOverlay}>
            {item.lines.map((line: string, i: number) => {
                if (line === 'GET YOLKED.') {
                    return (
                    <Text key={i} style={styles.text}>
                        <Text style={{ color: '#FFFFFF' }}>GET </Text>
                        <Text style={{ color: '#DBC078' }}>YOLKED.</Text>
                    </Text>
                    )
                }

                return (
                    <Text
                    key={i}
                    style={[
                        styles.text,
                        line.includes('YOLKED') && line !== 'GET YOLKED.' && { color: '#DBC078' },
                    ]}
                    >
                    {line}
                    </Text>
                )
            })}

            </View>
          </ImageBackground>
        )}
        keyExtractor={(item) => item.key}
      />

      <View style={styles.dotsContainer}>
        {onboardingSlides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              {
                backgroundColor: i === index ? '#DBC078' : '#FFFFFF',
                opacity: i === index ? 1 : 0.6,
              },
            ]}
          />
        ))}
      </View>
      {showNext && (
        <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.replace('2E_Final')}
        >
            <Text style={styles.nextText}>Next ▸</Text>
        </TouchableOpacity>
        )}


      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.replace('2E_Final')}
      >
        <Text style={styles.skipText}>Skip ▸</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  slide: {
    width,
    height: '100%',
  },
  fullOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    paddingTop: 300,             // pushes content down a bit from the top
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  
  text: {
    fontSize: 38,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'BebasNeue',
    letterSpacing: 1,
    lineHeight: 60,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 24,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  dot: {
    width: 50,
    height: 4,
    borderRadius: 2,
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  skipText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    opacity: 0.8,
  },
  nextButton: {
    position: 'absolute',
    bottom: 300,
    alignSelf: 'center',
  },
  
  nextText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'BebasNeue',
    letterSpacing: 1,
  },
  
  
})
