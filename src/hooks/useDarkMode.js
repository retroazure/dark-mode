import {useState} from 'react';
import useLocalStorage from './useLocalStorage'; 

const useDarkMode = ()=>{
    const [darkModeon, setDarkModeon] = useLocalStorage('darkmode', 'state');

    return [darkModeon, setDarkModeon];
}

export default useDarkMode;