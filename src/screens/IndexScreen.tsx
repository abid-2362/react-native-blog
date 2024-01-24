import * as React from 'react';
import {StyleSheet, View, Text, FlatList, Button} from 'react-native';
import {useContext} from 'react';
import BlogContext from '../context/BlogContext.tsx';

interface IIndexScreenProps {}

const IndexScreen = ({}: IIndexScreenProps) => {
  const {data, addBlogPost} = useContext(BlogContext);
  return (
    <View style={styles.screen}>
      <Button title={'Add blogpost'} onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <View style={{marginBottom: 15}}>
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
});

export default IndexScreen;
