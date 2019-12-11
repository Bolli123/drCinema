import React from 'react';
import { View, Text, Image, Button, Linking} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

const MovieDetail = ({
  movie, showtimes
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
      {showtimes.map(station => (
        <Button
          key={station.purchase_url}
          title={station.time}
          onPress={() => { Linking.openURL(station.purchase_url); }}
        />
      ))}
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
  showtimes: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.string.isRequired,
    purchase_url: PropTypes.string.isRequired
  }))
}

MovieDetail.defaultProps = {
  showtimes: []
}

export default withNavigation(MovieDetail);
