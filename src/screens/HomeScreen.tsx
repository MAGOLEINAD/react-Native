import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  Button,
  Dimensions,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import SliderHorizontal from '../components/SliderHorizontal';

const HomeScreen = () => {
  const {width: anchoCelular} = Dimensions.get('window');
  const {top} = useSafeAreaInsets();
  const {movies:{nowPlaying,popular,topRated,upcoming}, loading} = useMovies();
  const {navigate}: any = useNavigation();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <>
    <ScrollView>
      <View
        style={{
          marginTop: top + 20,

        }}>
        {/* <Button title='Ir a detalles' onPress={() => navigate("Detalles")}/> */}

        {/* //Slider Principal */}

        <Carousel
          data={nowPlaying}
          renderItem={({item}) => <MoviePoster movie={item} />}
          sliderWidth={anchoCelular}
          itemWidth={300}
          
        />

        {/* <SliderHorizontal title='En cartelera' movies={nowPlaying}/> */}
        <SliderHorizontal title='Películas Populares' movies={popular}/>
        <SliderHorizontal title='Mejor Rankeadas' movies={topRated}/>
        <SliderHorizontal title='Proximamente' movies={upcoming}/>
      </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
