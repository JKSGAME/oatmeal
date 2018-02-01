import React, { Component } from 'react'
import { Popup, Button, Header, Modal, Dropdown, Input, Form, TextArea, Segment, Divider, Card, Image } from 'semantic-ui-react'
import DropzoneComponent from 'react-dropzone-component'
import axios from 'axios'


var componentConfig = { postUrl: 'no-url' };
var djsConfig = { autoProcessQueue: false }
var eventHandlers = { addedfile: (file) => console.log(file) }

class TrophyModal extends Component {
    state = {
        scoreTypes: [],
        rewards: [],
        photos: [],
        scoreSubTypes: [],
        selectedScoreType: '',
        selectedScoreSubType: '',
        selectedRewardType: '',
        selectedPhoto: '',
        photoUrl: ''
    }


    show2 = () => this.props.function()
    close2 = () => this.props.function2()
    dataGrabber = (propName, value) => { this.setState({ [propName]: value }) }
    submit = () => {
        // console.log(this.name.inputRef.value);
        console.log('name', this.name.inputRef.value);
        console.log('desc', this.desc.ref.value);
        console.log('rewardvalue', this.rewardValue.inputRef.value);
        console.log('scoretarget', this.scoreTarget.inputRef.value);
        console.log('state', this.state);
        // this.addTrophy()
        // send data to db, send data in fields, then this.name = ''
        this.setState({
        selectedScoreType: '',
        selectedScoreSubType: '',
        selectedRewardType: '',
        selectedPhoto: ''
        })
        this.props.function3()
    }

    addTrophy() {
        // 8 items to send to db through axios call
        let trophy = {
            Name: this.name.inputRef.value,
            BadgeImage: this.state.selectedPhoto,
            Desc: this.desc.ref.value,
            ScoreType: this.state.selectedScoreType,
            ScoreSubType: this.state.selectedScoreSubType,
            ScoreTarget: this.scoreTarget.inputRef.value,
            RewardType: this.state.selectedRewardType,
            RewardValue: this.rewardValue.inputRef.value
        }

        axios.post( 'api/create_trophy_badge', trophy ).then(res => {
            console.log('res', res.data)
        })
    }

    // figure out how to get the url and id to send to db
    imageClick = (e, d) => {
        console.log('d', d);
        this.setState({
            selectedPhoto: d.value,
            photoUrl: d.value
        })
    }

    componentDidMount() {
        axios.get('/api/get_achievement_scoreType').then(res => this.setState({ scoreTypes: res.data }))

        axios.get('/api/get_reward_type').then(res => {
            this.setState({ rewards: res.data })
        })

        axios.get('/api/get_badge_photos').then(res => {
            console.log('photos', res.data);
            this.setState({ photos: res.data })
        })

        axios.get('/api/get_trophies_subtype').then(res => {
            this.setState({ scoreSubTypes: res.data })
        })
    }

    render() {
        let { scoreTypes, rewards, scoreSubTypes, photos } = this.state

        const rewardsInfo = rewards.map((e, i) => {
            return { id: e.id, key: e.id, text: e.reward_type, value: e.id }
        })

        const scoreTypeInfo = scoreTypes.map((e, i) => {
            return { id: e.id, key: e.id, text: e.score_type, value: e.id }
        })

        const scoreSubTypeInfo = scoreSubTypes.map((e, i) => {
            return { id: e.id, key: e.id, text: e.score_subtype, value: e.id }
        })

        const photoInfo = photos.map((e, i) => {
            return { id: e.id, key: e.id, text: e.id, value: e.photo, photo: e.photo }
        })

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
                                    <Input placeholder='Name' ref={name => this.name = name} />
                                </Segment>

                                <Segment basic>
                                    <Header size='small'>Badge Image</Header>
                                    <Dropdown floating search selection options={photoInfo} onChange={this.imageClick} />
                                </Segment>
                                <Segment>
                                    <Image src={this.state.selectedPhoto} size='small' />
                                </Segment>
                                {/* <Card>
                                        <Card.Content>
                                        <DropzoneComponent config={componentConfig}
                                        eventHandlers={eventHandlers}
                                        djsConfig={djsConfig} />
                                        </Card.Content>
                                    </Card> */}
                            </Segment.Group>

                            <Divider hidden />

                            <Segment basic>
                                <Form>
                                    <Form.Field>
                                        <label>Badge Description</label>
                                        <TextArea autoHeight placeholder='Leave a Description of the Badge Here' ref={desc => this.desc = desc} />
                                    </Form.Field>
                                </Form>
                            </Segment>

                            <Segment.Group horizontal >
                                <Segment basic  >
                                    <Header size='small'>Score Type</Header>
                                    <Dropdown placeholder='Score Type' floating search selection options={scoreTypeInfo} onChange={(e, d) => this.dataGrabber('selectedScoreType', d.value)} />
                                </Segment>

                                <Segment>
                                    <Header size='small'>Score Sub-Type</Header>
                                    <Dropdown placeholder='Score Sub-Type' floating search selection options={scoreSubTypeInfo} onChange={(e, d) => this.dataGrabber('selectedScoreSubType', d.value)} />
                                </Segment>

                                <Segment basic  >
                                    <Header size='small'>Score Target</Header>
                                    <Input placeholder='Score Target' ref={scoreTarget => this.scoreTarget = scoreTarget} />
                                </Segment>
                            </Segment.Group>

                            <Segment.Group horizontal >

                                <Segment basic>
                                    <Header size='small'>Reward Type</Header>
                                    <Dropdown placeholder='Reward Type' floating search selection options={rewardsInfo} onChange={(e, d) => this.dataGrabber('selectedRewardType', d.value)} />
                                </Segment>
                                <Segment basic>
                                    <Header size='small'>Reward Value</Header>
                                    <Input placeholder='Reward Value' ref={rewardValue => this.rewardValue = rewardValue} />
                                </Segment>

                            </Segment.Group>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.props.function2}>Back</Button>
                        <Button color='black' onClick={this.submit}>Submit</Button>
                        {/* <Button color='black' onClick={this.props.function3}>Close</Button> */}
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default TrophyModal