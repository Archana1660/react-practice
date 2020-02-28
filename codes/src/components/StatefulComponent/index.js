import React from 'react';

class StatefulComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: props.items,
            newItem:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.addItems = this.addItems.bind(this);
    }

    handleChange(e){
        console.log(e.target.value);
        this.setState({
            newItem: e.target.value
        })
    }

    addItems(){
        this.setState({
            items:[...this.state.items, this.state.newItem],
            newItem: ''
        })
    }

    render(){
        return(
            <div>
                <ul>
                    {this.state.items.map( x => <li>{ x }</li>)}
                </ul>
                <input
                    type="text"
                    placeholder="add fruit"
                    value={this.state.newItem}
                    onChange={this.handleChange}/>
                <button onClick={this.addItems}>Add</button>    
            </div>
        )
    }
}

export {StatefulComponent};