import React, { Component } from 'react'
import axios from 'axios'
import _ from 'lodash'
import { Button, Modal, Grid, Segment } from 'semantic-ui-react'
import FlipMove from 'react-flip-move'
import './MobileModal.css'

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

    componentWillReceiveProps(nextProps) {
        axios.get(`/api/viewmore/${nextProps.chalid}`).then(res => {
            let userArr = []
            res.data.map((e, i) => {
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
            let orderedUsers = () => {
                let arr = []
                if (userArr[0].kpi === 'Sales') {
                    return arr = _.orderBy(userArr, ['standings.salesKPI'], ['desc'])
                }
                else if (userArr[0].kpi === 'Dials') {
                    return arr = _.orderBy(userArr, ['standings.dialsKPI'], ['desc'])
                }
                return arr
            }
            this.setState({
                list: res.data,
                users: orderedUsers(),
                kpiTitle: res.data[0].kpi
            })
        })
    }

    render() {
        const { open, users } = this.state

        let dynamicKPI = (i) => {
            if (users[0].kpi && users[0].kpi === 'Sales') {
                return users[i].standings.salesKPI
            }
            else if (users[0].kpi && users[0].kpi === 'Dials') {
                return users[i].standings.dialsKPI
            }
        }

        return (
            <div className='MobileModal'>
                <Button className='mobileViewMoreBtn' basic onClick={this.show('blurred')}>View More</Button>
                <Modal dimmer open={open} onClose={this.close}>
                    <Modal.Header>Full Current Standings List</Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                            <Grid>
                                <Grid.Row columns={1} only='mobile'>
                                    <Grid.Column>
                                   
                                        {users.map((e, i) => {
                                           return <Segment key={e.userId}> <FlipMove><p>{i + 1} {e.name} {e.kpi}: {dynamicKPI(i)}</p></FlipMove></Segment>
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