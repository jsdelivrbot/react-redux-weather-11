import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'

class Chart extends React.Component{
  render(){
    return(
      <Sparklines data={this.props.data}>
        <SparklinesLine color={this.props.color} />
      </Sparklines>
    )
  }
}

export default Chart
