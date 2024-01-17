import axios from "axios";

export const getFacts = async (amount: number): Promise<string[]> => {
  const url = `https://meowfacts.herokuapp.com/?count=${amount}`;
  const res = await axios(url);
  return res.data.data;
};
