import React, { Component } from 'react'
import { Popup, Button, Header, Image, Modal, Input, Dropdown } from 'semantic-ui-react'

const challengeTypes = [{ key: 'Agent v Agent', text: 'Agent v Agent', value: 'Agent v Agent'}, {key: 'Team v Team', text: 'Team v Team', value: 'Team v Team'}]

class ModalExampleDimmer extends Component {
    state = { open: false }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, dimmer } = this.state

        return (
            <div>
                <Button onClick={this.show('blurring')}>Create Challenge</Button>
                <Popup trigger={<Button onClick={this.show(false)}>None</Button>}>
                    <Popup.Header>Heads up!</Popup.Header>
                    <Popup.Content>
                        By default, a Modal closes when escape is pressed or when the dimmer is
              clicked. Setting the dimmer to "None" (dimmer={'{'}false{'}'}) means that there is no
              dimmer to click so clicking outside won't close the Modal. To close on
              outside click when there's no dimmer, you can pass the "closeOnDocumentClick" prop.
            </Popup.Content>
                </Popup>

                <Modal dimmer={dimmer} open={open} onClose={this.close} size={'large'}>
                    <Modal.Header>Create Challenge</Modal.Header>
                    <Modal.Content scrolling={true}>
                        <Modal.Description>
                            <Header>Default Profile Image</Header>
                            <Input label={'Challenge Name'} placeholder='Type here' />
                            <Dropdown button
                            floating
                            labeled
                            options={challengeTypes}
                            search
                            text='Select Challenge Type'/>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.close}>
                            Nope
              </Button>
                        <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default ModalExampleDimmer