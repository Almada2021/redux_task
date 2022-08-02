import React from "react";
class ComponentClass extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    render(){
        <div>{this.state.count}</div>
    }
}
export default ComponentClass;