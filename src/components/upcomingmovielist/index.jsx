import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import SingleMovie from '../singlemovie'

const MovieList = ({
  movies, cinemaId
}) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={1}
      scrollEnabled={false}
      data={movies.sort((a, b) => b.year.localeCompare(a.year))}
      renderItem={({ item }) => {
        const {title, id, genres, poster} = item
        const date = item['release-dateIS']
        return (
          <SingleMovie
            title={title}
            id={id}
            year={date}
            genres={genres}
            poster={poster}
            cinemaId={cinemaId}
          />
        );
      }}
      keyExtractor={(movie) => (`${movie.id}`)}
    />
  </View>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
  })).isRequired,
  cinemaId: PropTypes.number,
}

MovieList.defaultProps = {
  cinemaId: null
}

export default MovieList;
