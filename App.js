import { useFonts } from 'expo-font'
import { StyleSheet, View } from 'react-native';

import Profile from './screens/Profile'

export default function App() {
  const [fontsLoaded] = useFonts({
    MetropolisBlack: require("./assets/fonts/Metropolis-Black.otf"),
    MetropolisBold: require("./assets/fonts/Metropolis-Bold.otf"),
    MetropolisExtraBold: require("./assets/fonts/Metropolis-ExtraBold.otf"),
    MetropolisExtraLight: require("./assets/fonts/Metropolis-ExtraLight.otf"),
    MetropolisLight: require("./assets/fonts/Metropolis-Light.otf"),
    MetropolisMedium: require("./assets/fonts/Metropolis-Medium.otf"),
    MetropolisRegular: require("./assets/fonts/Metropolis-Regular.otf"),
    MetropolisSemiBold: require("./assets/fonts/Metropolis-SemiBold.otf"),
    MetropolisThin: require("./assets/fonts/Metropolis-Thin.otf"),
  });

  if (!fontsLoaded) return null

  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
