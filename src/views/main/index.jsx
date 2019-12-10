import React from 'react';
import { View, Text, Button } from 'react-native';
import CinemaList from '../../components/cinemalist';
import styles from '../../views/main/styles'
import { connect } from 'react-redux'

class Main extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#6ea6ff',
      },
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('UpcomingMovies', { })}
          title="Upcoming Movies"
        />
      ),
      headerTintColor: '#fff',
      headerTitle: 'Cinemas',
    }
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <CinemaList
          cinemas={ this.props.cinemas }
        />
      </View>
    )
  }
}


const mapStateToProps = ({ cinema }) => ({ cinemas: cinema })


export default connect(mapStateToProps)(Main); // Returns a connected component
