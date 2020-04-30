import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);


class TodoList extends Component{
    constructor(props){
        super(props);

        this.state = {
            items: [],
            currentItem:{
                text:'',
                key:''
            }
        };
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }
    
    addItem(e)
    {
        if(this._inputelement!== ""){
            var newItem = {
                text: this._inputelement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return{
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputelement.value = "";
        }
        
        console.log(this.state.items);
        e.preventDefault();  //this will prevent refreshing again and again
    }
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }
      setUpdate(text, key)
      {
          const items = this.state.items;
          items.map(item =>{
              if(item.key===key){
                  item.text=text;
              }
          })
          this.setState(
          {
                items: items
          })
      }


      handleInput(e)
      {
          this.setState({
            currentItem:{
                text:e.target.value,
                key:Date.now()
            }
          })
          
      }
    render(){
    
        return(
        
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputelement = a} placeholder="Enter New task" 
                         />
                        
                         <button type="submit">Add</button>   
                    </form>
                </div>
                <TodoItems entries={this.state.items}   
                        delete={this.deleteItem}
                        setUpdate ={this.setUpdate} />
              
            </div>
        );
    }
}

export default TodoList;