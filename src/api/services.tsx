import axios from "./config/axios";

export function getProducts() {
    return axios({
        method: 'get',
        url: '/product.json',
    })
}

export function getImages() {
    return axios({
        method: 'get',
        url: '/image.json',
    })
}