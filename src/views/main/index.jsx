import React from 'react';
import { View, Text, Button } from 'react-native';
import CinemaList from '../../components/cinemalist';
import styles from '../../views/main/styles'
import { getCinemas } from '../../services/requestService'

class Main extends React.Component {
  state = {
    cinemas: [],
    }
  async componentDidMount() {
    await this._fetchItems()
  }
  async _fetchItems() {
    const cinemas = await getCinemas()
    this.setState({ cinemas: cinemas})
  }


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
    const { cinemas } = this.state;
    return (
      <View style={{ flex: 1}}>
        <CinemaList
          cinemas={ cinemas }
        />
      </View>
    )
  }
}

export default Main; // Returns a connected component
