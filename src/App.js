import Form from './components/form-input'
import Header from './components/header'
import List from './components/listitems';
import React,{useState} from 'react';
function App() {
  const [todos, setTodo] = useState([{id:0,todo:"task 1"}])


  return (
    <div className="App">
      <Header/>

      <Form setTodo={setTodo}/>
      <List todoList={todos}  setTodo={setTodo}/>

    </div>
  );
}

export default App;
