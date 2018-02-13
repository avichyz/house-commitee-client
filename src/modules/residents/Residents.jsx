import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Table } from 'semantic-ui-react'
import style from './residents.scss';

const propTypes = {
    data: PropTypes.array
}
class Residents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            column: null,
            direction: null,
        }

        this.handleSort = this.handleSort.bind(this);
    }

    handleSort(clickedColumn) {
        const { column, direction } = this.state
        const { data } = this.props;

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                data: data.sortBy(data, [clickedColumn]),
                direction: 'ascending',
            })
            return
        }

        this.setState({
            data: data.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }

    render() {
        const { column, direction } = this.state
        const { data, columns } = this.props;

        return (
            <Table celled compact sortable definition className={style.table}>
                <Table.Header fullWidth>
                    <Table.Row>
                        {
                            this.props.columns.slice(0).reverse().map(column => {
                                return <Table.HeaderCell>{column}</Table.HeaderCell>
                            })
                        }
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        this.props.data.map(row => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{row.phoneNumber2}</Table.Cell>
                                    <Table.Cell>{row.phoneNumber1}</Table.Cell>
                                    <Table.Cell>{row.appartment}</Table.Cell>
                                    <Table.Cell>{row.name}</Table.Cell>
                                    <Table.Cell collapsing>
                                        <Checkbox slider defaultChecked={row.isOwner}/>
                                    </Table.Cell>
                                </Table.Row>);
                        })
                    }
                </Table.Body>
            </Table>
        )
    }
}

Residents.propTypes = propTypes;
export default Residents