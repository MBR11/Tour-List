import React,{Component} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff,faToggleOn,faTrash} from '@fortawesome/free-solid-svg-icons'

const countrystyle={
    margin:"10px",
    color:"brown"
}

const placestyle={
    color:"green",
    margin:"10px"
}

const fastyle={
    margin:"10px",
    
}

const togglestyle={
    margin:"10px"
}
class Tourlist extends Component{

    state = {
        tours:[
            {id:1,country:"NEW YORK",place:"New Yourk Bridge Tour",toggleinfo:"Yorkshires crossings date back to 1693, when its first bridge, known as the King's Bridge, was constructed over Spuyten Duyvil Creek between Manhattan and the Bronx, located in the present-day Kingsbridge neighborhood.",image:"https://www1.nyc.gov/html/dot/images/bridges/east_manhattan.jpg"},
            {id:2,country:"PARIS",place:"Paris Lights Tour",toggleinfo:"The city is especially well illuminated during the festive season, when over 2.4km of lights stretch from the Place de la Concorde right down to the Arc de Triomphe. It’s made even brighter with its 450 decorated trees along the avenue and on the pavement.",image:"https://www.francetourisme.fr/images/visite_guidee_de_paris/illuminations_de_paris.jpg"}
        ]    
    };

    
    handleDelete = ID => {
        
        
        const tours = this.state.tours.filter(item => item.id !== ID);
        this.setState({ tours: tours });
      
  };


    render(){
        return(

            <article>
                {this.state.tours.map(item=>(
                    <Child key={item.id} info={item} onDelete={this.handleDelete}/>
                ))}
            </article>

            
        )

    }
      
  }

  class Child extends Component{

    constructor(props) {
        super(props);
        this.state = {
        visibility: false
        };
       
        this.toggleVisibility = this.toggleVisibility.bind(this);
      
        }

        toggleVisibility(){
            this.setState({
            visibility: !this.state.visibility
            })
            }
    
      render(){
        const {country,place,image,toggleinfo} = this.props.info;

        if (this.state.visibility) {

            return (
                    
                <div class='container'>
                 <div className='tourcontainer'>
                    <div id='tourimage'>
                    <img src={image} alt='toursimg' width='100%' height='250px'></img>
                    </div>

                    <div id='tourdesc'>
                    <h2 style={countrystyle} class='lead font-weight-bold'>{country}</h2>
                    <h4 style={placestyle} class='lead'>{place}</h4>
                    <div>
                    <FontAwesomeIcon style={fastyle} onClick={this.toggleVisibility} icon={faToggleOn} /> 
                    <h6 style={togglestyle}>{toggleinfo}</h6>
                    </div>
                    
                    <FontAwesomeIcon style={fastyle} onClick={()=>this.props.onDelete(this.props.info.id)} icon={faTrash}>  
                    </FontAwesomeIcon> 
                    
                   
                    </div>
                </div>
               
            </div>

                
              );
            } else {
              return (

                <div class='container'>
                 <div className='tourcontainer'>
                    <div id='tourimage'>
                    <img src={image} alt='toursimg' width='100%' height='250px'></img>
                    </div>

                    <div id='tourdesc'>
                    <h2 style={countrystyle} class='lead font-weight-bold'>{country}</h2>
                    <h4 style={placestyle} class='lead'>{place}</h4>
                    
                    <div>
                  <FontAwesomeIcon  style={fastyle} onClick={this.toggleVisibility} icon={faToggleOff} /> 
                </div>
                
                <FontAwesomeIcon style={fastyle} onClick={()=>this.props.onDelete(this.props.info.id)} icon={faTrash} /> 
                   
                    </div>
                </div>
               
            </div>
              );
      }
  }
  }


 
  

export default Tourlist;