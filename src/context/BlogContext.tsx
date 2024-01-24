import * as React from 'react';
import {Context, useState} from 'react';
import {IBlogContext} from '../types/interfaces.ts';

const defaultValue: IBlogContext = {
  data: [],
  addBlogPost: () => {},
};

const BlogContext: Context<IBlogContext> = React.createContext(defaultValue);

export interface IBlogProviderProps {
  children: any;
}
const BlogProvider = ({children}: IBlogProviderProps) => {
  const [blogPosts, setBlogPost] = useState<Array<any>>([]);

  const addBlogPost = () => {
    const indexNumber = blogPosts.length + 1;
    setBlogPost([
      ...blogPosts,
      {
        title: `Blog Post #${indexNumber}`,
        body: `Blog Post Body ${indexNumber}`,
      },
    ]);
  };

  return <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>{children}</BlogContext.Provider>;
};

export {BlogProvider};
export default BlogContext;
