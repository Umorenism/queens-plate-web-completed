import axios from "axios";

const BASE_URL =
  "https://queensplate-main-jw6so1.free.laravel.cloud/api/v1";

export const getMenu = async () => {
  const res = await axios.get(`${BASE_URL}/menu`);
  return res.data.data;
};

export const getSingleMeal = async (id) => {
  const res = await axios.get(`${BASE_URL}/menu/${id}`);
  return res.data.data;
};