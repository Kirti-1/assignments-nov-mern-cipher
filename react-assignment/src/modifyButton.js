import React, {Component} from 'react';
import plus from "./plus.svg";
import reload from "./middle.png";
import minus from "./minus.svg";
import "./App.css";

class Modify extends Component{
constructor(props){
  super(props)
  this.state = {count: 0 }
  this.plusButton = this.plusButton.bind(this)
  this.reloadButton = this.reloadButton.bind(this)
  this.minusButton = this.minusButton.bind(this)
}
  
plusButton(){
  this.setState({count: this.state.count + 1})

}
 reloadButton(){
  this.setState({count: 0})

}
minusButton(){
  this.setState({count: this.state.count - 1})

}
render(){
  return(
    <div  className="box inner">
     <h1 className="count">{this.state.count}</h1>
    <button className="button plus" onClick={this.plusButton}><img src={plus} alt="no"/></button>
   
    <button className="button reload"  onClick={this.reloadButton}><img src={reload} alt="no"/></button>

    <button className="button minus"  onClick={this.minusButton}><img src={minus}  alt="no"/></button>
   
     
     </div>
     
  );
}
}
export default Modify; 