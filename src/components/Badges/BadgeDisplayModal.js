import React, { Component } from 'react'
import { Button, Header, Image, Modal, Segment, Item } from 'semantic-ui-react'
import axios from 'axios'

class ModalExampleDimmer extends Component {
    state = {
        achievements: [],
        trophies: []
    }
    componentDidMount() {
        axios.get( '/api/get_achievements_badges' ).then( res => this.setState({ achievements: res.data } ) )
        axios.get( '/api/get_trophy_badges' ).then( res => this.setState({ trophies: res.data } ) )
    }

    render() {
        console.log('state', this.state);
        return (
            <div>
                <Modal dimmer open={this.props.open} onClose={this.props.close}>
                    <Modal.Header>Badges!</Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                            <Segment.Group horizontal>
                                <Segment>
                                    <Header>Achievements</Header>
                                    <Segment basic>
                                        <Item>
                                        <Item.Content>
                                                <Item.Header as='a'>Header</Item.Header>
                                                <Item.Meta>Description</Item.Meta>
                                                <Item.Description>
                                                    What is up?
                                                </Item.Description>
                                                <Item.Extra>Additional Details</Item.Extra>
                                            </Item.Content>
                                        </Item>
                                </Segment>
                                </Segment>
                            <Segment>
                                <Header>Trophies</Header>
                                <Segment>
                                    <p>what is up</p>
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

export default ModalExampleDimmer