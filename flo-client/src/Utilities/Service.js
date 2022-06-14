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
export const addNewNote = async (journeyId, note) => {
  const res = await fetch(baseURL + `/${journeyId}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ note }),
  });
  if (res.status < 400) return res.json();
  return Promise.reject(res);
};

//DELETE JOURNEY/DELNOTE/:ID
export const deleteNoteById = async (journeyId, id) => {
  await fetch(baseURL + `/${journeyId}/notes/${id}`, {
    method: 'PUT',
  });
};

//PUT JOURNEY/ADDRES/:ID
export const addNewRestaurant = async (journeyId, restaurant) => {
  const res = await fetch(baseURL + `/${journeyId}/restaurants`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(restaurant),
  });
  if (res.status < 400) return res.json();
  return Promise.reject(res);
};
