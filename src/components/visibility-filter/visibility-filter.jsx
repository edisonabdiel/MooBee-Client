import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap';

import { setFilter } from '../../actions/actions';

const visibilityFilterInput = (props) => {


    return <Form.Control
        conChange={e => props.setFilter(e.target.value)}
        value={props.visibilityFilter}
        placeholder="filter"
        />
}

export default connect(null, { setFilter })(visibilityFilterInput);
