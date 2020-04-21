import axios from 'axios'

const api = axios.create({
    baseURL: 'https://chirper-back.herokuapp.com/'
})

// User functions

export const getAllUsers = async () => {
    const resp = await api.get('/users/')
    return resp.data
}

export const getUserByUsername = async (username) => {
    const resp = await api.get(`/users/${username}`)
    return resp.data[0]
}

export const createUser = async (user) => {
    const resp = await api.post('/users', user)
    return resp.data[0]
}

export const updateUser = async (username, user) => {
    const resp = await api.put(`/users/${username}`, user)
    return resp.data[0]
}

export const deleteUser = async (username) => {
    const resp = await api.delete(`/users/${username}`)
    return resp.data[0]
}

// Chirp functions

export const getAllChirps = async () => {
    const resp = await api.get('/chirps')
    return resp.data
}

export const getChirpsByUsername = async (username) => {
    const resp = await api.get(`/chirps/username/${username}`)
    return resp.data[0]
}

export const getChirpById = async (id) => {
    const resp = await api.get(`/chirps/id/${id}`)
    return resp.data[0]
}

export const createChirp = async (chirp) => {
    const resp = await api.post('/chirps', chirp)
    return resp.data[0]
}

export const updateChirp = async (id, chirp) => {
    const resp = await api.put(`/chirps/${id}`, chirp)
    return resp.data[0]
}

export const deleteChirp = async (id) => {
    const resp = await api.delete(`/chirps/${id}`)
    return resp.data[0]
}

// Comment functions

export const getAllComments = async () => {
    const resp = await api.get('/comments')
    return resp.data
}

export const getCommentsByUsername = async (username) => {
    const resp = await api.get(`/comments/username/${username}`)
    return resp.data
}

export const getCommentById = async (id) => {
    const resp = await api.get(`/comments/id/${id}`)
    return resp.data[0]
}

export const createComment = async (comment) => {
    const resp = await api.post('/comments', comment)
    return resp.data[0]
}

export const updateComment = async (id, comment) => {
    const resp = await api.put(`/comments/${id}`, comment)
    return resp.data[0]
}

export const deleteComment = async (id) => {
    const resp = await api.delete(`/comments/${id}`)
    return resp.data[0]
}