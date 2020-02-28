import React, {Component} from 'react';

class ToggleVisibility extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility 
            }
        })
    }
    render() {
        return(
            <div>
                <p>test</p>
                <button onClick={this.handleToggle}>
                    {this.state.visibility? 'hide details': 'show details'}
                </button>
                {this.state.visibility && 
                <div>
                    <p>Hey, here I'am!</p>
                </div>}
            </div>
        )
    }
}
export {ToggleVisibility}