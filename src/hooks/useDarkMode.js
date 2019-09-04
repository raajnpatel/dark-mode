import React, { useEffect }from 'react';

import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {

    const [someValue, setSomeValue] = useLocalStorage('mode');
    useEffect(()=>{
        if(someValue === true){
            document.body.classList.toggle('dark-mode')
        }
    },[someValue]);
    return [someValue,setSomeValue];
};

export default useDarkMode;