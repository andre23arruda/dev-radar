import React from 'react'
import Routes from './src/routes'
import AppLoading from 'expo-app-loading'
import { useFonts, Roboto_400Regular,  Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';


export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Routes />
  )
}
