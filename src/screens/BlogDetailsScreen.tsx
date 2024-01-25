import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationProp, RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {BlogsParamList} from '../types';
import {useContext} from 'react';
import {Context as BlogContext} from '../context/BlogContext.tsx';
import BlogDetailsScreenHeaderRightButton from '../components/BlogDetailsScreenHeaderRightButton.tsx';

interface IBlogDetailsScreenProps {}

const BlogDetailsScreen = ({}: IBlogDetailsScreenProps) => {
  const route: RouteProp<BlogsParamList, 'BlogDetails'> = useRoute();
  const navigation: NavigationProp<BlogsParamList> = useNavigation();
  const {id} = route.params;

  const {state} = useContext(BlogContext);
  const blogPost = state.find(post => post.id === id);

  if (!blogPost) {
    return <Text style={styles.screen}>Oh!! You landed on wrong page.</Text>;
  }

  navigation.setOptions({
    headerRight: () => {
      return BlogDetailsScreenHeaderRightButton(id);
    },
  });

  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{blogPost?.title}</Text>
      </View>
      <Text style={styles.body}>{blogPost?.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
  },
  titleContainer: {
    borderBottomColor: '#AFAFAF',
    borderBottomWidth: 1,
    paddingBottom: 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
  },
});

export default BlogDetailsScreen;
