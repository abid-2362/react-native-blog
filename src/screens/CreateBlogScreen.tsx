import * as React from 'react';
import {useContext} from 'react';
import {Context as BlogContext} from '../context/BlogContext.tsx';
import BlogPostForm from '../components/BlogPostForm.tsx';

interface ICreateBlogScreenProps {}

const CreateBlogScreen = ({}: ICreateBlogScreenProps) => {
  const {addBlogPost} = useContext(BlogContext);

  return <BlogPostForm onSubmit={addBlogPost} />;
};

export default CreateBlogScreen;
