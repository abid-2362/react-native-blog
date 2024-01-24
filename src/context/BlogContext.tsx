import * as React from 'react';
// import {Context, useReducer} from 'react';
import {IBlog, IBlogContext} from '../types/interfaces.ts';
import createDataContext from './createDataContext.tsx';
import random from 'lodash/random';

const defaultValue: IBlogContext = {
  id: '',
  state: [],
  addBlogPost: () => {},
  deleteBlogPost: (id: string) => {
    console.log('id', id);
  },
};

interface IAction {
  type: string;
  payload: any;
}

const blogReducer = (state: IBlog[], action: IAction) => {
  switch (action.type) {
    case 'add':
      // return [...state, action.payload];
      return [
        ...state,
        {
          id: String(random(1000, 1000000)),
          title: `Blog Post #${state.length + 1}`,
          body: `Blog post body ${state.length + 1}`,
        },
      ];

    case 'delete':
      return [...state.filter(blog => blog.id !== action.payload)];
    default:
      return state;
  }
};

const addBlogPost = (dispatch: any) => {
  // const indexNumber = blogPosts.length + 1;
  return () => {
    // dispatch({type: 'add', payload: {title: `BlogPost ${indexNumber}`, body: `Body Post ${indexNumber}`}});
    dispatch({type: 'add'});
  };
};

const deleteBlogPost = (dispatch: any) => {
  // const indexNumber = blogPosts.length + 1;
  return (id: string) => {
    // dispatch({type: 'add', payload: {title: `BlogPost ${indexNumber}`, body: `Body Post ${indexNumber}`}});
    dispatch({type: 'delete', payload: id});
  };
};

const dataContext = createDataContext(blogReducer, {addBlogPost, deleteBlogPost}, [], defaultValue);
const {Context}: {Context: React.Context<IBlogContext>} = dataContext;
const {Provider} = dataContext;
export {Context, Provider};
