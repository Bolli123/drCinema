import React from 'react';
import { View, Text} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

const Cinema = ({
  cinema
}) => (
  <View>
    <View style={styles.container}>
      <View style={styles.nameBorder}>
        <Text style={styles.name}>
          {cinema.name}
        </Text>
      </View>
      <Text style={styles.description}>
        {cinema.description}
      </Text>
      <Text style={styles.address}>
        {cinema.address},
        {cinema.city}
      </Text>
      <Text style={styles.address}>
        {cinema.phone}
      </Text>
      <Text style={styles.address}>
        {cinema.website}
      </Text>
    </View>
  </View>
);

Cinema.propTypes = {
  cinema: PropTypes.shape({
    name: PropTypes.string,
    website: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default withNavigation(Cinema);
