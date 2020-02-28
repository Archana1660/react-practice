import React from 'react';

class OneMedium extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      enterInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    console.log(e.target.value)
    this.setState({
      enterInput: e.target.value
    })
  }

  render(){
    return(
      <>
        <GetInput getTheInput={this.state.enterInput} func={this.handleChange}/>
        <RenderInput renderTheInput={this.state.enterInput}/>
      </>
    )
  }
}

export default OneMedium;

class GetInput extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
      <h1>GetInput</h1>
      <input value={this.props.getTheInput} onChange={this.props.func}/>
      </>
    )
  }
}

class RenderInput extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
    <p>{this.props.renderTheInput}</p>
    )
  }
}