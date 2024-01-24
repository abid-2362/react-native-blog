import * as React from 'react';
import {StyleSheet, View, Text, FlatList, Button, TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import {Context as BlogContext} from '../context/BlogContext.tsx';
import {BlogsParamList} from '../types';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface IIndexScreenProps {}

const IndexScreen = ({}: IIndexScreenProps) => {
  const {state, deleteBlogPost} = useContext(BlogContext);
  const navigation: NavigationProp<BlogsParamList> = useNavigation();

  if (!state.length) {
    return (
      <View style={styles.screen}>
        <Text>No Blog Posts Found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      {/*<Button title={'Add blogpost'} onPress={addBlogPost} />*/}
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('BlogDetails', {id: item.id})}>
            <View style={styles.blogPost}>
              <Text style={styles.title}>
                {item.title} - {item.id}
              </Text>
              <Button
                title={'Delete'}
                onPress={() => {
                  deleteBlogPost(item.id);
                }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

IndexScreen.navigationOptions = () => {
  return {};
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 5,
  },
  blogPost: {
    padding: 10,
    borderColor: '#AFAFAF',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
});

export default IndexScreen;
