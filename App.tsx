import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { NavigationStack } from './src/navigation/Navigation';


const App = () => {
  return (
    <NavigationContainer>
      <NavigationStack/>
    </NavigationContainer>
  )
}

export default App