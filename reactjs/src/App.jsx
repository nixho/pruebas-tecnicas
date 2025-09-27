import { useEffect, useState } from 'react';
import './App.css';
import { getRandomFact, getImage} from './service/Facts';
import { useCatImage } from './hooks/CatImage';

export function App() {

  const [fact, setFact] = useState(null);
  const {imagenURL} = useCatImage({fact});

  useEffect(() => {
    getRandomFact().then(setFact);
  },[]);

  const handleClic = () => {
    getRandomFact().then(setFact);
  };

  return (
    <main>
      <h1>hola</h1>
      <button onClick={handleClic}>Click me</button>
      { fact && <p>{fact}</p> }
      {imagenURL && <img src={imagenURL} alt={`easd ${fact}`} /> }
    </main>
  );
}
