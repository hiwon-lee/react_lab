export default function TodoItem({ item, index, setTodo }) {
  const onChange = (e) => {
    todo[index].completed = e.target.checked;

    // 리액트의 useState에서 상태를 변경할 때에 기본적으로 제공하는 함수 제어 형태다.
    setTodo((prevTodo) => {
      // 불변성을 지키기 위한 절차
      // 불변성을 지켜라 : 참조관계를 끊어라
      // 즉 아래는 새로운 객체를 만들기 위해 쇼를 하고 있는것이다.
      const nextTodo = [...prevTodo];
      nextTodo[index] = { ...nextTodo[index] };
      nextTodo[index].completed = e.target.check;
      prevTodo[index] === nextTodo[index]; // false
      return nextTodo; // 이 부분이 todo로 저장된다.
    });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={onChange}
      />
      {t.title}
    </div>
  );
}
