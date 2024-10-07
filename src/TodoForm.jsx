import { useState } from 'react';

export default function TodoForm({ onSubmit: onParentSubmit }) {
  // props 이름 바꾸기
  const [newTodo, setNewTodo] = useState('');

  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  // 자식이 컨트롤할 수도 있고 부모가 컨트롤할 수도 있다.
  const onSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, { title: newTodo, completed: false, id: Math.random() }]);
    setNewTodo('');
  };
  return (
    <form onSubmit={onParentSubmit}>
      <input
        onChange={onChangeNewTodo}
        value={newTodo}
      />
      <button type="submit">add</button>
    </form>
  );
}
