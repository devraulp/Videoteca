import AppLoading from 'expo-app-loading';
import BreadNavigator from './navigation/BreadNavigator';
import React from 'react';
import { useFonts } from 'expo-font';

export default function App() {
  const [dataLoaded] = useFonts({
    'open-sans-Condensed': require('./assets/fonts/OpenSansCondensed-Bold.ttf'),
    'open-sans-Condensed-Light': require('./assets/fonts/OpenSansCondensed-Light.ttf'),
    'open-sans-Condensed-Light-Italic': require('./assets/fonts/OpenSansCondensed-LightItalic.ttf'),
  })

  if (!dataLoaded) return <AppLoading />;
  
  return (
    <BreadNavigator />
  );
}