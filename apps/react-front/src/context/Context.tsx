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
    panelMenu: Number,
    setPanelMenu: (m: Number) => void
}

export const Context = createContext<globalContent>({
    menuApp: 0,
    setMenuApp: () => {},
    onUser: false,
    setOnUser: () => {},
    isAdmin: false,
    setIsAdmin: () => {},
    panelMenu: 0,
    setPanelMenu: () => {}
});

export function ContextProvider({ children }: childernType) {

  const [menuApp, setMenuApp] = useState<Number>(0);
  const [onUser, setOnUser] = useState<Boolean>(false);
  const [isAdmin, setIsAdmin] = useState<Boolean>(false);
  const [panelMenu, setPanelMenu] = useState<Number>(0);

  return <Context.Provider value={{menuApp, setMenuApp, onUser, setOnUser, isAdmin, setIsAdmin, panelMenu, setPanelMenu}}>{children}</Context.Provider>;
}

export default Context;
