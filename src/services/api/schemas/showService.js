import requestAPI from "../request";
import regeneratorRuntime from "regenerator-runtime";

export const fetchTvShows = async (search) => {
  const response = await requestAPI.get("/search/shows?q=" + search);
  return response.data;
};

export const fetchTvShow = async (id) => {
  const response = await requestAPI.get("/shows/" + id);
  return response.data;
};
