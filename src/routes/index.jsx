import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from '../views/main';
import Cinema from '../views/cinema';
import Movie from '../views/movie';
import UpcomingMovies from '../views/UpcomingMovies'

const StackNavigator = createStackNavigator({
  Main,
  Cinema,
  Movie,
  UpcomingMovies
});

export default createAppContainer(StackNavigator);
