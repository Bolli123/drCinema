import React from 'react';
import { View, Text, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

const MovieDetail = ({
  movie
}) => (
  <View>
    <View>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: movie.poster }}
      />
      <Text>
        {movie.title}
      </Text>
      <Text>
        {movie.year}
      </Text>
      <Text>
        Plot: {movie.plot}
      </Text>
      <Text>
        Duration: {movie.durationMinutes}
      </Text>
      <Text>
        {movie.genres}
      </Text>
    </View>
  </View>
);

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    plot: PropTypes.string,
    durationMinutes: PropTypes.number,
    genres: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default withNavigation(MovieDetail);
