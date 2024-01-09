import React from 'react'
import { FlatList, Text, View } from 'react-native'
import MoviePoster from './MoviePoster'
import { Movie } from '../interfaces/apiMoviesinterface';

interface Props {
    movies: Movie[]
    title?:string
}

const SliderHorizontal = ({movies,title}:Props) => {
  return (
    <View style={{backgroundColor: 'white', height: 270, marginTop: 10}}>
    {/* //Peliculas Populares */}
    {title && <Text style={{fontSize:20,textAlign:'center', fontWeight:"bold",marginBottom:10}}>{title}</Text>}
    <FlatList
    data={movies}
    renderItem={({item}) => <MoviePoster width={140} height={200}  movie={item} />}
    keyExtractor={(item) => item.id.toString()}
    horizontal= {true}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ paddingHorizontal: 10 }}
    />
  </View>
  )
}

export default SliderHorizontal