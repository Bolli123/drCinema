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
    <View>
      <Text>
        {cinema.name}
      </Text>
      <Text>
        {cinema.description}
      </Text>
      <Text>
        {cinema.address},
        {cinema.city}
      </Text>
      <Text>
        {cinema.phone}
      </Text>
      <Text>
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
