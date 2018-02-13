import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Segment, Checkbox } from 'semantic-ui-react'
import classNames from 'classnames';
import styles from './appartment.scss';

const propTypes = {
    className: PropTypes.string,
    appartmentNumber: PropTypes.number,
    residentName: PropTypes.string,
    onTime: PropTypes.bool,
    closeToOverDue: PropTypes.bool,
    overDue: PropTypes.bool,
    paid: PropTypes.bool
}
class Appartment extends Component {
    render() {
        const { appartmentNumber, residentName, closeToOverDue, onTime, overDue, paid } = this.props;
        const containerClasses = classNames(
            {
                [styles.onTime]: onTime,
                [styles.closeToOverDue]: closeToOverDue,
                [styles.overDue]: overDue,
                [styles.paid]: paid
            },
            styles.container,
            this.props.className
        )
        return (
            <Segment raised className={containerClasses}>
            <div className={styles.textContainer}>
                <div>{`דירה: ${appartmentNumber}`}</div>
                <div>{residentName}</div>
              </div>
                <Divider horizontal>שולם</Divider>
                <Checkbox toggle/>
            </Segment>
        )

    }
}

Appartment.propTypes = propTypes;
export default Appartment;