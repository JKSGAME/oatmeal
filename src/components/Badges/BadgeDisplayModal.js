import React, { Component } from 'react'
import { Button, Header, Image, Modal, Segment, Card } from 'semantic-ui-react'
import axios from 'axios'
import './BadgeDisplayModal.css'


class BadgeDisplayModal extends Component {
    state = {
        achievements: [],
        trophies: []
    }
    componentDidMount() {
        axios.get('/api/get_achievements_badges').then(res => this.setState({ achievements: res.data }))
        axios.get('/api/get_trophy_badges').then(res => this.setState({ trophies: res.data }))
    }

    render() {
        const { achievements, trophies } = this.state
        const achievementInfo = achievements.map((e, i) => {
            return (
                <div className='achievement-column' key={e.name}>
                    < Card >
                        <Card.Content>
                            <Segment.Group horizontal>
                                <Segment basic>
                            <Image floated='left' size='tiny' src={e.photo} />
                                </Segment>
                                <Segment basic>
                            <Card.Header as='h3'>{e.name}</Card.Header>
                            <Card.Description>
                                <p>{e.description}</p>
                                <p>{e.reward_value} {e.reward_type}</p>
                            </Card.Description>
                                </Segment>
                            </Segment.Group>
                        </Card.Content>
                    </Card >
                </div>
            )
        })

        const trophyInfo = trophies.map( ( e, i ) => {
            return (
                <div className='trophy-column' key={e.name}>
                < Card >
                <Card.Content>
                    <Segment.Group horizontal>
                        <Segment basic>
                    <Image floated='left' size='tiny' src={e.photo} />
                        </Segment>
                        <Segment basic>
                    <Card.Header as='h3'>{e.name}</Card.Header>
                    <Card.Description>
                        <p>{e.description}</p>
                        <p>{e.reward_value} {e.reward_type}</p>
                    </Card.Description>
                        </Segment>
                    </Segment.Group>
                </Card.Content>
            </Card >
            </div>
        )
        })

        return (
            <div>
                <Modal dimmer open={this.props.open} onClose={this.props.close}>
                    <Modal.Header>Badges!</Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                            <Segment.Group horizontal>
                                <Segment className='achievement-segment'>
                                    <Header>Achievements</Header>
                                    <Segment basic>
                                        {achievementInfo}
                                    </Segment>
                                </Segment>
                                <Segment className='trophy-segment'>
                                    <Header>Trophies</Header>
                                    <Segment basic>
                                        {trophyInfo}
                                    </Segment>
                                </Segment>
                            </Segment.Group>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.props.close}>Close</Button>
                    </Modal.Actions>
                </Modal>
            </div >
        )
    }
}

export default BadgeDisplayModal