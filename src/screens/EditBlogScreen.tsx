import * as React from 'react';
import {useContext} from 'react';
import {Context as BlogContext} from '../context/BlogContext.tsx';
import {RouteProp, useRoute} from '@react-navigation/native';
import {BlogsParamList} from '../types';
import BlogPostForm from '../components/BlogPostForm.tsx';

interface IEditBlogScreenProps {}

const EditBlogScreen = ({}: IEditBlogScreenProps) => {
  const route: RouteProp<BlogsParamList, 'EditBlog'> = useRoute();
  const {state, editBlogPost} = useContext(BlogContext);
  const {id} = route.params;
  const post = state.find(blog => blog.id === id);

  const submitHandler = (title: string, content: string, onSuccess?: () => void) => {
    editBlogPost(id, title, content, onSuccess);
  };

  return (
    <BlogPostForm onSubmit={submitHandler} initialValues={{title: post?.title ?? '', content: post?.body ?? ''}} />
  );
};

export default EditBlogScreen;
