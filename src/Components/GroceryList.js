// import React from 'react'

// export default function GroceryList() {
//   return (
//     <div className="grocery-list">
//       <h2> Grocery List</h2>
//       <input type="checkbox" value="apple"/>
//       <label>Apples</label>
//       <br />
//       <input type="checkbox" value="oranges"/>
//       <label>Oranges</label>
//     </div>
//   )
// }

import React from 'react';
import './styles.scss';

function GroceryList() {
  return (
    <div className='grocery-list'>
      <h2> Grocery List</h2>

      <div className='container'>
        <input type='checkbox' value='apple' />
        <label>Apples</label>
        <br />
        <input type='checkbox' value='oranges' />
        <label>Oranges</label>
      </div>
    </div>
  );
}

export default GroceryList;
