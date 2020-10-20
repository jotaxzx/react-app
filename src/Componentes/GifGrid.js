import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGif } from '../helpers/getGifs';

export const GifGrid = ( {category} ) => {
    
    //recibir categoria y hacer peticion http
    const [images, setImages] = useState([]);

            useEffect( () => {
            getGif( category )
                .then( imgs => setImages(imgs));
            },[ category ]) // esto hace que la peticion solo se dispare 1 vez cada vez que cambia algo del componente.

            
        return (
            <>
                        <h3>{category} </h3>
                    <div className="card-grid">
                        {
                            images.map( img =>( 
                                <GifGridItem 
                                    
                                    key={ img.id }
                                    {...img}/> //para mandar la img debo hacerlo con spred(...img)
                            ))
                        }
                    </div>
            
            
            </>
        
        )
}
