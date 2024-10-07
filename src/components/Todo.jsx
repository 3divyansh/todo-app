import React, { useState } from 'react'
import Input from './Input';
import List from './List';

const Todo = () => {
  const[todo,setTodo] = useState([]);
  
  const[todos,setTodos] = useState([]);
  
const addTodo = () => {
  if (todo !== ""){
    setTodos([...todos, todo]);
    setTodo("");
  }
}
console.log(setTodos);

const deleteTodo = (text) => {
  const newTodos = todos.filter((todo)=>{ 
    return todo !== text;
  });
  setTodos((newTodos))
};

  
  return (
   <>
   <div className='container mx-auto'>
   <div className='bg-gray-700 w-full h-96 text-center mt-10'>
  <Input todo={todo} setTodo={setTodo} addTodo={addTodo} />
  <List list={todos} remove={deleteTodo}  />
</div>
</div>
   
   </>
  )
}

export default Todo