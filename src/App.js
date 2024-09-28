import './App.css';
import {useEffect} from "react";
import {useTelegram} from "../../hooks/useTelegram";

function App() {
    const {tg, user, onClose, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

  return (
    <div className="App">
        Hello World!
        <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
