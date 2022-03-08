import React, { Component } from 'react'

export default class ClassComponent extends Component {
      constructor(props){
            super(props);
      }
  render() {
    return (
      <>
            <h1>Class Component</h1>
            <h2>Hello {this.props.name}</h2>
      </>
    )
  }
}
