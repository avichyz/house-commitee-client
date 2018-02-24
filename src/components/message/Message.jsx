import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styles from './message.scss';

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
            <div className={styles.container}>
                <div className={styles.writer}>
                    {data.get('writerName')}
                </div>
                <div className={styles.header}>
                    {data.get('header')}
                </div>
                <div className={styles.content}>
                    {data.get('content')}
                </div>
            </div>
        )
    }
}

Message.propTypes = propTypes;
export default Message