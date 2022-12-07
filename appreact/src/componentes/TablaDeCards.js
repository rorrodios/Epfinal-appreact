import React, {useState} from 'react'
import VideoCard from './VideoCard'
import { CardGroup } from 'react-bootstrap'
import movies from './movies/movies.json'

const TablaDeCards = () => {



    
  return (

    <>
        <CardGroup> 
            {movies.map(movie => {
                return(
                    <VideoCard nombre={movie.nombre}
                        img={movie.img}
                        calificacion={movie.calificacion}
                        estreno={movie.estreno}
                        description={movie.description}/>
                )
            })}
        </CardGroup>
    
    </>
  )
}

export default TablaDeCards