import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Movie} from '../interfaces/apiMoviesinterface';
import { useNavigation } from '@react-navigation/native';



interface Props {
  movie: Movie;
  height?:number
  width?:number
}

const MoviePoster = ({movie,height = 420, width = 300}: Props) => {
   const {navigate}:any = useNavigation()
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <View style={{
        height,
        width,
        marginHorizontal:5,
        marginVertical:5,
        marginBottom:20,
        padding:5
    }}>
    <TouchableOpacity
     onPress={() => navigate("Detalles",movie)}
     style={styles.contenedorPoster}
     activeOpacity={0.8}
     >
      <Image
        style={styles.image}
        source={{uri}}
      />
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    contenedorPoster: {
        flex:1,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.9,
        shadowRadius: 4.65,
        elevation: 10,
       borderRadius:15
      },
    image: {
        flex: 1,
        borderRadius: 20,
      },
});

export default MoviePoster;
