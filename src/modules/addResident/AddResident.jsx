import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button, Form, Message } from 'semantic-ui-react'
import styles from './addResident.scss';

const propTypes = {
    floor: PropTypes.number
}
class AddResident extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            error: false
        }
    }
    render() {
        return (
            <div className={styles.container}>
            <Form success className={styles.form}>
                <Form.Input label='בניין' />
                <Form.Input label='דירה' />
                <Form.Input label='שם' />
                <Form.Input label='שם משפחה' />
                <Form.Input label='טלפון' />
                <Form.Input label='נייד' />
                {this.state.succes &&
                <Message
                    success
                    header='Form Completed'
                    content="You're all signed up for the newsletter"
                />}
                {this.state.error && 
                <Message
                    success
                    header='Form failed'
                    content="You're not signed up for the newsletter"
                />}
                <Button className={styles.submit}>שמור</Button>
            </Form>
            </div>
        )
    }
}


    export default AddResident;