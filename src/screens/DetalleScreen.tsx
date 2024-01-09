import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text,View } from 'react-native'
import { RootStackParams } from '../navigation/Navigation'
import Icon from 'react-native-vector-icons/Ionicons';
import useMoviesDetails from '../hooks/useMoviesDetails';


interface Props extends StackScreenProps<RootStackParams, "Detalles">{}

const screenHeight = Dimensions.get('window').height


const DetalleScreen = ({route}:Props) => {

const movie = route.params
const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

console.log(JSON.stringify(movie, null, 4))
const {detalleMovie} = useMoviesDetails(movie.id.toString())

  return (
    <ScrollView>
    <View style={styles.imageContainer}>
      <Image
      source={{uri}}
      style={styles.posterImage}
      />
    </View>
    <View style={styles.textContainer}>
    <Text style={styles.tituloOriginal}>{movie.original_title}</Text>
    <Text style={styles.titulo}>{movie.title}</Text>
    <Text style={{marginVertical:10}}><Icon name="star" size={30} color="#900" /></Text>
    <Text>{detalleMovie?.status}</Text>
    </View>

 
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4.65,
    elevation: 9,

  },
  posterImage: {
    flex: 1,
    borderRadius: 10,
    
  },
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

export default DetalleScreen;


