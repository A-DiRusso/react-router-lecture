import React from 'react'
import { Link } from 'react-router-dom';

export default function Cats() {
  return (
    <div>
      <h1>Cats</h1>
      <ul>
        <li>
          <Link to="/cats/oakley">Oakley</Link>
        </li>
        <li>
          <Link to="/cats/millia">Millia</Link>
        </li>
      </ul>
    </div>
  )
}
