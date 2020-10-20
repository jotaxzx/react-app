import React, { useState } from 'react'
import PropTypes from 'prop-types'


// le paso como argumento el setCategorias para poder agregar mas cagtegorias provenientes del input
export const AddCategory = ({setCategories}) => {

    const [InputValue, setInputValue] = useState('') 

    const handleInputChange = (e) => {
        return (
        setInputValue( e.target.value )
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // prevenir el comportamiento del formulario
        
        if (InputValue.trim().length > 1 ) {
            setCategories( cats => [ InputValue, ...cats] ); // el cats es la referencia del arreglo anterior.
            setInputValue(''); // que luego de escribir me sete el campo vacio
        }
        
        
    }

    return (
        
            <form onSubmit={ handleSubmit }> 
                <input 
                    placeholder="
                    Buscar Gif"
                    type="text"
                    value={ InputValue }
                    onChange={ handleInputChange } // se disparar cada vez que la caja de texto cambie, es la unica forma, usando onChange.
                />
            </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired  // esto hace que setCategorias sea un argumento requerido en addCategory!
}