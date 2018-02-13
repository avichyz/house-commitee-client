import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Floor from '../floor/Floor'
import styles from './building.scss';
        
const data = [
    {
        floorNumber: 1,
        appartments: [
            {
                appartmentNumber: 1,
                residentName: 'אליהו אוחנה',
                phoneNumber1: '0524450941',
                phoneNumber2: '0503145753',
                onTime: true
            },
            {
                appartmentNumber: 2,
                residentName: 'דייב הקופץ',
                phoneNumber1: '0524450941',
                phoneNumber2: '0503145753',
                closeToOverDue: true
            }
        ]
    },
    {
        floorNumber: 2,
        appartments: [
            {
                appartmentNumber: 6,
                residentName: 'אלי ביטון',
                phoneNumber1: '0524450941',
                phoneNumber2: '0503145753',
                paid: true
            },
            {
                appartmentNumber: 7,
                residentName: 'נתי אסולין',
                phoneNumber1: '0524450941',
                phoneNumber2: '0503145753',
                overDue: true
            },
            {
                appartmentNumber: 8,
                residentName: 'דוד בוגנים',
                phoneNumber1: '0524450941',
                phoneNumber2: '0503145753',
                onTime: true
            }
            ,
            {
                appartmentNumber: 9,
                residentName: 'אביחי זאנה',
                phoneNumber1: '0524450941',
                phoneNumber2: '0503145753',
                closeToOverDue: true
            }
        ]
    }
]

const propTypes = {
    floor: PropTypes.number,
    color: PropTypes.string,
    data: PropTypes.array
}
class Building extends Component {
    render() {
        return (
            <div className={styles.container}>
                {
                    data.map( (floor, key) => {
                        return <Floor key={key} appartments={floor.appartments}></Floor>
                    })
                }
            </div>
        )

    }
}

Building.propTypes = propTypes;
export default Building;