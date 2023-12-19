
import { useState } from 'react';
import styles from './App.module.css';

const Counter = ({ }) => {
  const [currentCount, setCurrentCount] = useState(0);

  const increment = () => {
    setCurrentCount(currentCount + 1);
  };

  const decrement = () => {
    setCurrentCount(currentCount > 0 ? currentCount - 1 : currentCount);
  };

  return (
    <div className={styles.appContainer}>
      <h2>Current Count: {currentCount}</h2>
      <button onClick={increment}>Increment</button>
      {currentCount > 0 ? (
        <button onClick={decrement}>Decrement</button>
      ) : null}
    </div>
  );
};

export default Counter;
