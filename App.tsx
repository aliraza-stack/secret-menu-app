import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MenusScreen from './src/screens/menus/MenusScreen';
import Menu from './src/components/MenuPost';
import { Headline, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
      <PaperProvider>
        <SafeAreaView>
          <Headline>Menu Screen</Headline>
          <View>
            <MenusScreen />
          </View>
        </SafeAreaView>
      </PaperProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
