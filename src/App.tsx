import { useEffect, useState } from "react";
import { TypeFilter } from "./components/TypeFilter";
import { ModelFilter } from "./components/ModelFilter";
import "./App.css";

function App() {
  const [type, setType] = useState<string>("");
  const [imgType, setImgType] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch(`https://swapi.dev/api/${type}`)
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((error) => console.log("is error", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  useEffect(() => {
    if (type === "people") {
      setImgType("characters");
    } else {
      setImgType(type);
    }
  }, [type]);

  const typeSetHandler = (make: string) => {
    setType(make);
  };

  const nameSetHandler = (name: string) => {
    setName(name);
  };
  
  return (
    <div className="App">
      <TypeFilter typeSetHandler={typeSetHandler} />
      {data ? (
        <ModelFilter names={data} nameSetHandler={nameSetHandler} />
      ) : null}
      <div>
        {name ? (
          <img
            src={`https://starwars-visualguide.com/assets/img/${imgType}/${name}.jpg`}
            alt="Opppsss, nothing here"
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
