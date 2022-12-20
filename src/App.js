import { Reader } from './component/Reader/Reader';
import items from './publications.json';
import './App.css';

function App() {
  return (
    <div>
      <Reader items={items} />
    </div>
  );
}

export default App;
