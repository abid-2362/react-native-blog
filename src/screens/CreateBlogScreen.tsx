import * as React from 'react';
import {StyleSheet, View, Text, TextInput, Button, ScrollView} from 'react-native';
import {useContext, useState} from 'react';
import {Context as BlogContext} from '../context/BlogContext.tsx';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {BlogsParamList} from '../types';

interface ICreateBlogScreenProps {}

const CreateBlogScreen = ({}: ICreateBlogScreenProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigation: NavigationProp<BlogsParamList> = useNavigation();
  const {addBlogPost} = useContext(BlogContext);

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
            title={'Add Blog Post'}
            onPress={() =>
              addBlogPost(title, content, () => {
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

export default CreateBlogScreen;
