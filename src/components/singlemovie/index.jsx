import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles'
import { Entypo } from '@expo/vector-icons';


const SingleMovie = ({
  title, id, year, genres, poster, cinemaId, navigation: { navigate }
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => navigate('Movie', { id, cinemaId })}
  >
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: poster === 'https://kvikmyndir.is/images/poster/' ? 'https://lh6.googleusercontent.com/proxy/hIgFSMyx4VsuoQh8h-ZfI3IiK9uFSLZ7pG67H_1RwEBDEPiWX-odcJ0PkWriAPeqwKyC6n-12UTrNmQF2ul9DAjwKMljG3zSCCTDoTVDPexFHV9l_JD5WMbmpnUJqWLqYA=s0-d' : poster }}
      />
      <View style={styles.content}>
        <Text style={styles.text}>
          {title} - {year}
        </Text>
        <Text style={styles.genre}>
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
  cinemaId: PropTypes.number
}

SingleMovie.defaultProps = {
  cinemaId: null
}

export default withNavigation(SingleMovie);
