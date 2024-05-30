import { createContext, useState } from 'react';

interface childernType {
  children: React.ReactNode;
}

export type globalContent = {
    menuApp: Number,
    setMenuApp: (m: Number) => void,
    onUser: Boolean,
    setOnUser: (m: Boolean) => void,
    isAdmin: Boolean,
    setIsAdmin: (m: Boolean) => void,
}

export const Context = createContext<globalContent>({
    menuApp: 0,
    setMenuApp: () => {},
    onUser: false,
    setOnUser: () => {},
    isAdmin: false,
    setIsAdmin: () => {}
});

export function ContextProvider({ children }: childernType) {

  const [menuApp, setMenuApp] = useState<Number>(0);
  const [onUser, setOnUser] = useState<Boolean>(false);
  const [isAdmin, setIsAdmin] = useState<Boolean>(false);

  return <Context.Provider value={{menuApp, setMenuApp, onUser, setOnUser, isAdmin, setIsAdmin}}>{children}</Context.Provider>;
}

export default Context;
