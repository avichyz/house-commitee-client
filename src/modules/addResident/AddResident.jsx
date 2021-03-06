import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button, Form, Message } from 'semantic-ui-react'
import { SaveResident } from '../../managers/Residents';
import styles from './addResident.scss';

const propTypes = {
    onSubmit: PropTypes.func,
    floor: PropTypes.number
}
class AddResident extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            error: false,
            name: '',
            lastName: '',
            appartment: '',
            email: '',
            cellPhone: '',
            homePhone: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e, { name, value }) =>
        this.setState({ [name]: value })

    handleSubmit = () => {
        let newResident = 
        {
                name: this.state.name,
                lastName: this.state.lastName,
                appartment: this.state.appartment,
                email: this.state.email,
                phoneNumber1: this.state.cellPhone,
                phoneNumber2: this.state.homePhone
        }
        this.props.onSubmit(newResident);
    }
    render() {
        const { name, lastName, appartment, email, cellPhone, homePhone } = this.state

        return (
            <Form success className={styles.form} onSubmit={this.handleSubmit}>
                <Form.Input label='שם' name='name' value={name} onChange={this.handleChange} />
                <Form.Input label='שם משפחה' name='lastName' value={lastName} onChange={this.handleChange} />
                <Form.Input label='דירה' name='appartment' value={appartment} onChange={this.handleChange} />
                <Form.Input label='טלפון' name='phone' value={cellPhone} onChange={this.handleChange} />
                <Form.Input label='נייד' name='cellPhone' value={homePhone} onChange={this.handleChange} />
                {this.state.success &&
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
                <Button
                    className={styles.submit}
                    color='facebook'
                    floated='left'
                    onClick={this.props.handleSubmit}
                >שמור</Button>
            </Form>
        )
    }
}


export default AddResident;