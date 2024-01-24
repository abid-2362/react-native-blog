import {NavigationProp, useNavigation} from '@react-navigation/native';
import {BlogsParamList} from '../types';
import {Button} from 'react-native';
import * as React from 'react';

const IndexScreenHeaderRightButton = () => {
  const navigation: NavigationProp<BlogsParamList> = useNavigation();
  return (
    <Button
      title={'Add'}
      onPress={() => {
        navigation.navigate('CreateBlog');
      }}
    />
  );
};

export default IndexScreenHeaderRightButton;
