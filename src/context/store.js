import { createContext, useReducer, useDebugValue } from 'react';
import reducer from './reducer';

const initialState = { modalOpen: false };

export const Store = createContext(initialState);

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}
