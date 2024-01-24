import {NavigationProp, useNavigation} from '@react-navigation/native';
import {BlogsParamList} from '../types';
import {Button} from 'react-native';
import * as React from 'react';

interface IBlogDetailsScreenHeaderRightButtonProps {
  id: string;
}
const BlogDetailsScreenHeaderRightButton = ({id}: IBlogDetailsScreenHeaderRightButtonProps) => {
  const navigation: NavigationProp<BlogsParamList> = useNavigation();
  return (
    <Button
      title={'Edit'}
      onPress={() => {
        navigation.navigate('EditBlog', {id: id});
      }}
    />
  );
};

export default BlogDetailsScreenHeaderRightButton;
