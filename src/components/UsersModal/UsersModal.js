import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Button, Modal, Table } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';


class UsersModal extends Component {

    constructor() {
        super()
        this.state = {
            open: false,
            list: [],
            column: null,
            direction: null,
            users: [],
            kpiTitle: ''
        }

    }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    handleSort = clickedColumn => () => {
        const { column, users, direction } = this.state

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                users: _.sortBy(users, [clickedColumn]),
                direction: 'ascending',
            })

            return
        }

        this.setState({
            users: users.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }

    componentDidMount() {
        axios.get('/api/viewmore').then(res => {
            // console.log('res.data', res.data);
            let userArr = []
            res.data.map( (e, i) => {
                let standingsObj = eval('(' + e.standings + ')')
                userArr.push({
                    userId: e.user_id,
                    name: e.user_name,
                    team: e.team,
                    kpi: e.kpi,
                    standings: standingsObj[e.user_id]
                })
            })
            let orderedUsers = _.orderBy(userArr, ['standings.salesKPI'], ['desc'])
            this.setState({
                list: res.data,
                users: orderedUsers,
                kpiTitle: res.data[0].kpi
            })
        })
    }
    
    render() {
        const { open, column, direction, kpiTitle } = this.state
        // console.log('state in render', this.state);

        return (
            <div className='UsersModal'>
                <Button onClick={this.show('blurred')}>View More</Button>
                <Modal dimmer open={open} onClose={this.close}>
                    <Modal.Header>Full Current Standings List</Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                            <Table selectable sortable celled size='large'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell sorted={column === 'position' ? direction : null} onClick={this.handleSort('position')}>
                                            Position
                                        </Table.HeaderCell>
                                        <Table.HeaderCell sorted={column === 'name' ? direction : null} onClick={this.handleSort('name')}>
                                            Name
                                        </Table.HeaderCell>
                                        <Table.HeaderCell sorted={column === 'team' ? direction : null} onClick={this.handleSort('team')}>
                                            Team
                                        </Table.HeaderCell>
                                        <Table.HeaderCell sorted={column === 'sales' || column === 'dials' ? direction : null} onClick={this.handleSort('sales' || 'dials')}>
                                           {  kpiTitle === 'Sales' || kpiTitle === 'Dials' ? kpiTitle : 'N/A'}
                                        </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {_.map(this.state.users, ({ userId, name, team, kpi, position, standings }) => (
                                        <Table.Row key={userId} onClick={() => this.props.history.push('/leaderboard/:id')}>
                                        <Table.Cell>{position}</Table.Cell>
                                        <Table.Cell>{name}</Table.Cell>
                                        <Table.Cell>{team}</Table.Cell>
                                        <Table.Cell>{standings.salesKPI}</Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.close}>Close</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default UsersModal;