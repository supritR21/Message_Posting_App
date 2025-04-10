import {FaLaptop, FaTabletAlt, FaMobileAlt, FaMobile} from "react-icons/fa";
import React, { useContext } from 'react';
import DataContext from './context/DataContext';
import useWindowSize from "./hooks/useWindowSize";

const Header = ({title}) => {
  const {width} = useWindowSize();
  return (
    <header className='Header'>
        <h1>{title}</h1>
        {width < 768 ? <FaMobileAlt />
            : width < 992 ? <FaTabletAlt />
                 : <FaLaptop />}
    </header>
  )
}

export default Header