import { useEffect, useState } from "react";
import { TypeFilter } from "./components/TypeFilter";
import { ModelFilter } from "./components/ModelFilter";
import "./App.css";

function App() {
  const [type, setType] = useState<string>("");
  const [imgType, setImgType] = useState<string>("");
  const [imgNumber, setImgNumber] = useState<string>("");
  const [data, setData] = useState<{ name: string }[]>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const styles = {
    container: {
      border: "3px solid aqua",
      borderRadius: "10px"
    },
  } as const;

  useEffect(() => {
    fetch(`https://swapi.dev/api/${type}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
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
    setIsLoading(true);
    setImgNumber("");
  };

  const imgNumberSetHandler = (imgNumber: string) => {
    setImgNumber(imgNumber);
  };

  return (
    <div className="App">
      <TypeFilter typeSetHandler={typeSetHandler} />
      <ModelFilter
        names={data}
        imgNumberSetHandler={imgNumberSetHandler}
        isError={isError}
        isLoading={isLoading}
      />
      <div>
        {imgNumber ? (
          <img
            src={`https://starwars-visualguide.com/assets/img/${imgType}/${imgNumber}.jpg`}
            alt="Opppsss, nothing here"
            style={styles.container}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
