import React from 'react';
import { View, Text, Button } from 'react-native';
import MovieDetail from '../../components/moviedetail';
import styles from '../../views/main/styles'
import { connect } from 'react-redux'


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
    const movies = this.props.movies
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id === movieId) {
        this.setState({ movie: movies[i] })
      }
    }
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
    const { movie } = this.state
    return (
      <View style={{ flex: 1}}>
        <MovieDetail
          movie={movie}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ movie }) => ({
  movies: movie
 })

export default connect(mapStateToProps)(Movie);
