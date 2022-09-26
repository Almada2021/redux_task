import React, { Component } from 'react'
import { NeoContext } from './hook/useProvider'
export default class ClassUseContext extends Component {
    render() {
        return (
                <NeoContext.Consumer>                
                    {(value) => {
                        return (<div style={{backgroundColor: value.color, color : value.text}}>hola</div>)
                    }}
                </NeoContext.Consumer>


        )
    }
}
/*
import React, { Component } from 'react'
import { neoContext } from './Component'
export default class ClassUseContext extends Component {
    render() {
        return (
                <neoContext.Consumer>                
                    {(value) => {
                        return (<div style={{backgroundColor: value.color, color : value.text}}>hola</div>)
                    }}
                </neoContext.Consumer>


        )
    }
}
*/