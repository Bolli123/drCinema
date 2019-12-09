import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles'
import { Entypo } from '@expo/vector-icons';


const SingleMovie = ({
  title, id, year, genres, poster, navigation: { navigate }
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => navigate('Movie', { id })}
  >
    <View>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: poster }}
      />
      <View style={styles.content}>
        <Text style={styles.text}>
          {title} - {year}
        </Text>
        <Text>
          {genres}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

SingleMovie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default withNavigation(SingleMovie);
