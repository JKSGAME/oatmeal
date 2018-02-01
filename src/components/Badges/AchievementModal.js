import React, { Component } from 'react'
import { Popup, Button, Header, Modal, Dropdown, Input, Form, TextArea, Segment, Divider, Card, Image } from 'semantic-ui-react'
import DropzoneComponent from 'react-dropzone-component'
import axios from 'axios';


var componentConfig = { postUrl: 'no-url' };
var djsConfig = { autoProcessQueue: false }
var eventHandlers = { addedfile: (file) => console.log(file) }

class AchievementModal extends Component {
    state = {
        scoreTypes: [],
        rewards: [],
        photos: [],
        photo: '',
        selectedScoreType: '',
        selectedRewardType: '',
        selectedPhoto: ''
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
        // this.addAchievement()
        // send data to db, send data in fields, then this.name = ''
        this.setState({
            selectedScoreType: '',
            selectedRewardType: '',
            selectedPhoto: ''
        })
        this.props.function3()
    }

    addAchievement() {
        // 7 items to send to db through axios call, questions about photo id and badge type id, check naming convention
        let achievement = {
            Name: this.name.inputRef.value,
            BadgeImage: this.state.selectedPhoto,
            Desc: this.desc.ref.value,
            ScoreType: this.state.selectedScoreType,
            ScoreTarget: this.scoreTarget.inputRef.value,
            RewardType: this.state.selectedRewardType,
            RewardValue: this.rewardValue.inputRef.value
        }

        axios.post('/api/create_achievement_badge', achievement).then(res => {
            console.log('res', res.data)
        })
    }

    imageClick = (e, d) => {
        console.log('d', d);
        this.setState({
            selectedPhoto: d.value,
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

        // axios.get( '/api/get_badge_photo').then( res => {
        //     console.log('photo', res.data);
        //     this.setState( { photo: res.data } ) } )
    }

    render() {
        let { scoreTypes, rewards, photos } = this.state

        const rewardsInfo = rewards.map((e, i) => {
            return { id: e.id, key: e.id, text: e.reward_type, value: e.id }
        })

        const scoreTypeInfo = scoreTypes.map((e, i) => {
            return { id: e.id, key: e.id, text: e.score_type, value: e.id }
        })

        const photoInfo = photos.map((e, i) => {
            return { id: e.id, key: e.id, text: e.id, value: e.id, photo: e.photo }
        })

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
                       djsConfig={djsConfig}/>
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
                        <Button color='black' onClick={this.submit} >Submit</Button>
                        {/* <Button color='black' onClick={this.props.function3}>Close</Button> */}
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default AchievementModal