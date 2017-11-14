import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchWeather} from '../actions/index'

class SearchBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      term: ''
    }
  }

  onInputChange(e){
    this.setState({
      term: e.target.value
    })
  }

  onFormSubmit(e){
    e.preventDefault();
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }

  render(){
    return(
      <div>
        <form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
          <input
            value={this.state.term}
            placeholder="Type a city name (US Only)"
            onChange={this.onInputChange.bind(this)}
            className="form-control"
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchWeather: fetchWeather
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
