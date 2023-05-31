import React, { Component } from 'react'
import './App.css';
import Cardlist from './components/Card-list';
import Searchbox from './components/Search-box';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      monsters:[],
      filterString:''

    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>this.setState(
      ()=>{return {monsters:users}},
      
    ))

  }

  

  render() {
    const {monsters,filterString} = this.state ;
    const filterArray=monsters.filter((monster)=> {return monster.name.toLowerCase().includes(filterString)})
    const onchangeSearch=(event)=>{
      const filterString=event.target.value.toLowerCase()
      this.setState(()=>{return {filterString}})}
    return (
      <div>
        <h className='app-title'>Monsters Rolodex</h>
        <Searchbox onchangeSearch={onchangeSearch} className='inputsearch' placeholder='search monsters...'/>
        
       <Cardlist monsters={filterArray}/>
      </div>
    )
  }
}
