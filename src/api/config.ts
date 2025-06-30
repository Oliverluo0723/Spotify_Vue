import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_SPOTIFY_TOKEN}`,
  },
})
