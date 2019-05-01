import React from 'react'
import { Link } from 'react-router-dom';

const arrayOfCats = [
  'oakley',
  'milla',
  'angela',
  'chris'
];

export default function Cats({match, history}) {
  
  const catLinks = arrayOfCats.map((catName, i) => (
    <li>
      <Link to={`${match.path}/${catName}`} key={i}>{catName}</Link>
    </li>
  ));
  return (
    <div>
      <h1>Cats</h1>
      <ul>
        {catLinks}
      </ul>
      <button onClick={() => {
        //history.push allows us to progamatically go to 
        //a diffrent route
        //You can use this instead of a component
        history.push('/')
        //history is not an array, but you can image 
        //that it manges the paths you've been to as an array.
        //you <Link /> component can't submit a form so use this
        //if you need to trigger some other custom code.
      }}>Go Home</button>
    </div>
  )
}
