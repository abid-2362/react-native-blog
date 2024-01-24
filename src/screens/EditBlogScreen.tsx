import * as React from 'react';
import {StyleSheet, View, Text, TextInput, Button, ScrollView} from 'react-native';
import {useContext, useEffect, useState} from 'react';
import {Context as BlogContext} from '../context/BlogContext.tsx';
import {NavigationProp, RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {BlogsParamList} from '../types';
import BlogDetailsScreenHeaderRightButton from '../components/BlogDetailsScreenHeaderRightButton.tsx';

interface IEditBlogScreenProps {}

const EditBlogScreen = ({}: IEditBlogScreenProps) => {
  const navigation: NavigationProp<BlogsParamList> = useNavigation();
  const route: RouteProp<BlogsParamList, 'EditBlog'> = useRoute();
  const {state, editBlogPost} = useContext(BlogContext);
  const {id} = route.params;
  const post = state.find(blog => blog.id === id);

  const [title, setTitle] = useState(post?.title ?? '');
  const [content, setContent] = useState(post?.body ?? '');

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.label}>Blog Title</Text>
          <TextInput
            style={styles.input}
            placeholder={'Blog Title'}
            onChangeText={text => setTitle(text)}
            value={title}
            autoCapitalize={'none'}
            autoCorrect={false}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Blog Content</Text>
          <TextInput
            onChangeText={text => setContent(text)}
            value={content}
            autoCapitalize={'none'}
            autoCorrect={false}
            multiline={true}
            textAlignVertical={'top'}
            numberOfLines={4}
            style={[styles.input, styles.multiline]}
            placeholder={'Blog Content'}
          />
        </View>

        <View style={styles.section}>
          <Button
            title={'Edit Blog Post'}
            onPress={() =>
              editBlogPost(id, title, content, () => {
                navigation.navigate('Blogs');
              })
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  section: {
    marginVertical: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    fontSize: 18,
    borderColor: '#AFAFAF',
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
  },
  multiline: {
    height: 250,
  },
});

export default EditBlogScreen;
