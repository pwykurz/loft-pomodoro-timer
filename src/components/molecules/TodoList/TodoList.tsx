import Todo from '../Todo'

const TodoList = () => {
  const todos = [
    {
      id: 1,
      text: 'ToDo 1',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 2,
      text: 'ToDo 2',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 3,
      text: 'ToDo 3',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 4,
      text: 'ToDo 4',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 5,
      text: 'ToDo 5',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 6,
      text: 'ToDo 6',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 7,
      text: 'ToDo 7',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 8,
      text: 'ToDo 8',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 9,
      text: 'ToDo 9',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 10,
      text: 'ToDo 10',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 11,
      text: 'ToDo 11',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 12,
      text: 'ToDo 12',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 13,
      text: 'ToDo 13',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 14,
      text: 'ToDo 14',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 15,
      text: 'ToDo 15',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 16,
      text: 'ToDo 16',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 17,
      text: 'ToDo 17',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 18,
      text: 'ToDo 18',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 19,
      text: 'ToDo 19',
      done: false,
      deadline: 'deadline date',
    },
    {
      id: 20,
      text: 'ToDo 20',
      done: false,
      deadline: 'deadline date',
    },
  ]

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo>{todo.text}</Todo>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
