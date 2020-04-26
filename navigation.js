import React,{Component} from 'react';
import './App.css';

const navstyle={
    color:'greenyellow',
    marginLeft:'29em'
   
}

const homestyle={
    color:'greenyellow'
}

class Navigation extends Component{
    render(){
        return(
            <nav class="navbar navbar-lg bg-dark  lead">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand font-weight-bold" href="#" style={homestyle} >HOME</a>
          <a class="navbar-brand font-weight-bold" href="#" style={navstyle}>ABOUT</a>
          <a class="navbar-brand font-weight-bold" href="/tours" style={navstyle}>TOURS</a>
        </div>
      </div>
    </nav>
        )
    }
}

export default Navigation;