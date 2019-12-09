import React from 'react';
import { View, Text, Button } from 'react-native';
import MovieList from '../../components/movielist'
import styles from '../../views/main/styles'
import { getUpcomingMovies } from '../../services/requestService'

class UpcomingMovies extends React.Component {
  state = {
    movies: []
    }
  async componentDidMount() {
    await this._fetchItems()
  }
  async _fetchItems() {
    const { navigation } = this.props
    const movies = await getUpcomingMovies()
    for (let i = 0; i < movies.length; i++) {
      movies[i].genres = this.genresToString(movies[i].genres)
    }
    this.setState({ movies: movies })
  }

  genresToString(genres) {
    let retString = ""
    for (let i = 0; i < genres.length; i++) {
      if ( i === genres.length - 1 ){
        retString += genres[i].Name
      } else {
        retString += genres[i].Name + ", "
      }
    }
    return retString
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#6ea6ff',
      },
      headerTintColor: '#fff',
      headerTitle: 'Upcoming Movies',
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <View style={{ flex: 1}}>
        <MovieList
          movies={movies}
        />
      </View>
    )
  }
}

export default UpcomingMovies; // Returns a connected component
