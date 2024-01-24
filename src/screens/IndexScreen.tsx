import * as React from 'react';
import {StyleSheet, View, Text, FlatList, Button} from 'react-native';
import {useContext} from 'react';
import {Context as BlogContext} from '../context/BlogContext.tsx';

interface IIndexScreenProps {}

const IndexScreen = ({}: IIndexScreenProps) => {
  const {state, addBlogPost} = useContext(BlogContext);
  return (
    <View style={styles.screen}>
      <Button title={'Add blogpost'} onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <View style={styles.blogPost}>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
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
  },
  blogPost: {
    marginVertical: 10,
  },
});

export default IndexScreen;
