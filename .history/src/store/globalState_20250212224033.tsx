"use client"

import React, { createContext, useContext, useReducer } from 'react';
import { Category, Product } from '@/types';

interface GlobalState {
  products: Product[];
  categories: Category[];
  colors: any[];
  tags: any[];
}

const initialState: GlobalState = {
  products: [],
  categories: [],
  colors: [],
  tags: [],
};

type Action =
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'SET_CATEGORIES'; payload: Category[] }
  | { type: 'SET_COLORS'; payload: any[] }
  | { type: 'SET_TAGS'; payload: any[] };

function reducer(state: GlobalState, action: Action): GlobalState {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'SET_COLORS':
      return { ...state, colors: action.payload };
    case 'SET_TAGS':
      return { ...state, tags: action.payload };
    default:
      return state;
  }
}

interface GlobalStateContextProps {
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
}

const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(undefined);

export const GlobalStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
}
