import React from 'react';
import { View, Text, Button } from 'react-native';
import MovieDetail from '../../components/moviedetail';
import styles from '../../views/main/styles'
import { getMovies } from '../../services/requestService'

class Movie extends React.Component {
  state = {
    movie: {},
    }
  async componentDidMount() {
    await this._fetchItems()
  }

  async _fetchItems() {
    const { navigation } = this.props
    const movieId = navigation.getParam('id', '')
    const movies = await getMovies()
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id === movieId) {
        movies[i].genres = this.genresToString(movies[i].genres)
        this.setState({ movie: movies[i] })
      }
    }
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
      headerTitle: 'Movie',
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <View style={{ flex: 1}}>
        <MovieDetail
          movie={movie}
        />
      </View>
    )
  }
}

export default Movie; // Returns a connected component
