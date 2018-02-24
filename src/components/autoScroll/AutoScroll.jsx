import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import classNames from 'classnames';
import styles from './autoScroll.scss';

const propTypes = {
    className: PropTypes.string
}
class AutoScroll extends Component {
    render() {
        const { className } = this.props;
        const segmentClasses = classNames(styles.container, className)
        return (
            <Segment className={segmentClasses}>
                <div class="microsoft container">
                    <div class="marquee">
                    {this.props.children}
                    </div>
                </div>
            </Segment>
        )
    }
}

AutoScroll.propTypes = propTypes;
export default AutoScroll;
