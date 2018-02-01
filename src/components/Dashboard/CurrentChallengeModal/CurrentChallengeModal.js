import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Button, Modal, Table } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';


class CurrentChallengeModal extends Component {

    constructor() {
        super()
        this.state = {
            open: false,
            challenges: [],
            column: null,
            direction: null
        }

    }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    handleSort = clickedColumn => () => {
        const { column, challenges, direction } = this.state

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                challenges: _.sortBy(challenges, [clickedColumn]),
                direction: 'ascending',
            })

            return
        }

        this.setState({
            challenges: challenges.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }

    componentDidMount() {
        axios.get('/api/fullChallengeTable').then(res => {
            this.setState({
                challenges: res.data
            })
        })
    }
    
    render() {
        const { open, column, direction } = this.state


        return (
            <div className='CurrentChallengeModal'>
                <Button onClick={this.show('blurred')}>Current Challenges</Button>
                <Modal dimmer open={open} onClose={this.close}>
                    <Modal.Header>Current Challenges</Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                            <Table selectable sortable celled size='large'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell sorted={column === 'name' ? direction : null} onClick={this.handleSort('name')}>
                                            Name
                                        </Table.HeaderCell>
                                        <Table.HeaderCell sorted={column === 'challenge_type' ? direction : null} onClick={this.handleSort('challenge_type')}>
                                            Challenge Type
                                        </Table.HeaderCell>
                                        <Table.HeaderCell sorted={column === 'team' ? direction : null} onClick={this.handleSort('team')}>
                                            Teams
                                        </Table.HeaderCell>
                                        <Table.HeaderCell sorted={column === 'mode' ? direction : null} onClick={this.handleSort('mode')}>
                                            Mode
                                        </Table.HeaderCell>
                                        <Table.HeaderCell sorted={column === 'kpi' ? direction : null} onClick={this.handleSort('kpi')}>
                                            KPI
                                        </Table.HeaderCell>
                                        <Table.HeaderCell sorted={column === 'time_start' ? direction : null} onClick={this.handleSort('time_start')}>
                                            Start Time
                                        </Table.HeaderCell>
                                        <Table.HeaderCell sorted={column === 'time_end' ? direction : null} onClick={this.handleSort('time_end')}>
                                            End Time
                                        </Table.HeaderCell>
                                        <Table.HeaderCell sorted={column === 'duration' ? direction : null} onClick={this.handleSort('duration')}>
                                            Duration
                                        </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {_.map(this.state.challenges, ({ name, challenge_type, team, kpi, mode, time_start, time_end, duration, challenge_id }) => (
                                        <Table.Row key={name} onClick={() => this.props.history.push(`/leaderboard/${challenge_id}`)}>
                                        <Table.Cell>{name}</Table.Cell>
                                        <Table.Cell>{challenge_type}</Table.Cell>
                                        <Table.Cell>{team}</Table.Cell>
                                        <Table.Cell>{mode}</Table.Cell>
                                        <Table.Cell>{kpi}</Table.Cell>
                                        <Table.Cell>{time_start} </Table.Cell>
                                        <Table.Cell>{time_end}</Table.Cell>
                                        <Table.Cell>{duration}</Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.close}>
                            Close
            </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default CurrentChallengeModal;