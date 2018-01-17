import React, { Component } from 'react';
import axios from 'axios';
import { Button, Header, Image, Modal, Input, Dropdown, Divider, Grid, Segment, Form, TextArea } from 'semantic-ui-react';
import GridColumn from 'semantic-ui-react/dist/commonjs/collections/Grid/GridColumn';

class ModalExampleDimmer extends Component {
    constructor(){
        super()
        this.state = { 
            open: false,
            challenges: [],
            teams: [],
            selectedType: '',
            selectedTeam: ''
        }
        this.changeType = this.changeType.bind(this)
        this.changeTeam = this.changeTeam.bind(this)
        this.submit = this.submit.bind(this)
    }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ 
        open: false, 
        selectedTeam: '',
        selectedType: '' 
    })

    changeType(e, {value}) {
        this.setState({
            selectedType: value
        })
    }

    changeTeam(e, {value}) {
        this.setState({
            selectedTeam: value
        })
    }

    submit() {
        this.setState({
            open: false,
            selectedTeam: '',
            selectedType: ''
        })
    }

    componentDidMount() {
        axios.get('/api/challenges').then( res => {
                 this.setState({
                challenges: res.data
            })
        })

        axios.get('/api/teams').then( res => {
                 this.setState({
                teams: res.data
            })
        })
    }

    render() {
        const { open, dimmer, value, selectedTeam, selectedType } = this.state
        const challengeType = this.state.challenges.map( ( e, i ) => {
            return { id: e.id, key: e.challenge_type, text: e.challenge_type, value: e.challenge_type }
        })
        const teamInfo = this.state.teams.map( ( e, i ) => {
            return { id: e.id, key: e.team, text: e.team, value: e.team }
        })
        return (
            <div>
                <Button onClick={this.show('blurring')}>Create Challenge</Button>
                <Modal dimmer={dimmer} open={open} onClose={this.close} size={'large'}>
                    <Modal.Header>Create Challenge</Modal.Header>
                    <Modal.Content scrolling={true}>
                        <Modal.Description>
                            <Input label={'Challenge Name'} placeholder='Type here' />
                            <Divider hidden={true}/>
                            <Dropdown placeholder='Select Challenge Type' floating search selection value={selectedType} onChange={this.changeType} options={challengeType} text={selectedType} labeled={true} label='Challenge'/>
                            <Dropdown placeholder='Select Teams Involved' floating search selection value={selectedTeam} onChange={this.changeTeam} options={teamInfo} text={selectedTeam}/>
                            <Divider hidden={true} vertical/>
                            <Dropdown placeholder='Time Start' floating search selection value={''} onChange={''} options={''} text={''}/>
                            <Dropdown placeholder='Time End' floating search selection value={''} onChange={''} options={''} text={''}/>
                            <Divider hidden={true}/>
                            <Form>
                            <TextArea autoHeight placeholder='Leave a Description of the Challenge Here'/>
                            </Form>
                            <Divider/>
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

export default ModalExampleDimmer