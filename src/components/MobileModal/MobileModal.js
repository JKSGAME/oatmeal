import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Button, Modal, Grid, Segment } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// users in state might need to be put in redux, for other componenets to have sorted da

class MobileModal extends Component {

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

    componentDidMount() {
        axios.get('/api/viewmore/1').then(res => {
            // console.log('res.data', res.data);
            let userArr = []
            res.data.map((e, i) => {
                // let standingsObj = eval('(' + e.standings + ')')
                let standingsObj = JSON.parse(e.standings)
                return userArr.push({
                    index: i,
                    userId: e.user_id,
                    name: e.user_name,
                    team: e.team,
                    kpi: e.kpi,
                    standings: standingsObj[e.user_id],
                    challengeTypeId: e.challenge_type_id
                })
            })
            let orderedUsers = _.orderBy(userArr, ['standings.dialsKPI'], ['desc'])
            this.setState({
                list: res.data,
                users: orderedUsers,
                kpiTitle: res.data[0].kpi
            })
        })
    }

    render() {
        const { open } = this.state

        return (
            <div className='MobileModal'>
                <Button onClick={this.show('blurred')}>View More</Button>
                <Modal dimmer open={open} onClose={this.close}>
                    <Modal.Header>Full Current Standings List</Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                            <Grid>
                                <Grid.Row columns={1} only='mobile'>
                                    <Grid.Column>
                                        {this.state.users.map((e, i) => {
                                           return <Segment key={e.userId}><p>{i + 1} {e.name} {e.kpi}: {e.standings.dialsKPI}</p></Segment>
                                        })}
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
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

export default MobileModal;