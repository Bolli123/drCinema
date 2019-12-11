import React from 'react';
import { View, Text, Image, Button, Linking} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

const MovieDetail = ({
  movie, showtimes
}) => (
  <View style={styles.container}>
    <View style={styles.titleContent}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: movie.poster }}
      />
      <View style={styles.content}>
        <Text style={styles.text}>
          {movie.title} - {movie.year}
        </Text>
        <Text style={styles.genre}>
          {movie.genres}
        </Text>
        {
          showtimes.length !== 0
            ?
              <Text style={styles.length}>
                Lengd: {movie.durationMinutes} mín.
              </Text>
            :
          <></>
        }
      </View>
    </View>
    <Text style={styles.plot}>
      {movie.plot}
    </Text>
    <View style={styles.showTimes}>
      {
        showtimes.length === 0
          ?
          <></>
          :
          showtimes.map(station => (
            <View
              style={styles.showButton}
              key={station.purchase_url}
            >
              <Button
                title={station.time}
                onPress={() => { Linking.openURL(station.purchase_url); }}
              />
            </View>
          ))
      }
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
