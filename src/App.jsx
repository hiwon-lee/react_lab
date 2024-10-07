import { useEffect, useState } from 'react';

import './App.css';
import Page from './component/Page';
import { ThemeContext } from './context/ThemeContext'; // 만든 컨텍스트를 가져온다.

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    // 컨텍스트를 provider를 활용해 담는다.
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </ThemeContext.Provider>
  );
}

export default App;
