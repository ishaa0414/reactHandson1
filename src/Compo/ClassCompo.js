import { Component } from "react";
import './Style.css';
export default class ClassCompo extends Component{
render(){
    return(
        <>
      <div className="item_head Ccomp">
            <h1>This is created by using Class Component</h1>
            <p className="external">This is done by using External CSS</p>
            <p style={{color:'blue',fontFamily:'sans-serif',fontSize:'15px'}}>This is done by using Inline CSS</p>
        </div>
        </>
        )
}
}