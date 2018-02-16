// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ImmutablePropTypes from 'react - immutable - proptypes';
import { Loader } from 'semantic-ui-react'
import Message from './Message';
import style from './forum.scss';

const propTypes = {
    messages: ImmutablePropTypes.list
}
class Forum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }

    }

    render() {
        const { messages } = this.props;

        return (
          <div>
                <Loader disabled />
                {
                    messages.map(mes => 
                    <Message data={mes}/>    
                    )
                }
          </div>
        )
    }
}

Forum.propTypes = propTypes;
export default Forum