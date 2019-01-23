import React, { Component, createContext } from 'react'

export const {Consumer, Provider} = createContext()

export default class ThemeProvider extends Component {
    constructor(){
        super();
        this.state = {
            lightTheme:true
        }
        this.changeTheme = this.changeTheme.bind(this)

    }

    changeTheme(){
        this.setState(ps => ({
            lightTheme: !ps.lightTheme
        })) 
    }



    render() {
        const themeContext = {
            lightTheme: this.state.lightTheme,
            changeTheme: this.changeTheme
        }
        return (
            <Provider value={themeContext}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withThemeContext = Component => ComponentProps => (
    <Consumer>
        {value => <Component {...value}{...ComponentProps} />}
    </Consumer>
)