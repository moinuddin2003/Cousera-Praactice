import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const desserts = [
  {
    title: 'ChocalateCake',
    description: 'Chocolate cake is a cake flavored with melted chocolate',
    calories: 500,
  }
]


export default function App ()
{
  const newDesserts = desserts.map((dessert)=>
{
return {
  title: dessert.title.toUpperCase(),
  //As the above line will make the font in upper case but becuase of using spread operator it will overwrite the previous value and the title will go in lowercase
  ...dessert, 
  kcal: dessert.calories/1000
};
});

return (
  <div className='App'>
    <h1>Dessert List</h1>
    <ul>
      {newDesserts.map((dessert, index) => (
        <li key={index}>
          <h2>Title: {dessert.title}</h2>
          <p>Description{dessert.description}</p>
          <p>Calories: {dessert.calories} cal : ({dessert.kcal} Kcal)</p>
        </li>
      ))}
    </ul>
  </div>
)
}

