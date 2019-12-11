import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

const Cinema = ({
  name, website, id, navigation: { navigate }
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => navigate('Cinema', { id })}
  >
    <View style={styles.content}>
      <Text style={styles.name}>
        {name}
      </Text>
      <Text style={styles.website}>
        {website}
      </Text>
    </View>
  </TouchableOpacity>
);

Cinema.propTypes = {
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default withNavigation(Cinema);
