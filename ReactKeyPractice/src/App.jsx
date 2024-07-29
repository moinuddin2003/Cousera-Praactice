import React, { useState } from "react";

const ToDo = (props) => (
  <tr>
    <><td>{props.id}</td></>
    <td><input /> </td>
    <label><td>{props.createdAt}</td></label>
  </tr>
);

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: '1',
      createdAt: '12:00'
    },
    {
      id: '2',
      createdAt: '23:00'
    }
  ]);

  const reverseOrder = () => {
    setTodos([...todos].reverse());
  };

  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo) => (
            <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
