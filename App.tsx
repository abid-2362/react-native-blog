/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import IndexScreen from './src/screens/IndexScreen.tsx';

const Stack = createNativeStackNavigator();

function BlogsNavigator(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // backgroundColor: isDarkMode ? Colors.darker : '#FFFFFF',
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
      </SafeAreaView>

      <Stack.Navigator
        initialRouteName={'Blogs'}
        screenOptions={{contentStyle: {backgroundColor: '#FFFFFF'}}}>
        <Stack.Screen
          name="Blogs"
          component={IndexScreen}
          options={{title: 'Blogs'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return <BlogsNavigator />;
};
export default App;
