import React from 'react';
import ReactDOM from 'react-dom/client';
import { faker } from '@faker-js/faker';
import CommentDetail from './CommentDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {

 return (
  <div className="ui container comments">
    <CommentDetail author="Sam"/>
    <CommentDetail author="Alex"/>
    <CommentDetail author="Jane"/>
  </div>
   
  
 );
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
