import React, { Component } from 'react'
import ProfileCard from './component/ProfileCard'

class App extends Component {
  constructor(){
    super();
    this.handleClick =this.handleClick.bind(this);
    this.state ={
      writers:{
        loading: false,
        list: []
      }
    };
  }
  handleClick() {
    this.setState({
      writers:{
        loading:true
      }
    });

    setTimeout(async()=>{
      let resp = await fetch("/writers.json");
      let result = await resp.json();

      this.setState({
        writers:{
          loading:false,
          list: result
        }
      });
    }, 3500);
  }
  render() {
    const {
      writers:{loading, list}
    } = this.state;

    if(loading) {
      return (
        <div>
        <h1>Writers Profile</h1>
        <div className='container'>
        <div className='card action'>
        <p className='infoText'>Loading...</p>
        </div>
        </div>
        </div>
      )
    }
  
  return (
    <div>
    <h1>Writers Profile</h1>
    <div className='container'>
    {list.length === 0 ? (
      <div className='card action'>
      <p className='infotext'>Ooops....no writer profile found</p>
      <button className='actionBtn'>Get Writers</button>
      </div>

    ):(
      lsit.map((writer) =>(
        <ProfileCard key={writer.id} writer={writer}/>
      ))
    )}
    </div>
    </div>
  )
      }
    }
      