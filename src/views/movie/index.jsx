import React from 'react';
import { View, Text, Button } from 'react-native';
import MovieDetail from '../../components/moviedetail';
import styles from '../../views/main/styles'
import { connect } from 'react-redux'


class Movie extends React.Component {
  state = {
    movie: {},
    showtimes: []

    }
  async componentDidMount() {
    await this._fetchItems()
  }

  async _fetchItems() {
    let showtimes = []
    let movie = {}
    const { navigation } = this.props
    const movieId = navigation.getParam('id', '')
    const cinemaId = navigation.getParam('cinemaId', '')
    if (cinemaId === null) {
      await this.getUpcomingMovie(movieId)
    } else {
      await this.getMovie(movieId, cinemaId)
    }
  }

  async getMovie(id, cinemaId) {
    let showtimes = []
    let movie = {}
    const movies = this.props.movies
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id === id) {
        movie = movies[i]
        for (let j = 0; j < movies[i].showtimes.length; j++) {
          if (movies[i].showtimes[j].cinema.id === cinemaId) {
            showtimes = movies[i].showtimes[j].schedule
            break
          }
        }
        break
      }
    }
    this.setState({
      movie: movie,
      showtimes: showtimes
      })
  }
  async getUpcomingMovie(id) {
    let movie = {}
    const movies = this.props.upcomingMovies
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id === id) {
        movie = movies[i]
        break
      }
    }
    this.setState({
      movie: movie,
      })
    }


  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#6ea6ff',
      },
      headerTintColor: '#fff',
      headerTitle: 'Movie',
    }
  }

  render() {
    const { movie, showtimes } = this.state
    return (
      <View style={{ flex: 1}}>
        <MovieDetail
          movie={movie}
          showtimes={showtimes}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ movie, upcomingMovie }) => ({
  movies: movie,
  upcomingMovies: upcomingMovie
 })

export default connect(mapStateToProps)(Movie);
