import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Cinema from '../../components/cinema'

const n = require('normalize-strings');

const CinemaList = ({
  cinemas
}) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={1}
      data={cinemas.sort((a, b) => n(a.name).localeCompare(n(b.name), 'is'))}
      renderItem={({ item: { name, website, id } }) => {
        return (
          <Cinema
            name={name}
            id={id}
            website={website}
          />
        );
      }}
      keyExtractor={(cinema) => (`${cinema.id}`)}
    />
  </View>
);

CinemaList.propTypes = {
  cinemas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired
  })).isRequired,
}

export default CinemaList;
