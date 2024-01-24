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
import {Provider as BlogProvider} from './src/context/BlogContext.tsx';
import BlogDetailsScreen from './src/screens/BlogDetailsScreen.tsx';
import CreateBlogScreen from './src/screens/CreateBlogScreen.tsx';
import IndexScreenHeaderRight from './src/components/IndexScreenHeaderRight.tsx';

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

      <Stack.Navigator initialRouteName={'Blogs'} screenOptions={{contentStyle: {backgroundColor: '#FFFFFF'}}}>
        <Stack.Screen
          name="Blogs"
          component={IndexScreen}
          options={{title: 'Blogs', headerRight: IndexScreenHeaderRight}}
        />
        <Stack.Screen name="BlogDetails" component={BlogDetailsScreen} options={{title: 'Blog'}} />
        <Stack.Screen name="CreateBlog" component={CreateBlogScreen} options={{title: 'New Blog'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <BlogProvider>
      <BlogsNavigator />
    </BlogProvider>
  );
};
export default App;
