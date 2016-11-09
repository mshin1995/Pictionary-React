export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case 'GAMES_FETCHED' :
      return payload

    case 'GAME_CREATED' :
      return [payload].concat(state)

    default :
      return state
  }
}
