import React from 'react';
import { View, Text, Image, Button, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

const MovieDetail = ({
  movie, showtimes, trailerURL
}) => (
  <View style={styles.container}>
    <View style={styles.titleContent}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: movie.poster === 'https://kvikmyndir.is/images/poster/' ? 'https://lh6.googleusercontent.com/proxy/hIgFSMyx4VsuoQh8h-ZfI3IiK9uFSLZ7pG67H_1RwEBDEPiWX-odcJ0PkWriAPeqwKyC6n-12UTrNmQF2ul9DAjwKMljG3zSCCTDoTVDPexFHV9l_JD5WMbmpnUJqWLqYA=s0-d' : movie.poster }}
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
      {
        trailerURL !== ''
          ?
          <View style={styles.videocontainer}>
            <Text styles={styles.text}>
            {movie.trailers[0].results[0].name}
            </Text>
            <WebView
            style={styles.video}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri: trailerURL }}
            />
          </View>
          :
          <></>
      }

    <View style={styles.showTimes}>
      {
        showtimes.length === 0
          ?
          <></>
          :
          showtimes.map(showtime => (
            <View
              style={styles.showButton}
              key={showtime.time}
            >
              <Button
                title={showtime.time}
                onPress={() => { Linking.openURL(showtime.purchase_url); }}
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
  })),
  trailerURL: PropTypes.string
}

MovieDetail.defaultProps = {
  showtimes: [],
  trailerURL: ''
}

export default withNavigation(MovieDetail);
