import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { books } = useContext(BookContext);

  const {isLightTheme, light, dark, toggleTheme} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
  return (
    <div className="navbar" style={{background: theme.ui, color: theme.color}}>
      <h1>Avid Reader List</h1>
      <p>Currently, you have {books.length} books to get through...</p>
      <button onClick={toggleTheme}>Toggle Navbar Theme</button>
    </div>
  );
}
 
export default Navbar;