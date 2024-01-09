import { createStackNavigator } from '@react-navigation/stack';
import { DetalleScreen, HomeScreen } from '../screens';
import { Movie } from '../interfaces/apiMoviesinterface';

export type RootStackParams = {
    Home: undefined
    Detalles: Movie
}

const Stack = createStackNavigator<RootStackParams>();

export const NavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false,
        cardStyle: {
            backgroundColor: "white"
        }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detalles" component={DetalleScreen} />
    </Stack.Navigator>
  );
}