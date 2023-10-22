import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { decrement, increment, incrementByAmount, incrementByReduce } from './redux/counterSlice';

const App = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const [ incrementAmount, setIncrementAmount ] = useState("0");
  const [ incrementAmountRe, setIncrementAmountRe ] = useState("0");

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>＋</button>
        <button onClick={() => dispatch(decrement())}>ー</button>
      </div>
      <div>
        <input onChange={(e) => setIncrementAmount(e.target.value)} value={incrementAmount}/>
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>Add</button>
      </div>
      <div>
        <input onChange={(e) => setIncrementAmountRe(e.target.value)} value={incrementAmountRe}/>
        <button onClick={() => dispatch(incrementByReduce(Number(incrementAmountRe)))}>Reduce</button>
      </div>
    </div>
  );
}

export default App;
