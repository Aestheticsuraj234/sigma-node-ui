"use client"
import React, { useState, createContext, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [toggleDark, setToggleDark] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleSearchBar , setToggleSearchBar] = useState(false);
    const [toggleUpdateCard , setToggleUpdateCard] = useState(false);
  
    const handleToggleMenu = () => {
      setToggleMenu((prevState) => !prevState);
    };
    
    const handleToggleDark = () => {
      setToggleDark(!toggleDark);
    };
  
    const handleToggleSearchBar = ()=>{
      setToggleSearchBar(!toggleSearchBar)
    }

    const handleToggleUpdateCard = ()=>{
      setToggleUpdateCard(!toggleUpdateCard)
    }
    return (
        <GlobalContext.Provider value={{toggleDark, toggleMenu, handleToggleMenu , handleToggleDark , toggleSearchBar , handleToggleSearchBar ,handleToggleUpdateCard,toggleUpdateCard}}>
            {children}
        </GlobalContext.Provider>
    );
};
