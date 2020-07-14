import { apiJSON } from "./api";

export async function fetchGeolocation(id) {
  return await apiJSON(process.env.IPDATA_API, {
    method: "GET",
    'Accept': "application/json",
  });
}
