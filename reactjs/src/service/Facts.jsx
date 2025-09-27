const ENDPOINT_FACT = 'https://catfact.ninja/fact';

export const getRandomFact = async () => {
  const res = await fetch(ENDPOINT_FACT)
  const data = await res.json()
  const { fact } = data;
  return fact;
}

export const getImage = async (palabra) => {
  const ENDPOINT = `https://cataas.com/cat/says/${palabra}?size=50&fontSize=50&fontColor=red&json=true`;
  const res = await fetch(ENDPOINT)
  const data = await res.json()
  const { url } = data;
  return url;
}
