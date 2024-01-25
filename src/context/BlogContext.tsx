import * as React from 'react';
// import {Context, useReducer} from 'react';
import {IBlog, IBlogContext} from '../types/interfaces.ts';
import createDataContext from './createDataContext.tsx';
import random from 'lodash/random';
import server from '../api/jsonServer.ts';
import {AxiosResponse} from 'axios';

const defaultValue: IBlogContext = {
  id: '',
  state: [],
  addBlogPost: () => {},
  deleteBlogPost: (id: string) => {
    id;
  },
  editBlogPost: (id, title, content, onSuccess) => {
    if (onSuccess) {
      onSuccess();
    }
  },
  getBlogPosts: () => {},
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
          title: action.payload.title,
          body: action.payload.content,
        },
      ];

    case 'delete':
      return [...state.filter(blog => blog.id !== action.payload)];

    case 'update':
      const {id, title, body} = action.payload;
      return [...state.filter(blog => blog.id !== id), {id, title, body}];

    case 'reset_posts':
      return [...action.payload];

    default:
      return state;
  }
};

const getBlogPosts = (dispatch: any) => {
  return async () => {
    const response: AxiosResponse<IBlog[]> = await server.get('/blogposts');
    dispatch({type: 'reset_posts', payload: response.data});
  };
};

const addBlogPost = () => {
  return async (title: string, content: string, onSuccess?: () => void) => {
    await server.post('/blogposts', {
      title,
      body: content,
    });

    if (onSuccess) {
      onSuccess();
    }
  };
};

const deleteBlogPost = (dispatch: any) => {
  return (id: string) => {
    dispatch({type: 'delete', payload: id});
  };
};

const editBlogPost = (dispatch: any) => {
  return (id: string, title: string, body: string, onSuccess?: () => void) => {
    dispatch({type: 'update', payload: {id, title, body}});
    if (onSuccess) {
      onSuccess();
    }
  };
};

const dataContext = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
  [],
  defaultValue,
);
const {Context}: {Context: React.Context<IBlogContext>} = dataContext;
const {Provider} = dataContext;
export {Context, Provider};
