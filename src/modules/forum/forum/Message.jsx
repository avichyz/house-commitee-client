import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
// import style from './forum.scss';

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
                <div>
                    {data.get('writerName')}
                </div>
                <div>
                    {data.get('header')}
                </div>
                <div>
                    {data.get('content')}
                </div>
            </div>
        )
    }
}

Message.propTypes = propTypes;
export default Message