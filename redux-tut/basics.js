const redux = require('redux');

const createStore = redux.createStore;

//Action

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

function increment(val) {
  return {
    type: INCREMENT,
    payload: val,
  };
}

function decrement(val) {
  return {
    type: DECREMENT,
    payload: val,
  };
}

const initialState = {
  value: 0,
};

//Reducer

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + payload,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() =>
  console.log('Updated state', store.getState()),
);

store.dispatch(increment(2));
store.dispatch(increment(2));
store.dispatch(increment(2));

store.dispatch(decrement(2));

unsubscribe();
