import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Table } from 'semantic-ui-react'
import style from './forum.scss';

const propTypes = {
    data: ImmutablePropTypes.map
}
class Message extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }

    }

    render() {
        const { data } = this.props;

        return (
         <div>
             some data of  a message
         </div>
        )
    }
}

Message.propTypes = propTypes;
export default Message