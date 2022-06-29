/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';

export const modalContext = createContext();

const initialState = { loginModal: false, registerModal: false };

const reducer = (state, action) => {
  switch (action.type) {
    case 'open-login':
      return { ...state, loginModal: true };
    case 'close-login':
      return { ...state, loginModal: false };
    case 'open-register':
      return { ...state, registerModal: true };
    case 'close-register':
      return { ...state, registerModal: false };
    default:
      return state;
  }
};

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <modalContext.Provider value={{ state, dispatch }}>{children}</modalContext.Provider>;
};
