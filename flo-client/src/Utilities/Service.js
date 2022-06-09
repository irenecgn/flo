const baseURL = 'http://localhost:3030/journeys';

//GET JOURNEY
export const getAllJourneys = async () => {
  const res = await fetch(baseURL);
  if (res.status < 400) return await res.json();
  return Promise.reject(res);
};

//GET JOURNEY/:ID
export const getJourneysById = async (id) => {
  console.log(id);
  const res = await fetch(baseURL + '/' + id, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
  });
  console.log(res);
  if (res.status < 400) return await res.json();
  return Promise.reject(res);
};
