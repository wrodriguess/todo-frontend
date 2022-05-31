import axios from 'axios'

// Criando uma conexão com o backend
const api = axios.create({
    // URL da API do backend
    baseURL: 'http://localhost:3001'
})

export default api