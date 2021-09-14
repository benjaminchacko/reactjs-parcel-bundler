import { Fragment, useState } from 'react'

const name = "Ben Chacko";

const App = () => {
  const [count, setCount] = useState(0);
    return (
      <Fragment>
        <h1>Hello {name}!</h1>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </Fragment>
    );
  };

export default App