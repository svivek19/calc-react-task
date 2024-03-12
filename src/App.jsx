import React, { useState } from "react";

const App = () => {
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [total, setTotal] = useState(0);

  const handleAdd = () => {
    setTotal(parseFloat(numberOne) + parseFloat(numberTwo));
  };

  const handleSub = () => {
    setTotal(parseFloat(numberOne) - parseFloat(numberTwo));
  };

  const handleMul = () => {
    setTotal(parseFloat(numberOne) * parseFloat(numberTwo));
  };

  const handleDiv = () => {
    setTotal(parseFloat(numberOne) / parseFloat(numberTwo).toFixed(2));
  };

  const handleClr = () => {
    setNumberOne("");
    setNumberTwo("");
    setTotal(0);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="a">First Number</label>
        <input
          type="number"
          id="a"
          value={numberOne}
          onChange={(e) => setNumberOne(e.target.value)}
        />
        <br />
        <label htmlFor="b">Second Number</label>
        <input
          value={numberTwo}
          type="number"
          id="b"
          onChange={(e) => setNumberTwo(e.target.value)}
        />

        <div>
          <br />
          <button onClick={handleAdd}>ADD</button>
          <button onClick={handleSub}>SUB</button>
          <button onClick={handleMul}>MUL</button>
          <button onClick={handleDiv}>DIV</button>
          <button onClick={handleClr}>CLR</button>
        </div>
      </form>
      <div>
        <h2>Total: {total}</h2>
      </div>
    </div>
  );
};

export default App;
