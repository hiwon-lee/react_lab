import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import TodoForm from './component/TodoForm';
// import TodoItem from './component/TodoItem';
import Page from './component/Page';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="App">
      <Page
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </div>
  );
}

export default App;
