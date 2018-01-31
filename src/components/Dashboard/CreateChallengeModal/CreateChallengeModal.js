import React, { Component } from 'react';
import axios from 'axios';
import { Button, Header, Modal, Input, Dropdown, Divider, Form, TextArea, Grid, Segment } from 'semantic-ui-react';
import './CreateChallengeModal.css'

class CreateChallengeModal extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
            challenges: [],
            teams: [],
            modes: [],
            kpis: [],
            duration: [],
            selectedType: '',
            selectedTeam: [],
            selectedMode: '',
            selectedKPI: '',
            timeStart: '',
            timeEnd: '',
            selectedDur: '',
            selectedRD: '',
            challengeType: []
        }
        this.submit = this.submit.bind(this)
        this.dataGrabber = this.dataGrabber.bind(this)
        this.addChallenge = this.addChallenge.bind(this)
    }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({
        open: false,
        selectedTeam: [],
        selectedType: '',
        selectedMode: '',
        selectedKPI: '',
        timeStart: '',
        timeEnd: '',
        selectedDur: '',
        selectedRD: ''
    })

    submit() {
        // console.log(this.name.inputRef.value);
        console.log(this.name.value);
        console.log(this.desc.ref.value);
        console.log(this.targetValue.inputRef.value);
        console.log(this.rewardValue.inputRef.value);
        console.log('state', this.state);
        this.addChallenge()
        // send data to db, send data in fields, then this.name = ''
        this.setState({
            open: false,
            selectedTeam: [],
            selectedType: '',
            selectedMode: '',
            selectedKPI: '',
            timeStart: '',
            timeEnd: '',
            selectedDur: '',
            selectedRD: ''
        })
    }


    dataGrabber(propName, value) {
        // console.log('value', value);
        this.setState({
            [propName]: value
        })
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    addChallenge() {
        let chal = {
            Name: this.name.inputRef.value,
            Type: this.state.selectedType,
            Team: this.state.selectedTeam,
            Duration: this.state.selectedDur,
            TimeStart: this.state.timeStart,
            TimeEnd: this.state.timeEnd,
            Desc: this.desc.ref.value,
            Mode: this.state.selectedMode,
            KPI: this.state.selectedKPI,
            TargetValue: this.targetValue.inputRef.value,
            RewardValue: this.rewardValue.inputRef.value,
            RewardDist: this.state.selectedRD
        }

        axios.post('/api/create', chal).then(res => {
            console.log('res', res.data)
        })
    }


    componentDidMount() {
        axios.get('/api/challenges').then(res => {
            this.setState({
                challenges: res.data
            })
        })

        axios.get('/api/teams').then(res => {
            this.setState({
                teams: res.data
            })
        })

        axios.get('/api/modes').then(res => {
            this.setState({
                modes: res.data
            })
        })

        axios.get('/api/kpi').then(res => {
            this.setState({
                kpis: res.data
            })
        })

        axios.get('/api/duration').then(res => {
            this.setState({
                duration: res.data
            })
        })

        axios.get('/api/challenge_type').then(res => {
            this.setState({
                challengeType: res.data
            })
        })
    }

    render() {
        const { open, dimmer, selectedMode, selectedKPI } = this.state

        const challengeType = this.state.challengeType.map((e, i) => {
            return { key: e.challenge_type, text: e.challenge_type, value: e.id }
        })

        const teamInfo = this.state.teams.map((e, i) => {
            return { key: e.team, text: e.team, value: e.id }
        })

        const modeInfo = this.state.modes.map((e, i) => {
            return { id: e.id, key: e.mode, text: e.mode, value: e.mode }
        })

        const kpiInfo = this.state.kpis.map((e, i) => {
            return { id: e.id, key: e.kpi, text: e.kpi, value: e.kpi }
        })

        const durationInfo = this.state.duration.map((e, i) => {
            return { text: e.duration, value: e.id }
        })

        const timeOption = [{ key: 0, text: '1:00', value: '1:00' }, { key: 1, text: '2:00', value: '2:00' }, { key: 2, text: '3:00', value: '3:00' }]
        const rewardOption = [{ key: 0, text: 'Points', value: 'Points' }, { key: 1, text: 'Gift Card', value: 'Gift Card' }, { key: 2, text: 'PTO', value: 'PTO' }]

        return (
            <div>
                <Button onClick={this.show('blurring')}>Create Challenge</Button>
                <Modal dimmer={dimmer} open={open} onClose={this.close} size={'large'}>
                    <Modal.Header>Create Challenge</Modal.Header>
                    <Modal.Content scrolling={true}>
                        <Modal.Description>

                            <Input label={'Challenge Name'} placeholder='Type here' ref={name => this.name = name} />
                            <Divider hidden={true} />
                            <Grid stackable columns={2}>

                                <Grid.Column>

                                    <Segment basic>

                                        <Header size='small'>Challenge Type</Header>
                                        <Dropdown placeholder='Select Challenge Type' floating search selection onChange={(e, d) => this.dataGrabber('selectedType', d.value)} options={challengeType} text={challengeType.text} value={challengeType.value} labeled={true} />
                                        <Header size='small'>Teams</Header>
                                        <Dropdown placeholder='Select Teams Involved' floating search selection  onChange={(e, d) => {
                                            console.log('d.value', d.value);
                                            this.dataGrabber('selectedTeam', d.value)}} options={teamInfo} text={teamInfo.text} />

                                    </Segment>

                                </Grid.Column>

                                <Grid.Column>
                                    <Segment.Group horizontal >
                                        <Grid columns={2} >

                                            <Grid.Column>
                                                <Segment basic>
                                                    <Header size='small'>Start Time</Header>
                                                    <Dropdown placeholder='Time Start' floating search selection options={timeOption} onChange={(e, d) => this.dataGrabber('timeStart', d.value)} />
                                                    <Header size='small'>End Time</Header>
                                                    <Dropdown placeholder='Time End' floating search selection options={timeOption} onChange={(e, d) => this.dataGrabber('timeEnd', d.value)} />
                                                </Segment>
                                            </Grid.Column>

                                            <Divider vertical hidden />

                                            <Grid.Column>
                                                <Segment basic>
                                                    <Header size='small'>Duration</Header>
                                                    <Dropdown placeholder='Duration' floating search selection options={durationInfo} value={durationInfo.value} onChange={ (e, d) => this.dataGrabber('selectedDur', d.value)} text={durationInfo.text}/>
                                                </Segment>
                                            </Grid.Column>


                                        </Grid>
                                    </Segment.Group>

                                </Grid.Column>

                            </Grid>

                            <Segment basic>
                                <Form >
                                    <Form.Field>
                                        <label>Challenge Description</label>
                                        <TextArea autoHeight placeholder='Leave a Description of the Challenge Here' ref={desc => this.desc = desc} />
                                    </Form.Field>
                                </Form>
                            </Segment>
                            <Divider hidden />
                            <Divider />
                            <Divider hidden />

                            <Grid stackable columns={3}>
                                <Grid.Column>
                                    <Segment basic>
                                        <Header size='small'>Challenge Mode</Header>
                                        <Dropdown placeholder='Select Challenge Mode' floating search selection value={selectedMode} onChange={(e, d) => this.dataGrabber('selectedMode', d.value)} options={modeInfo} text={selectedMode} labeled={true} />
                                    </Segment>
                                </Grid.Column>
                                <Divider vertical />
                                <Grid.Column>
                                    <Segment basic>
                                        <Header size='small'>KPI</Header>
                                        <Dropdown placeholder='Select KPI' floating search selection value={selectedKPI} onChange={(e, d) => this.dataGrabber('selectedKPI', d.value)} options={kpiInfo} text={selectedKPI} labeled={true} label='Challenge' />
                                    </Segment>
                                </Grid.Column>
                                <Divider vertical />
                                <Grid.Column>
                                    <Segment basic>
                                        <Header size='small'>Target Value</Header>
                                        <Input placeholder='Target-Value/Goal' ref={targetValue => this.targetValue = targetValue} />
                                    </Segment>
                                </Grid.Column>
                            </Grid>
                            <Divider hidden />
                            <Divider />
                            <Divider hidden />

                            <Grid stackable columns={2}>
                                <Grid.Column>
                                    <Segment basic>
                                        <Header size='small'>Reward Value</Header>
                                        <Input placeholder='Reward Value' ref={rewardValue => this.rewardValue = rewardValue} />
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment basic>
                                        <Header size='small'>Reward Distribution</Header>
                                        <Dropdown placeholder='Reward Distribution' floating search selection options={rewardOption} onChange={(e, d) => this.dataGrabber('selectedRD', d.value)} />
                                    </Segment>
                                </Grid.Column>
                            </Grid>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.close}>Cancel</Button>
                        <Button positive icon='checkmark' labelPosition='right' content="Submit Challenge" onClick={this.submit} />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default CreateChallengeModal