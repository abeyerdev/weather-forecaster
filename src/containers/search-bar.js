import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }  
 
    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        // stop form from posting
        event.preventDefault();

        
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input 
                    placeholder="Search for a city" 
                    className="form-control" 
                    value={this.state.term} 
                    onChange={this.onInputChange.bind(this)} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
};