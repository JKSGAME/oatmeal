import React, { Component } from 'react'
import { Popup, Button, Header, Modal, Dropdown, Input, Form, TextArea, Segment, Divider, Card } from 'semantic-ui-react'
import DropzoneComponent from 'react-dropzone-component'


var componentConfig = { postUrl: 'no-url' };
var djsConfig = { autoProcessQueue: false }
var eventHandlers = { addedfile: (file) => console.log(file) }

class TrophyModal extends Component {
    state = {
        scoreTypes: [],
        rewards: [],
        scoreSubTypes: [],
        selectedScoreType: '',
        selectedScoreSubType: '',
        selectedRewardType: ''
    }
    

    show2 = () => this.props.function()
    close2 = () => this.props.function2()
    dataGrabber = (propName, value) => { this.setState({ [propName]: value }) }

    render() {

        return (
            <div>
                <Popup wide on='hover' position='bottom right' trigger={<Button content='Trophy' onClick={this.show2('false')} />} >
                    <Popup.Content>
                        A trophy badge is given to those who win challenges or duels. Rewards should be based on difficulty of the win. Ex. First to 10 dials Reward: 100 points.
          </Popup.Content>
                </Popup>
                <Modal dimmer size='large' open={this.props.childOpen}  >
                    <Modal.Header>Trophy Badge <Button floated='right' icon='cancel' color='red' onClick={this.props.function3} ></Button></Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                            <Segment.Group horizontal>

                                <Segment basic>
                                    <Header size='small'>Badge Name</Header>
                                    <Input placeholder='Name' />
                                </Segment>

                                <Segment basic>
                                    <Header size='small'>Badge Image</Header>
                                    <Card>
                                        <Card.Content>
                                            <DropzoneComponent config={componentConfig}
                                                eventHandlers={eventHandlers}
                                                djsConfig={djsConfig} />
                                        </Card.Content>
                                    </Card>
                                </Segment>
                            </Segment.Group>

                            <Divider hidden />

                            <Segment basic>
                                <Form>
                                    <Form.Field>
                                        <label>Badge Description</label>
                                        <TextArea autoHeight placeholder='Leave a Description of the Badge Here' />
                                    </Form.Field>
                                </Form>
                            </Segment>

                            <Segment.Group horizontal >
                                <Segment basic  >
                                    <Header size='small'>Score Type</Header>
                                    <Dropdown placeholder='Score Type' floating search selection />
                                </Segment>

                                <Segment>
                                    <Header size='small'>Score Sub-Type</Header>
                                    <Dropdown placeholder='Score Sub-Type' floating search selection />
                                </Segment>

                                <Segment basic  >
                                    <Header size='small'>Score Target</Header>
                                    <Input placeholder='Score Target' />
                                </Segment>
                            </Segment.Group>

                            <Segment.Group horizontal >

                                <Segment basic>
                                    <Header size='small'>Reward Type</Header>
                                    <Dropdown placeholder='Reward Type' floating search selection />
                                </Segment>
                                <Segment basic>
                                    <Header size='small'>Reward Value</Header>
                                    <Input placeholder='Reward Value' />
                                </Segment>

                            </Segment.Group>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.props.function2}>Back</Button>
                        <Button color='black'>Submit</Button>
                        {/* <Button color='black' onClick={this.props.function3}>Close</Button> */}
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default TrophyModal