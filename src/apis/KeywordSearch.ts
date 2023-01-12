import axios from "axios";
import { API_KEY, API_URL } from "../constants";

export const requestGetKeywordSearchResult = async () => {
  return await axios.get(`${API_URL}?engine=google&q=Coffee&api_key=${API_KEY}`);
};
