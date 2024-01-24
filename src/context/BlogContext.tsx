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
  editBlogPost: (id, title, content, onSuccess) => {
    console.log(id, title, content);
    onSuccess();
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
          title: action.payload.title,
          body: action.payload.content,
        },
      ];

    case 'delete':
      return [...state.filter(blog => blog.id !== action.payload)];
    case 'update':
      const {id, title, body} = action.payload;
      return [...state.filter(blog => blog.id !== id), {id, title, body}];
    default:
      return state;
  }
};

const addBlogPost = (dispatch: any) => {
  // const indexNumber = blogPosts.length + 1;
  return (title: string, content: string, onSuccess: () => void) => {
    // dispatch({type: 'add', payload: {title: `BlogPost ${indexNumber}`, body: `Body Post ${indexNumber}`}});
    dispatch({type: 'add', payload: {title, content}});
    onSuccess();
  };
};

const deleteBlogPost = (dispatch: any) => {
  return (id: string) => {
    dispatch({type: 'delete', payload: id});
  };
};

const editBlogPost = (dispatch: any) => {
  return (id: string, title: string, body: string, onSuccess: () => void) => {
    dispatch({type: 'update', payload: {id, title, body}});
    onSuccess();
  };
};

const dataContext = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost},
  [
    {
      id: '1234',
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, fugiat magnam mollitia perspiciatis quo repellendus tempore vel. Ab amet at autem blanditiis deleniti ea eum eveniet facilis fuga harum illum impedit itaque labore libero magni molestias nisi non perferendis perspiciatis quaerat quod repudiandae sapiente sed, sit soluta sunt tenetur unde vitae voluptatem voluptatibus? Architecto culpa incidunt ipsam velit. Adipisci aperiam assumenda blanditiis consectetur debitis dolore earum enim esse eum excepturi fugit id incidunt ipsa iste itaque, laborum laudantium minima molestias nam natus nobis odit officiis perferendis quae quam quibusdam ratione reiciendis, unde vitae voluptates. Animi doloremque in non vero voluptatem!',
    },
  ],
  defaultValue,
);
const {Context}: {Context: React.Context<IBlogContext>} = dataContext;
const {Provider} = dataContext;
export {Context, Provider};
