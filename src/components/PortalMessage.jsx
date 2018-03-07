import React, { Component } from 'react'
import { Button, Header, Segment, TransitionablePortal } from 'semantic-ui-react'

export default class PortalMessage extends Component {
    state = { open: false }

    handleOpen = () => this.setState({ open: true })

    handleClose = () => this.setState({ open: false })

    render() {
        const { messageHeader, messageContent } = this.props;
        const { open } = this.state

        return (
            <TransitionablePortal
                closeOnTriggerClick
                onOpen={this.handleOpen}
                onClose={this.handleClose}
                openOnTriggerClick
                trigger={(
                    <Button
                        content={open ? 'Close Portal' : 'Open Portal'}
                        negative={open}
                        positive={!open}
                    />
                )}
            >
                <Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
                    <Header>{messageHeader}</Header>
                    {messageContent}
                </Segment>
            </TransitionablePortal>
        )
    }
}
