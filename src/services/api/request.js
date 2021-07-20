import axios from "axios";
import CONFIG from "../../config";

/**
 * Here the baseURL will be changed depending upon the
 * backend server.
 */

export default axios.create({
  baseURL: `${CONFIG.API.ROOT_URL}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const requestAPI = axios.create({
  baseURL: `${CONFIG.API.ROOT_URL}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export { requestAPI };
