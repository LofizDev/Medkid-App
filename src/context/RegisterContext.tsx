import React, { useState, createContext, useRef } from 'react';
import { FlatList } from 'react-native'
const RegisterContext = createContext<any>(null);
interface iProps {
  children: React.ReactNode;
}
interface Tab {
  id: string;
  component: JSX.Element;
}


const StoreProvider = ({ children }: iProps) => {
  const flatListRef = useRef<FlatList<Tab>>(null);
  const [currentTab, setCurrentTab] = useState<number>(0);

  const onIndexChange = (index: number) => {
    setCurrentTab(index);
    flatListRef.current && flatListRef.current.scrollToIndex({ index, animated: true });
  };
  return (
    <RegisterContext.Provider value={{ currentTab, setCurrentTab, flatListRef, onIndexChange }}>
      {children}
    </RegisterContext.Provider>
  );
};

export { RegisterContext, StoreProvider };
