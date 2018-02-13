import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Segment } from 'semantic-ui-react'
import Appartment from '../appartment/Appartment';
import styles from './floor.scss';

const propTypes = {
    floor: PropTypes.number,
    color: PropTypes.string,
    appartments: PropTypes.array
}
class Floor extends Component {
    render() {
        const { appartments } = this.props;
        return (
            <Segment className={styles.container}>
                {appartments.map((appartment, key) => {
                    return (
                        <Appartment
                            key={key}
                            appartmentNumber={appartment.appartmentNumber}
                            residentName={appartment.residentName}
                            paid={appartment.paid}
                            overDue={appartment.overDue}
                            closeToOverDue={appartment.closeToOverDue}
                            onTime={appartment.onTime} />
                    )
                })}
            </Segment>
        )

    }
}

Floor.propTypes = propTypes;
export default Floor;