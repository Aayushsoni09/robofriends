import React, { Component } from 'react'
import './cardlist.css'
import Card from './Card'
export default class Cardlist extends Component {
  render() {
    const {monsters} = this.props;
    
    return (
      <div className='card-list'>
        <Card monsters={monsters}/>
      </div>
    )
  }
}
