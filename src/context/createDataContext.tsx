import * as React from 'react';
import {useReducer} from 'react';

const createDataContext = (reducer: any, actions: any, initialState: any, defaultValue: any = null) => {
  const Context = React.createContext(defaultValue);

  const Provider = ({children}: {children: any}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch) => {return () => {} } }
    const boundActions: any = {};

    for (let key in actions) {
      // key === 'addBlogPost
      boundActions[key] = actions[key](dispatch);
    }

    return <Context.Provider value={{state, ...boundActions}}>{children}</Context.Provider>;
  };

  return {Context, Provider};
};

export default createDataContext;
