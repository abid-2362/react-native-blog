import * as React from 'react';
import {Context, useReducer} from 'react';
import {IBlog, IBlogContext} from '../types/interfaces.ts';

const defaultValue: IBlogContext = {
  data: [],
  addBlogPost: () => {},
};

const BlogContext: Context<IBlogContext> = React.createContext(defaultValue);

interface IAction {
  type: string;
  payload: any;
}

const blogReducer = (state: IBlog[], action: IAction) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    default:
      return state;
  }
};

export interface IBlogProviderProps {
  children: any;
}

const BlogProvider = ({children}: IBlogProviderProps) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    const indexNumber = blogPosts.length + 1;
    dispatch({type: 'add', payload: {title: `BlogPost ${indexNumber}`, body: `Body Post ${indexNumber}`}});
  };

  return <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>{children}</BlogContext.Provider>;
};

export {BlogProvider};
export default BlogContext;
