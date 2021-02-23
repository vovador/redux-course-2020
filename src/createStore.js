export function createStore(rootReducer, inotialState) {
  let state = rootReducer(inotialState, {type: '__INIT__'})
  const subscribers = []

  return {
    // action === {type: ''}
    dispatch(action) {
      state = rootReducer(state, action)
      subscribers.forEach(sub => sub())
    },
    subscribe(callback) {
      subscribers.push(callback)
    },
    getState() {
      return state
    }
  }
}