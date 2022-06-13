const baseURL = 'http://localhost:3030/journeys';

//GET JOURNEY
export const getAllJourneys = async () => {
  const res = await fetch(baseURL);
  if (res.status < 400) return await res.json();
  return Promise.reject(res);
};

//GET JOURNEY/:ID
export const getJourneysById = async (id) => {
  const res = await fetch(baseURL + '/' + id);
  if (res.status < 400) return await res.json();
  return Promise.reject(res);
};

//PUT JOURNEY/:ID
export const addNewNote = async (journey, note) => {
  const res = await fetch(baseURL + `/${journey}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ note }),
  });
  return res.json();
};
