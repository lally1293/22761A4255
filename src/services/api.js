import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // Ensure this is correct

export const fetchUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const fetchPosts = async () => {
  const response = await axios.get(`${API_BASE_URL}/posts`);
  return response.data;
};

export const fetchComments = async () => {
  const response = await axios.get(`${API_BASE_URL}/comments`);
  return response.data;
};
