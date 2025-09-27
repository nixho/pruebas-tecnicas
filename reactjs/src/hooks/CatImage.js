import { useEffect, useState } from 'react';
import { getImage } from '../service/Facts';

export function useCatImage({ fact }) {
  const [imagenURL, setImagenURL] = useState('');

  useEffect(() => {
    if (!fact) return;

    const palabra = fact.split(' ', 3).join(' ');
    getImage(palabra).then(url => {
      setImagenURL(url);
    });
  }, [fact]);

  return { imagenURL, setImagenURL }
}
