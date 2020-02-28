import React from 'react';

class FormInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fruits: props.fruits
        }
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

   
    handleRemoveAll() {
        this.setState(() => ({
            fruits: []
        }));
    }

    handlePick() {
        const randNum = Math.floor(Math.random()*this.state.fruits.length)
        const pick = this.state.fruits[randNum];
        console.log(pick)
    }

    handleAddOption(newItem) {
        if(!newItem) {
            return 'valid value Please Madam!'
        }else if (this.state.fruits.indexOf(newItem) > -1) {
            return 'value exists Madam!'
        }

       this.setState((prevState) => ({
            fruits: prevState.fruits.concat(newItem)
       }));
    }

    handleDeleteOption(optionText1) {
        this.setState((prevState) => ({
            fruits: prevState.fruits.filter((optionText) => optionText1 !== optionText)
        }));
        //console.log('hdo', optionText)
    }

    render() {
        const subTitle = 'Let us do something new'
        return(
            <div>
                <Header subTitle={subTitle}/>
                <Action 
                    hasOption={this.state.fruits.length > 0}
                    handlePick={this.handlePick}
                    />
                <Options 
                    handleRemoveAll={this.handleRemoveAll}
                    fruits={this.state.fruits}
                    handleDeleteOption={this.handleDeleteOption}
                    />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                    />
            </div>
        )
    }
}

FormInput.defaultProps = {
    fruits: []
}
const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return(
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOption}
                >click for action</button>
        </div>
    )
}

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleRemoveAll}>Remove All</button>
            {props.fruits.map((x) => (
                <Option 
                    key={x} 
                    optionText={x}
                    handleDeleteOption={props.handleDeleteOption}
                />
                ))}
            
        </div>
    )
}

const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}>Remove</button>
        </div>
       
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: undefined
        }
        this.handleAddOption = this.handleAddOption.bind(this)
    }
    handleAddOption(e) {
        e.preventDefault();
        const newItem = e.target.elements.items.value.trim();
        e.target.elements.items.value = ' ';
        const error = this.props.handleAddOption(newItem);

        this.setState(() => ({
            error
        }));
    }
    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="items"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}
export {FormInput}