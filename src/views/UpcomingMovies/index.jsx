import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import MovieList from '../../components/movielist'
import styles from '../../views/main/styles'
import { connect } from 'react-redux'

class UpcomingMovies extends React.Component {

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
    return (
      <ScrollView>
        <View style={{ flex: 1}}>
          <MovieList
            movies={this.props.upcomingMovies}
          />
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ upcomingMovie }) => ({
  upcomingMovies: upcomingMovie
 })

export default connect(mapStateToProps)(UpcomingMovies); // Returns a connected component
