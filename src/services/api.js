import axios from "axios";

const API = "http://127.0.0.1:8000/api";

export const getDoctors = async () => {
  return await axios.get(`${API}/doctors/`);
};