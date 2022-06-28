import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const inputType = "number"
  const minValue = 5

 return <input type ={inputType} min ={minValue}  />
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
