import React, { useState } from "react";

// const ToDo = (props) => (
//   <tr>
//     <><td>{props.id}</td></>
//     <td><input /> </td>
//     <label><td>{props.createdAt}</td></label>
//   </tr>
// );

// export default function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: '1',
//       createdAt: '12:00'
//     },
//     {
//       id: '2',
//       createdAt: '23:00'
//     }
//   ]);
  
//   const reverseOrder = () => {
//     setTodos([...todos].reverse());
//   };

//   return (
//     <div>
//       <button onClick={reverseOrder}>Reverse</button>
//       <table>
//         <tbody>
//           {todos.map((todo) => (
//             <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// Doing Practice of Key If you want to run above code comment this and all the lines below

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function App(){

  const listItems = people.map(person =>
    <li>{person}</li>
  )
  return <ul>{listItems}</ul>
}