import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{headerShown: false}} />
    </SafeAreaProvider>
  );
};

export default RootLayout;
