import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";

const Counter = () => {
  const { counter, showCounter } = useSelector((state) => state.counter);
  /*  const  */
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase({ amount: 5 }));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={increaseHandler}>increase by 5</button>
    </main>
  );
};

export default Counter;
