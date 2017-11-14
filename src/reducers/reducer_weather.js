export default function(state = [], action){
  switch(action.type){
    case 'FETCH_WEATHER':
      //console.log(action.payload.data)
      return state.concat([action.payload.data])
      console.log(state)
  }
  return state
}
