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
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input value={this.state.term} onChange={this.onInputChange.bind(this)}/>
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
