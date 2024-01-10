import React from 'react'
import { FlatList, View } from 'react-native';
import { StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast, Movie, MovieDetailsInterface } from '../interfaces';
import formatearMoneda from "currency-formatter"
import CastItem from './CastItem';


export interface PropsCombinadas {
    movie: Movie,
    detalleMovie: MovieDetailsInterface | undefined,
    creditosMovie: Cast[]
}

const MovieDetails = ({movie,detalleMovie,creditosMovie}:PropsCombinadas) => {
  return (
    <View style={styles.textContainer}>
    <Text style={styles.tituloOriginal}>{movie.original_title}</Text>
    <Text style={styles.titulo}>{movie.title}</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
    <Icon name="star" size={30} color="#900" style={{ marginRight: 5 }} />
    <Text>- {detalleMovie?.genres.map(g => g.name).join(", ")}</Text>
    </View>
    <Text style={{...styles.titulo, marginBottom: 10}}>Historia</Text>

    <Text>{detalleMovie?.overview}</Text>
    <Text style={{...styles.titulo, marginTop: 10}}>Presupuesto</Text>
    <Text style={styles.titulo}>{formatearMoneda.format(detalleMovie!.budget,{ code: 'USD' }) }</Text>
    <Text style={{...styles.titulo, marginVertical: 10}}>Actores</Text>
    <FlatList 
    data={creditosMovie}
    renderItem={({item}) => <CastItem actor={item}/>}
    keyExtractor={(item) => item.id.toString()}
    horizontal= {true}
    showsHorizontalScrollIndicator={false}
    style={{marginTop:10, height:90}}
    />
   
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    marginHorizontal: 15,
  },
  titulo: {
    fontSize: 18,
    color: 'black',
  },
  tituloOriginal: {
    fontSize: 12,
    color: 'gray',
  },
});

export default MovieDetails