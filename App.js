import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './navigation';
import Tourlist from './tourlist';


class App extends Component{

  render(){
    return(
      
      <div class='Container'> 
         <Navigation/>
         <Tourlist/>
         
      </div>
     
      
      
        
    )
  }
}


export default App;
