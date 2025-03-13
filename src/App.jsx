import { useEffect, useState } from "react";
import TitlesList from "./components/titlesList";
import Formatting from "./components/form";

const initialValue = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [titles, setTitle] = useState(initialValue());

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 5000);

      if (text) {
        setError(false);
      }
    }
  }, [error,text]);

  useEffect (()=>{
    localStorage.setItem("todos", JSON.stringify(titles))
  },[titles])

  const deleteTitle = (id) => {
    const filteredTitles = titles.filter((t) => t.id !== id);
    setTitle(filteredTitles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.length === 0) {
      setError("You must enter a title.");
    } else if (text.length < 4) {
      setError("Title must be at least 4 characters long.");
    } else {
      setTitle([...titles, { title: text.trim(), id: Math.random() }]);
      setText("");
      setError(false);
    }
  };

  return (
    <div className="mainContainer">
      <Formatting setText={setText} handleSubmit={handleSubmit} text={text} error={error} />

      {!titles.length && <h2 className="noneTitleShower">[**You haven't added any titles yet**]</h2>}

      <ul>
        {titles.length > 0 && <TitlesList titles={titles} deleteTitle={deleteTitle} />}
      </ul>
    </div>
  );
}

export default App;
