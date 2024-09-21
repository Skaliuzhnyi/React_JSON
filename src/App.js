import './App.css';

import category from './data/category.json';


function App() {
  return (
    <div className="App">
      <header>
        <a href="/">Main</a>
      </header>

      <nav>
        <ul>
          {Object.values(category).map(item => <li>{item.name}</li>)}
        </ul>
      </nav>
    </div>
  );
}

export default App;
