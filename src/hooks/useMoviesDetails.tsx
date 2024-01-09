import React, {useEffect, useState} from 'react';
import { MovieDetailsInterface,CreditosInterface } from '../interfaces';
import moviesApi from '../api/apiMovies';

interface HookDetails {
    loading: boolean
    detalleMovie: MovieDetailsInterface | undefined
    creditosMovie: CreditosInterface | undefined
}



const useMoviesDetails = (id: string):HookDetails => {

  const [loading, setLoading] = useState(true)
  const [detalleMovie, setDetalleMovie] = useState<MovieDetailsInterface>()
  const [creditosMovie, setCreditosMovie] = useState<CreditosInterface>()
  

  const peticionDetalles = async () => {
    try {
        const promiseDetalles = await moviesApi.get<MovieDetailsInterface>(`/${id}`)
        const promiseCreditos = await moviesApi.get<CreditosInterface>(`/${id}/credits`)

        const respuesta = await Promise.all ([promiseDetalles,promiseCreditos])


        setDetalleMovie(respuesta[0].data)
        setCreditosMovie(respuesta[1].data)
        setLoading(false)
    } catch (error) {
        console.log(error)
    }
   
  }
  useEffect(() => {
    peticionDetalles()
  }, [])
  

  return  {
    detalleMovie,
    creditosMovie,
    loading
  }
}

export default useMoviesDetails;
