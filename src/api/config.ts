import axios from 'axios'

const token = localStorage.getItem('spotify_access_token')

export const instance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_SPOTIFY_TOKEN}`,
  },
})

export const accessInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
