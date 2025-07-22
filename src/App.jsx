import {
  getAllToNotDos,
  addToNotDo,
  updateToNotDo,
  deleteToNotDo,
} from "./components/HandleApi";
import { ToNotDo } from "./components/ToNotDo";
import { useState, useEffect } from "react";

function App() {
  const [toNotDos, setToNotDos] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toNotDoid, setToNotDoid] = useState("");

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setToNotDoid(_id);
    setText(text);
  };

  useEffect(() => {
    getAllToNotDos(setToNotDos);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>To Not Do App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="your bad habbits..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add-btn"
            onClick={
              isUpdating
                ? () =>
                    updateToNotDo(
                      toNotDoid,
                      text,
                      setToNotDos,
                      setText,
                      setIsUpdating
                    )
                : () => addToNotDo(text, setText, setToNotDos)
            }>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toNotDos.map((task) => (
            <ToNotDo
              key={task._id}
              text={task.text}
              updateMode={() => updateMode(task._id, task.text)}
              deleteToNotDo={() => deleteToNotDo(task._id, setToNotDos)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
