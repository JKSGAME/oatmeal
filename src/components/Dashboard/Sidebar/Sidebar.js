import React, { Component } from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import BadgeDisplayModal from '../../Badges/BadgeDisplayModal'


class SideBar extends Component {
  state = { open: false, open2: false }
  show = dimmer => () => this.setState({ dimmer, open: true })
  show2 = dimmer => () => this.setState({ dimmer, open2: true })
  close = () => this.setState({ open: false })
  close2 = () => this.setState({ open2: false })
  render() {
    return (
      <div>
        <Sidebar as={Menu} width='thin' visible icon='labeled' vertical inverted>
          <Link to='/' ><Menu.Item name='home'><Icon name='home' /></Menu.Item></Link>
          <Link to=''><Menu.Item name='profile'><Icon name='user circle outline' /></Menu.Item></Link>
          <Link to='/rewards'><Menu.Item name='rewards'><Icon name='dollar' /></Menu.Item></Link>
          <Menu.Item name='badges' onClick={this.show('false')} ><Icon name='trophy' /><BadgeDisplayModal open={this.state.open} close={this.close} /></Menu.Item>
          <Link to='/dummycrm'><Menu.Item name='crm'><Icon name='address card outline' /></Menu.Item></Link>
          <Link to='/createBadge'><Menu.Item name='create-badges' ><Icon name='protect' /></Menu.Item></Link>
        </Sidebar>
      </div>
    )
  }
}

export default SideBar