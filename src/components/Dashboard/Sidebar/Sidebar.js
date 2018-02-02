import React, { Component } from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class SideBar extends Component {

  render() {
    return (
      <div>
          <Sidebar as={Menu} width='thin' visible icon='labeled' vertical inverted>
            <Link to='/' ><Menu.Item name='home'><Icon name='home' /></Menu.Item></Link>
            <Link to=''><Menu.Item name='gamepad'><Icon name='user circle outline' /></Menu.Item></Link>
            {/* gift */}
            <Link to='/rewards'><Menu.Item name='camera'><Icon name='dollar' /></Menu.Item></Link>
            <Link to='/badges'><Menu.Item name='gamepad'><Icon name='trophy' /></Menu.Item></Link>
            <Link to='/dummycrm'><Menu.Item name='gamepad'><Icon name='address card outline' /></Menu.Item></Link>
            <Menu.Item name='gamepad'><Icon name='protect' /></Menu.Item>
          </Sidebar>
      </div>
    )
  }
}

export default SideBar