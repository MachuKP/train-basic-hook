// import { useReducer, useState, useTransition } from "react";
// import Todo from "./Todo";
import { useEffect, useRef, useState } from 'react';
import './App.css'
import Card from './components/card';

// export const ACTION = {
//   TODO_ADD: "todo_add",
//   TODO_TOGGLE: "todo_toggle",
//   TODO_DELETE: "todo_delete",
// };

// function reducer(todos, action) {
//   switch (action.type) {
//     case ACTION.TODO_ADD:
//       return [...todos, newTodo(action.payload.name)];
//     case ACTION.TODO_TOGGLE:
//       return todos.map((todo) => {
//         if (todo.id === action.payload.id) {
//           return { ...todo, complete: !todo.complete };
//         }
//         return todo;
//       });
//     case ACTION.TODO_DELETE:
//       return todos.filter((todo) => todo.id !== action.payload.id);
//     default:
//       return todos;
//   }
// }

// function newTodo(name) {
//   return { id: Date.now(), name: name, complete: false };
// }

function App() {
  // const [todos, dispatch] = useReducer(reducer, []);
  // const [name, setName] = useState("");
  // const [list, setList] = useState([]);
  // const [text, setText] = useState("");
  // const [isPending, startTransition] = useTransition();

  // const addTodoItem = (e) => {
  //   e.preventDefault();
  //   dispatch({ type: ACTION.TODO_ADD, payload: { name: name } });
  //   setName("");
  // };

  // const handleChange = (e) => {
  //   setText(e);

  //   startTransition(() => {
  //     let newList = [];
  //     for (let i = 0; i < 200; i++) {
  //       newList.push(e);
  //     }
  //     setList(newList);
  //   });
  // };

  const card = useRef(null)

  const [visible, setVisible] = useState(false)
  // const [cardTwo, setCardTwo] = useState(false)
  // const [cardThree, setCardThree] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries
      console.log(entry)
      setVisible(entry.isIntersecting)
    }, {
      root: null,
      threshold: 1
    })
    if (card.current) {
      observer.observe(card.current)
    }
    return () => {
      if (card.current) {
        observer.unobserve(card.current)
      }
    }
  }, [card])

  return (
    <>
      <div className='isVisible'>{visible ? "In View" : "Out of View"}</div>
      <div className="section"></div>
      <Card ref={card} visible={visible}></Card>
      {/* <form onSubmit={addTodoItem}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => (
        <Todo todo={todo} dispatch={dispatch} key={todo.id} />
      ))}
      <input
        type="text"
        value={text}
        onChange={(e) => handleChange(e.target.value)}
      />
      {isPending ? (
        <div>loading...</div>
      ) : (
        list.map((item) => <div>{item}</div>)
      )} */}
    </>
  );
}

export default App;
