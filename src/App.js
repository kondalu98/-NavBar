import '../src/Components/NavBar.css';

import { Home } from './Components/Home';
import { NavBar } from './Components/NavBar';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`container ${theme}`}>
      <NavBar theme={theme} setTheme={setTheme} />
      <Home></Home>
      {/* Additional content */}
    </div>
  );
}

export default App;
