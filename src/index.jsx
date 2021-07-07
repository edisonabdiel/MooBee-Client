import React from 'react';
import ReactDOM from 'react-dom';
//Custom Components
import MainView from './components/main-view/main-view';
//React-Bootstrap Components
import Container from 'react-bootstrap/Container';
//Styles
import './index.scss';
//REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducers from './reducers/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(appReducers, devToolsEnhancer());

class MooBee extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Container fluid>
          <MainView />
        </Container>
      </Provider>
    );
  }
}

const container = document.getElementsByClassName('app-container')[0];

ReactDOM.render(React.createElement(MooBee), container);
