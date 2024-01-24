import * as React from 'react';
import {StyleSheet, View, Text, FlatList, Button} from 'react-native';
import {useContext} from 'react';
import {Context as BlogContext} from '../context/BlogContext.tsx';

interface IIndexScreenProps {}

const IndexScreen = ({}: IIndexScreenProps) => {
  const {state, addBlogPost, deleteBlogPost} = useContext(BlogContext);
  return (
    <View style={styles.screen}>
      <Button title={'Add blogpost'} onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
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
        )}
      />
    </View>
  );
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
