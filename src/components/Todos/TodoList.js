import Todo from './Todo'
import style from './TodoList.module.css'

function TodoList({ todos, deleterTodo, toggleTodo }) {
  return (
    <div>
      {Object.keys(todos).length === 0 ? (
        <h2>Todo list is empty</h2>
      ) : (
        <div className={style.todoListContainer}>
          {todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              deleteTodo={deleterTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default TodoList
