import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {//Para que no se recargue la pagina cada vez que hacemos una busqueda
    e.preventDefault();

    if (inputValue.trim().length > 2) {//Eliminar espacios antes y despues y que no se mande un campo vacio
      setCategories((cat) => [inputValue,...cat ]);//Aniadimos el valor del imput value al final del arr
      setInputValue("");//Para que no haya doble posteo
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Busqueda" type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.protoTypes = {
  setCategories: PropTypes.func.isRequired,
};
