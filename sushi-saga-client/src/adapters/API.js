const baseUrl = "http://localhost:3000/"
const sushisUrl = `${baseUrl}sushis/`
// const sushiUrl =  sushi => `${sushisUrl}${sushi.id}`

const getSushis = () =>
fetch(sushisUrl)
.then(resp => resp.json())

export const API = {
    getSushis
} 

export default API