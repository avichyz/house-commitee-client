import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Segment } from 'semantic-ui-react'
import Appartment from '../appartment/Appartment';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames';
import styles from './floor.scss';

const propTypes = {
    floor: PropTypes.number.isRequired,
    color: PropTypes.string,
    appartments: ImmutablePropTypes.list
}
class Floor extends Component {
    render() {
        const { appartments, floor } = this.props;
        const color = this.props.color ? this.props.color : "white";
        return (
            <div className={styles.container} style={{backgroundColor:color}}>
                <Divider horizontal className={styles.divider}>:קומה{floor}</Divider>
                <div className={styles.appartmentsContainer}>
                {appartments.map((appartment, key) => {
                    return (
                        <Appartment
                            key={key}
                            appartmentNumber={appartment.get('appartmentNumber')}
                            residentName={appartment.get('residentName')}
                            paid={appartment.get('paid')}
                            overDue={appartment.get('overDue')}
                            closeToOverDue={appartment.get('closeToOverDue')}
                            onTime={appartment.get('onTime')} />
                    )
                })}
                </div>
            </div>
        )

    }
}

Floor.propTypes = propTypes;
export default Floor;