import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';

import './index.scss';

class MooBee extends React.Component {
    render() {
      return (
        <Container fluid>
          <MainView/>
        </Container>
      );
    }
}
  
const container = document.getElementsByClassName('app-container')[0];

ReactDOM.render(React.createElement(MooBee), container);
