import React from "react";
import Item from "./Item";
import { useState } from 'react';

function ShoppingList({ items }) {

const [ filterValue, setFilterValue] = useState('')



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => setFilterValue(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
  {(filterValue === 'All' || filterValue === '' 
    ? items 
    : items.filter(item => item.category === filterValue)
  ).map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))}
</ul>

    </div>
  );
}

export default ShoppingList;
