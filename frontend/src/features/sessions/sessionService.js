import axios from 'axios'

const API_URL = '/api/sessions/'

// Create new goal
const createSession = async (sessionData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, sessionData, config)

  // console.log(response.data)

  return response.data
}

// Get user goals
const getSessions = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user goal
const deleteSession = async (sessionId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + sessionId, config)

  return response.data
}

const sessionService = {
  createSession,
  getSessions,
  deleteSession,
}

export default sessionService