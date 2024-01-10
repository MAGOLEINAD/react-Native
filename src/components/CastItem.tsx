import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {Cast} from '../interfaces'

interface Props {
  actor: Cast
}

const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

  return (
    <View style={{ flexDirection: 'row', padding:10}}>
      <Image source={{uri}} style={styles.imagenActor} />
      <View style={{marginLeft: 10}}>
        <Text style={styles.nombreActor}>{actor.name}</Text>
        <Text>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nombreActor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  imagenActor: {
    width: 50,
    height: 50,
    borderRadius: 5,

  },
});
export default CastItem
