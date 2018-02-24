// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Loader } from 'semantic-ui-react'
import AutoScroll from '../../../components/autoScroll/AutoScroll';
import Message from '../../../components/message/Message';
import styles from './forum.scss';

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
            <div className={styles.container}>
                <Loader disabled />
                <AutoScroll className={styles.autoScroll}>
                {
                    messages.map((mes, index) =>
                        <Message
                            key={index}
                            data={mes} />
                    )
                }
                </AutoScroll>
            </div>
        )
    }
}

Forum.propTypes = propTypes;
export default Forum