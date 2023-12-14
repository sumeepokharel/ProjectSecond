
import React, { useState } from 'react';
import './App.css';

//Array
let myArray= ['Kathmandu', 'Pokhara', 'Illam','Mustang']
//String
const String='Nepali'
function App() {
  const [Clicked, setClicked] = useState( );

  const handleClick = () => {
    setClicked(!Clicked);
  };

  return (
    <div className={`box ${Clicked ? 'clicked' : ''}`}>
      <h1>NEPAL</h1>
      <h2>Nepal's rich cultural and natural heritage makes it a unique and fascinating country, 
        attracting travelers, trekkers, and adventurers from around the world. The hospitality and warmth of the Nepali people contribute to the country's charm.

</h2>
<ol>
  <h2>Places to visit in Nepal</h2>
  <li className="list">{myArray[0]}</li>
  <li className="list">{myArray[1]}</li>
  <li className="list">{myArray[2]}</li>
  <li className="list">{myArray[3]}</li>
</ol>
<p className="Paragraph">they speak {String}</p>
      <p>Click below  </p>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default App;
