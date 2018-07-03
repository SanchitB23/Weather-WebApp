import React, {Component} from 'react';
import {connect} from 'react-redux';  //change to container
import {bindActionCreators } from 'redux';//change to container

import {fetchWeather} from '../actions/index';

//ABOUT this file only cares about dispatch

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this); //// NOTE: idk or maybe inner scope this ko outer scope specific this for something se bind kr deta hai
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault(); //default event is prevented
    this.props.fetchWeather(this.state.term); // this will take in term typed and will send to fetchWeather to call the api accordingly
    this.setState({term: ''}); //clears SearchBar to empty string after searched
  }
  render() {
    return (
      <form className='input-group' onSubmit={this.onFormSubmit}> {/*classname = bootstrap related*/}
        <input
          placeholder='Get a 5-Day forecast in your fav City'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}/> {/*used fat arrow func the last time*/}
        <span className='input-group-btn'>
          <button type='submit' className= 'btn btn-secondary'>Search</button>
        </span>
      </form>
    );
  }
}
//// NOTE: // Anything returned from this function will end up as props on the SearchBar container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather},dispatch); // NOTE: takes the return value from fetchWeather and make sure it flows through all reducers
}
export default connect(null,mapDispatchToProps)(SearchBar);  // NOTE: null coz doesn't care about state change ... connnects Component with function container is waht connects Component with redux , this is how it's done
