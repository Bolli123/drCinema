import React from 'react';
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AppContainer from './src/routes';
import reducers from './src/reducers/index'
import { getAllCinemas } from './src/actions/cinemaActions'


class SubApp extends React.Component {
  componentDidMount() {
    this.props.getAllCinemas();
  }

  render() {
    return (
      <AppContainer />
    )
  }
}

const ConnectedSubApp = connect(null, { getAllCinemas })(SubApp);

export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <ConnectedSubApp />
    </Provider>
  );
}
