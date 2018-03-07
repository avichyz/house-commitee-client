import React, { Component } from 'react';
import Residents from './Residents';


const residents = [
    {
        isOwner: false,
        name: 'avichay zana',
        appartment: 16,
        phoneNumber1: '0503650943',
        phoneNumber2: null
    },
    {
        isOwner: true,
        name: 'דוד ושירה לביא',
        appartment: 18,
        phoneNumber1: '0524450941',
        phoneNumber2: null
    },
    {
        isOwner: true,
        name: 'אליהו שם טוב',
        appartment: 11,
        phoneNumber1: '0543350945',
        phoneNumber2: null
    }
]

const columns = [
    'בעלים',
    'שם',
    'דירה',
    'טלפון1',
    'טלפון2',
]

class ResidentsContainer extends Component {
    render() {
        return (
            <Residents data={residents} columns={columns}/>
        )
    }
}

export default ResidentsContainer;
