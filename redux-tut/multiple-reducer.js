const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

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

const initialIncrementState = {
  Incrementedvalue: 0,
};

const initialDecrementState = {
  Decrementedvalue: 10,
};

//Reducer

const incrementReducer = (state = initialIncrementState, action) => {
  const {type, payload} = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        Incrementedvalue: state.Incrementedvalue + payload,
      };
    default:
      return state;
  }
};

const decrementReducer = (state = initialDecrementState, action) => {
  const {type, payload} = action;
  switch (type) {
    case DECREMENT:
      return {
        ...state,
        Decrementedvalue: state.Decrementedvalue - payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  increment: incrementReducer,
  decrement: decrementReducer,
});

const store = createStore(rootReducer, applyMiddleWare(logger));

console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(
  () => {},

  // console.log('Updated state', store.getState()),
);

store.dispatch(increment(2));
store.dispatch(increment(2));
store.dispatch(increment(2));

store.dispatch(decrement(2));
store.dispatch(decrement(2));

unsubscribe();
