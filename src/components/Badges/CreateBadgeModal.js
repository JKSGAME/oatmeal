import React, { Component } from 'react'
import { Button, Modal, Grid } from 'semantic-ui-react'
import AchievementModal from './AchievementModal'
import TrophyModal from './TrophyModal'
import Sidebar from '../Dashboard/Sidebar/Sidebar'
import { Link } from 'react-router-dom'

class CreateBadgeModal extends Component {
  state = { open: true, childOpen: false, child2Open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  show2 = dimmer => () => this.setState({ dimmer, childOpen: true })
  show3 = dimmer => () => this.setState({ dimmer, child2Open: true })
  close = () => this.setState({ open: false, childOpen: false, child2Open: false })
  close2 = () => this.setState({ childOpen: false, open: true })
  close3 = () => this.setState({ child2Open: false, open: true })

  render() {
    const { open } = this.state

    return (
      <div>
        <Sidebar/>
        <Modal dimmer size='tiny' open={open} >
          <Modal.Header>Create a Badge!</Modal.Header>
          <Modal.Content >
            <Modal.Description>
                <Grid relaxed className='test' columns={2} >
                {/* <Grid.Column></Grid.Column> */}
                    <Grid.Column floated='right' >

                    <AchievementModal function={this.show2} childOpen={this.state.childOpen} function2={this.close2} function3={this.close}/> 

                    </Grid.Column>
                    <Grid.Column floated='right' >

                    <TrophyModal function={this.show3} childOpen={this.state.child2Open} function2={this.close3} function3={this.close}/> 

                    </Grid.Column>
                    {/* <Grid.Column></Grid.Column> */}
                </Grid>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Link to='/'><Button color='black' >Close</Button></Link>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default CreateBadgeModal