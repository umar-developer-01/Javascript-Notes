import { useState, useEffect } from "react";


const useDebounce = (inputValue,delay = 300) => {
   const [debouncedValue,setdebouncedValue] = useState();

   useEffect(()=>{
     const timer = setTimeout(() => {
        setdebouncedValue(inputValue);
     },delay);

     return () => {
       clearTimeout(timer);
     }
   },[inputValue,delay]);

   return debouncedValue;
}


export default useDebounce;
