import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Table, Button, Modal, Header } from 'semantic-ui-react'
import styles from './residents.scss';
import AddResidentContainer from '../addResident/AddResidentContainer';

const propTypes = {
    data: PropTypes.array
}
class Residents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            column: null,
            direction: null,
            addResidentDialogOpened: false
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
            <div className={styles.container}>
                {
                    this.state.addResidentDialogOpened &&
                    <AddResidentContainer /> ||
                    <div className={styles.container}>
                    <Button onClick={() => this.setState({ addResidentDialogOpened: true })} />
                    <Table celled compact sortable definition className={styles.table}>
                        <Table.Header fullWidth>
                            <Table.Row>
                                {
                                    this.props.columns.slice(0).reverse().map((column, index) => {
                                        return <Table.HeaderCell key={index}>{column}</Table.HeaderCell>
                                    })
                                }
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                this.props.data.map((row, index) => {
                                    return (
                                        <Table.Row key={index}>
                                            <Table.Cell>{row.phoneNumber2}</Table.Cell>
                                            <Table.Cell>{row.phoneNumber1}</Table.Cell>
                                            <Table.Cell>{row.appartment}</Table.Cell>
                                            <Table.Cell>{row.name}</Table.Cell>
                                            <Table.Cell collapsing>
                                                <Checkbox slider defaultChecked={row.isOwner} />
                                            </Table.Cell>
                                        </Table.Row>

                                    );
                                })
                            }
                        </Table.Body>
                    </Table>
                    </div>
                }
                <Modal 
                className={styles.modal}
                trigger={
                <Button 
                color='facebook' 
                floated='right'
                className={styles.addResident}>
                הוסף דייר
                </Button>
                }>
                    <Modal.Header className={styles.modalHeader}>דייר חדש</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <AddResidentContainer/>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>

            </div>
        )
    }
}

Residents.propTypes = propTypes;
export default Residents