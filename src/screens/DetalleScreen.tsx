import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import {  Dimensions, Image, ScrollView,StyleSheet,Text,View } from 'react-native'
import { RootStackParams } from '../navigation/Navigation'
import useMoviesDetails from '../hooks/useMoviesDetails';
import { ActivityIndicator } from 'react-native';
import MovieDetails from '../components/MovieDetails';
import { PropsCombinadas } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, "Detalles">{}

const screenHeight = Dimensions.get('window').height


const DetalleScreen = ({route,navigation}:Props) => {




const movie = route.params
const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

console.log(JSON.stringify(movie, null, 4))
const {creditosMovie,detalleMovie,loading} = useMoviesDetails(movie.id.toString())

const propsCombinadas:PropsCombinadas = {
  movie,
  detalleMovie,
  creditosMovie,
};

  return (
    <ScrollView>
      
    <View style={styles.imageContainer}>
      <Image
      source={{uri}}
      style={styles.posterImage}
      />
          <View style={styles.volverAtras}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='arrow-back-outline' size={30} color='white' />
          </TouchableOpacity>
        </View>
    </View>
  
  
    {loading 
    ?<View><ActivityIndicator color="red" size={50} /></View> 
    :<MovieDetails {...propsCombinadas}/>
    }
    

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
  volverAtras: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex:50
  }
});

export default DetalleScreen;


