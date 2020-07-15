import { apiJSON } from "./api";

export async function fetchGeolocation(id) {
  return await apiJSON(process.env.REACT_APP_IPDATA_API, {
    method: "GET",
    'Accept': "application/json",
  });
}
