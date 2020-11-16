const HOST = 'http://localhost:3016'

export async function getHorses() {
  return fetch(`${HOST}/horse`)
    .then(res => res.json());
}
