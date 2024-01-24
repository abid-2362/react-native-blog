import * as React from 'react';
// import {Context, useReducer} from 'react';
import {IBlog, IBlogContext} from '../types/interfaces.ts';
import createDataContext from './createDataContext.tsx';

const defaultValue: IBlogContext = {
  state: [],
  addBlogPost: () => {},
};

interface IAction {
  type: string;
  payload: any;
}

const blogReducer = (state: IBlog[], action: IAction) => {
  switch (action.type) {
    case 'add':
      // return [...state, action.payload];
      return [...state, {title: `Blog Post #${state.length + 1}`, body: `Blog post body ${state.length + 1}`}];
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

const dataContext = createDataContext(blogReducer, {addBlogPost}, [], defaultValue);
const {Context}: {Context: React.Context<IBlogContext>} = dataContext;
const {Provider} = dataContext;
export {Context, Provider};
