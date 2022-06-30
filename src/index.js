import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {

 return (
  <div className="ui container comments">
    <div className="comment">
      <a href="/" className='avatar'>
        <img src="" alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className='author'>
          Sam
        </a>
        <div className="metadata">
          <span className='date'>
            Today at 6:00PM
          </span>
        </div>
        <div className="text">Nice blog post</div>
      </div>
    </div>
  </div>
 );
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
