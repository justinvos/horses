const HOST = 'http://localhost:3016'

export function getHorses() {
  return fetch(`${HOST}/horse`)
    .then(res => res.json());
}

export function putHorse(horse) {
  const { id, ...horseWithoutId } = horse;

  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(horseWithoutId),
  }
  return fetch(`${HOST}/horse/${id}`, options)
    .then(res => res.json());
}
