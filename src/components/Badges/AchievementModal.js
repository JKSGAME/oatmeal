import React, { Component } from 'react'
import { Popup, Button, Header, Modal, Dropdown, Input, Form, TextArea, Segment, Divider, Card } from 'semantic-ui-react'
import DropzoneComponent from 'react-dropzone-component'
import axios from 'axios';


var componentConfig = { postUrl: 'no-url' };
var djsConfig = { autoProcessQueue: false }
var eventHandlers = { addedfile: (file) => console.log(file) }

class AchievementModal extends Component {
    state = {
        scoreTypes: [],
        rewards: [],
        selectedScoreType: '',
        selectedRewardType: '',
    }

    show2 = () => this.props.function()
    close2 = () => this.props.function2()

    dataGrabber = (propName, value) => { this.setState({ [propName]: value }) }

    componentDidMount() {
        axios.get('/api/get_achievement_scoreType').then( res => this.setState( { scoreTypes: res.data } ) )
        axios.get('/api/get_reward_type').then( res => {
            console.log('res', res);
            this.setState( { rewards: res.data } )} )
    }

    render() {
        let { scoreTypes, rewards } = this.state
        console.log(this.state);

        // const scoreTypeInfo = scoreTypes.map( ( e, i ) => { id: e. , key: e. , text: e. , value: e. , })
        return (
            <div>
                <Popup wide on='hover' position='bottom left' trigger={<Button onClick={this.show2('false')}>Achievement</Button>} >
                    <Popup.Content>
                        An achievement badge is given to those who hit a specified benchmark. Set some easy benchmarks and get harder while increasing their reward. Ex: Name: 5 sales in a week. Reward: 50 points.
              </Popup.Content>
                </Popup>
                <Modal dimmer size='small' open={this.props.childOpen}  >
                    <Modal.Header>Achievement Badge<Button floated='right' icon='cancel' color='red' onClick={this.props.function3} ></Button></Modal.Header>
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
                       djsConfig={djsConfig}/>
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

export default AchievementModal