import axios from 'axios'

export const getPictureUrl = id =>
  `${process.env.REACT_APP_BASE_URL}/picture/image/${id}`

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

export const fetchPictures = () =>
  instance.get('/picture/detection/processed/success')
