import React, { useState } from 'react'
import { AddCategory } from './Componentes/AddCategory';
import { GifGrid } from './Componentes/GifGrid';

export const GifExpertApp = () => {

    //const categorias = ["Dragon Ball", 'Slum Dunk', 'One Punch'] ;

    const [categories, setCategories] = useState(['Samurai x']);


    return (

         <>
            <h2 className="title">GifExpertapp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>
                { 
                
                categories.map(  category  =>  // barrer los elementos de categories pasandolos a la variable category

                    <GifGrid
                    key={ category }
                    category={ category } />
                
                )

                }
            </ol>
            
        </>
          
    );
}
