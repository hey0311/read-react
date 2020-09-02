import {React, Component} from "../CONST";

export default class ClassComponent extends Component {
    constructor(p){
        super(p);
        this.state={
            count:0
        }
    }
    setCount(){
        this.setState({
            count:this.state.count+1
        })
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return <p onClick={()=>this.setCount()}>{this.state.count}</p>;
  }
}