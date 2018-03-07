import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Floor from '../floor/Floor'
import { fromJS, list } from 'immutable';
import styles from './building.scss';

const data = [
    {
        floorNumber: 1,
        appartments: [
            {
                appartmentNumber: 1,
                isOwner: true,
                residentName: 'אליהו אוחנה',
                phoneNumber1: '0524450941',
                phoneNumber2: '0503145753',
                onTime: true
            },
            {
                appartmentNumber: 2,
                isOwner: true,
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
                isOwner: true,
                residentName: 'אלי ביטון',
                phoneNumber1: '0524450941',
                phoneNumber2: '0503145753',
                paid: true
            },
            {
                appartmentNumber: 7,
                isOwner: true,
                residentName: 'נתי אסולין',
                phoneNumber1: '0524450941',
                phoneNumber2: '0503145753',
                overDue: true
            },
            {
                appartmentNumber: 8,
                isOwner: true,
                residentName: 'דוד בוגנים',
                phoneNumber1: '0524450941',
                phoneNumber2: '0503145753',
                onTime: true
            }
            ,
            {
                appartmentNumber: 9,
                isOwner: true,
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
        const imData = fromJS(data).sort((a, b) => {
            if (a.get('floorNumber') < b.get('floorNumber')) { return 1; }
            if (a.get('floorNumber') > b.get('floorNumber')) { return -1; }
            if (a.get('floorNumber') === b.get('floorNumber')) { return 0; }
        });

        return (
            <div className={styles.container}>
                {
                    imData.map((floor, key) => {
                        return (
                            <Floor
                                key={key}
                                appartments={floor.get('appartments')}
                                floor={floor.get('floorNumber')} />
                        )
                    })
                }
            </div>
        )

    }
}

Building.propTypes = propTypes;
export default Building;