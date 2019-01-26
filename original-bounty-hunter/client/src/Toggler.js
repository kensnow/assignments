import React, { Component } from 'react'

export default class Toggler extends Component {
    constructor(){
        super();
        this.state = {
            on: true
        }

        this.toggleSwitch = this.toggleSwitch.bind(this)
    }

    toggleSwitch(){
        this.setState( ps => {
            on: !ps
        })
    }    

    render() {
        const {on} = this.state
        return (
            this.props.children({
                on,
                toggle: this.toggleSwitch
            })
        )
    }
}

const withToggler = C => props => (
    <withToggler>
      {containerProps => <C  {...props} {...containerProps} />}
    </withToggler>
  )