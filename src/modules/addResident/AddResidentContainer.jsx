import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { saveResident, getResidents } from '../../managers/Residents';
import AddResident from './AddResident';

const propTypes = {
    floor: PropTypes.number
}
class AddResidentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            error: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(resident) {    
        //saveResident(resident);
        //getResidents()
        //.then(res=>console.log(res))
        saveResident(resident);
    }
    render() {
        return (
            <AddResident onSubmit={this.handleSubmit}/>
        )
    }
}


export default AddResidentContainer;