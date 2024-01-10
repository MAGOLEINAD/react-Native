import React, {useEffect, useState} from 'react';
import { MovieDetailsInterface,CreditosInterface, Cast } from '../interfaces';
import moviesApi from '../api/apiMovies';


interface MovieFull{
    loading: boolean
    detalleMovie: MovieDetailsInterface | undefined
    creditosMovie: Cast[]
}

const useMoviesDetails = (id: string):MovieFull => {


  const [detalleMovie, setDetalleMovie] = useState<MovieFull>({
    loading:true,
    detalleMovie: undefined,
    creditosMovie: []
  })
  


  const peticionDetalles = async () => {
    try {
        const promiseDetalles = await moviesApi.get<MovieDetailsInterface>(`/${id}`)
        const promiseCreditos = await moviesApi.get<CreditosInterface>(`/${id}/credits`)

        const respuesta = await Promise.all ([promiseDetalles,promiseCreditos])

        setDetalleMovie({
            loading:false,
            detalleMovie: respuesta[0].data,
            creditosMovie: respuesta[1].data.cast
        })
     
    } catch (error) {
        console.log(error)
    }
   
  }
  useEffect(() => {
    peticionDetalles()
  }, [])
  

  return  {
  ...detalleMovie
  }
}

export default useMoviesDetails;
