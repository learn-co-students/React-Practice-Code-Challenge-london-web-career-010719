const API = 'http://localhost:3000/sushis'

const getSushi = () => fetch(API).then(resp => resp.json())

export default {
  getSushi
}
