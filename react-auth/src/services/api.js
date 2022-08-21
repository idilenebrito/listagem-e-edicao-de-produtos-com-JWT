import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

export function getProdutosAll() {
  return axios.get('http://localhost:3000/products').then((response) => {
    return response.data;
  });
}

export const putProdutos = async (id, produto) => {
  const result = await api.put(
    `'http://localhost:3000/products'/${id}`,
    produto,
  );
  return result;
};
