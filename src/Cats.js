import React from 'react'
import { Link } from 'react-router-dom';

const arrayOfCats = [
  'oakley',
  'milla',
  'angela',
  'chris'
];

export default function Cats(props) {
  
  const catLinks = arrayOfCats.map((catName, i) => (
    <li>
      <Link to={`${props.match.path}/${catName}`} key={i}>{catName}</Link>
    </li>
  ));
  return (
    <div>
      <h1>Cats</h1>
      <ul>
        {catLinks}
      </ul>
    </div>
  )
}
