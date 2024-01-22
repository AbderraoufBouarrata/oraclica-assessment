import axios, { AxiosInstance } from "axios";

// here we create a custom Axios instance instead, for re-usability
export const axiosClient: AxiosInstance = axios.create({
  baseURL: "https://meowfacts.herokuapp.com",
});

export const getFacts = async (amount: number): Promise<string[]> => {
  const url = `/`;

  const res = await axiosClient.get(url, {
    params: {
      count: amount,
    },
  });
  return res.data.data;
};
