import React from 'react';
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AppContainer from './src/routes';
import reducers from './src/reducers/index'
import { getAllCinemas } from './src/actions/cinemaActions'
import { getAllMovies } from './src/actions/movieActions'
import { getAllUpcomingMovies } from './src/actions/upcomingMovieAction'


class SubApp extends React.Component {
  componentDidMount() {
    this.props.getAllCinemas();
    this.props.getAllMovies();
    this.props.getAllUpcomingMovies();
  }

  render() {
    return (
      <AppContainer />
    )
  }
}

const ConnectedSubApp = connect(null, { getAllCinemas, getAllMovies, getAllUpcomingMovies })(SubApp);

export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <ConnectedSubApp />
    </Provider>
  );
}
