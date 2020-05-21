import React, { Component } from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoItems extends Component {
  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }
  state = {date: new Date()}

  delete(key) {
    this.props.delete(key);
  }

    createTasks(item) {
      return  <p key={item.key}><input type="text" id={item.key}
      value={item.text} onChange={
        (e) =>{
          this.props.setUpdate(e.target.value, item.key)
        }
      }  /> 
       
       <span>
             
              <FontAwesomeIcon className="faicons" icon='trash' onClick={() => this.delete(item.key)}  />
              <span className="date">{this.state.date.toLocaleDateString()}</span>
        </span>
      
      </p>
    }
   
    render() {
      var todoEntries = this.props.entries;
      var listItems = todoEntries.map(this.createTasks);
   
      return (
          
              <div className="theList"> 
               {listItems}  
               
              </div>
             
           
        
      );
    }
    
  };
  
   
  export default TodoItems;