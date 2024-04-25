import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state=> state.counter)

  const incrementHandler = () =>{
    dispatch({type: 'increment '})
  }

  const decrementHandler = () => {
    dispatch({type: 'decrement '})
  }
  
  const incrementHandler5 = () => {
    dispatch({type: 'INCREMENTBY5'})
  }

  const decrementHandler5 = () => {
    dispatch({type: 'DECREMENTBY5'})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler5}>Increment 5</button>
        <button onClick={decrementHandler5}>Decrement 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
