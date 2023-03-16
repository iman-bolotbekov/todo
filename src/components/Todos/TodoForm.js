import { useState } from 'react'
import style from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const onSumbitHandler = (event) => {
    event.preventDefault()
    if (!text) {
      return null
    }
    addTodo(text)
    setText('')
  }
  return (
    <div className={style.todoFormContainer}>
      <form onSubmit={onSumbitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
