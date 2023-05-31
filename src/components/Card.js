import React, { Component } from 'react'
import './cardlist.css'
export default class Card extends Component {
  render() {
    const {monsters} = this.props
    return (
      <div className='card-list'>
        {
        monsters.map((monster)=>{
            const {name,email,id} = monster;
            return (
            <div className='card-container' key={id}>
                <img src={`https://robohash.org/${id}?set=set2`} width={180} height={180} alt="" />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
        })
        }
      </div>
    )
  }
}
