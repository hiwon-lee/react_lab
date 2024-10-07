import { useContext, useState } from 'react';
import TodoForm from './Todo/TodoForm';
import TodoItem from './Todo/TodoItem';
import { ThemeContext } from '../context/ThemeContext';

export default function Content() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const { isDark } = useContext(ThemeContext);

  // const onChangeNewTodo = (e) => {
  //   setNewTodo(e.target.value);
  // };

  const onSubmit = (newTodo) => {
    // 고차함수로
    e.preventDefault();
    setTodo([...todo, { title: newTodo, completed: false, id: Math.random() }]);
    setNewTodo('');
    // console.log(todo); // 안 바뀜 : 비동기와 관련이 있음
    // 따라서 만약 바꾸려면 다른 함수에서 다시 호출을 해야 함
  };

  // useEffect(() => {
  //   console.log(todo); // 여기에서 바뀐 것을 감지해서 화면에 보이도록 함
  //   return;
  // }, [todo]);
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}
    >
      <div>TODOs</div>
      {todo.length === 0 ? (
        <div>
          <div>할 일을 추가해보세요</div>
          <TodoForm onSubmit={onSubmit} />
        </div>
      ) : (
        <>
          {todo.map((t) => (
            <TodoItem
              key={t.id}
              item={t}
            />
          ))}
          <TodoForm onSubmit={onSubmit} />
        </>
      )}
    </div>
  );
}
