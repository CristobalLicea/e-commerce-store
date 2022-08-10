import axios from "axios";

const COMMERCE_X_AUTH = process.env.REACT_APP_COMMERCE_X_AUTH;

export const api = axios.create({
  baseURL: 'https://api.chec.io/v1/carts',
  headers: {
    "X-Authorization": COMMERCE_X_AUTH
  }
})

export const api2 = axios.create({
  baseURL: 'https://api.chec.io/v1/products/',
  headers: {
    "X-Authorization": COMMERCE_X_AUTH,
  }
})

export const api3 = axios.create({
  baseURL: 'https://api.chec.io/v1/checkouts/',
  headers: {
    "X-Authorization": COMMERCE_X_AUTH,
  }
})
