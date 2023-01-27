import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const appTitle = 'Todo App';
const todoTitle = 'Call Family';
const todoDescription = 'This is todo description';
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

const headingStyle = {color: "red", fontSize: "50px", backgroundColor: "yellow"};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <h1 className='headingStyle largeText'>{appTitle}</h1>
    <h3>{todoTitle}</h3>
    <p>{todoDescription}</p>
    <p>{dateName + " " + monthName + " " + currentYear}</p>
  </div>
);
