import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PreloginScreen from './src/onboardingScreens/PreloginScreen';
import colors from './src/utils/colors';
import Navigation from './src/navigation/Navigation';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    // backgroundColor: isDarkMode ? colors.primaryColor : '#fff',
    backgroundColor: colors.white,
    paddingBottom: hp(3),
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={backgroundStyle} edges={['top', 'bottom']}>
        <StatusBar
          // translucent={true}
          backgroundColor={colors.white}
          barStyle={'dark-content'}
        />
        <Navigation />
        {/* <PreloginScreen /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
