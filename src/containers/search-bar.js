import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';
import React, { Component } from 'react';

export class SearchBar extends Component {
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
        this.props.fetchWeather(this.state.term); 
        // clears input on submit
        this.setState({term: ''}); 
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
                <input 
                    placeholder="Search for a US city" 
                    className="form-control" 
                    value={this.state.term} 
                    onChange={this.onInputChange.bind(this)} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// null is passed first as this container doesn't care about state here
export default connect(null, mapDispatchToProps)(SearchBar);