import {useState} from 'react';
import useLocalStorage from './useLocalStorage'; 

const useDarkMode = ()=>{
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', 'state');

    return [darkMode, setDarkMode];
}

export default useDarkMode;