import React from 'react'
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines'

import Chart from '../components/chart'

class CityList extends React.Component{

  renderList(){
    const cities = this.props.weather.map((cityData) => {
      const temps = cityData.list.map((weather) => {
        return weather.main.temp
      })
      const pressures = cityData.list.map((weather) => {
        return weather.main.pressure
      })
      const humidities = cityData.list.map((weather) => {
        return weather.main.humidity
      })
      return (
        <tr key={cityData.city.name}>
          <td>{cityData.city.name}</td>
          <td>
            <Chart data={temps} color="blue" />
          </td>
          <td>
            <Chart data={pressures} color="red" />
          </td>
          <td>
            <Chart data={humidities} color="green" />
          </td>
        </tr>
      )
    })
    return cities
  }

  render(){
    if(!this.props.weather[0]){
      return <p>Please type a city name</p>
    }
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state){
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(CityList)
