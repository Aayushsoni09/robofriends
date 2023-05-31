import React, { Component } from 'react'
import './searchbox.css'
export default class Searchbox extends Component {
  render() {
    const {onchangeSearch,className,placeholder} =this.props 
    return (
      <div>
        <input type='search' 
        className={className} 
        placeholder={placeholder}
        onChange={onchangeSearch}
        />
      </div>
    )
  }
}
