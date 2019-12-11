import React from 'react';
import { View, Text, Button } from 'react-native';
import CinemaDetail from '../../components/cinemadetail';
import MovieList from '../../components/movielist'
import styles from '../../views/main/styles'
import { connect } from 'react-redux'

class Cinema extends React.Component {

  state = {
    cinema: {},
    movies: []
    }

  async componentDidMount() {
    await this._fetchItems()
  }
  async _fetchItems() {
    const { navigation } = this.props
    const retMovies = []
    const cinemaId = navigation.getParam('id', '')
    const cinemas = this.props.cinemas
    const movies = this.props.movies
    for (let i = 0; i < cinemas.length; i++) {
      if (cinemas[i].id === cinemaId) {
        this.setState({ cinema: cinemas[i] })
      }
    }
    for (let i = 0; i < movies.length; i++) {
      for (let j = 0; j < movies[i].showtimes.length; j++) {
        if (movies[i].showtimes[j].cinema.id === cinemaId) {
          retMovies.push(movies[i])
        }
      }
    }
    this.setState({ movies: retMovies })
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#6ea6ff',
      },
      headerTintColor: '#fff',
      headerTitle: 'Cinema',
    }
  }

  render() {
    const { cinema, movies } = this.state;
    return (
      <View style={{ flex: 1}}>
        <CinemaDetail
          cinema={cinema}
        />
        <MovieList
          movies={movies}
          cinemaId={cinema.id}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ cinema, movie }) => ({
  cinemas: cinema,
  movies: movie
 })

export default connect(mapStateToProps)(Cinema); // Returns a connected component
