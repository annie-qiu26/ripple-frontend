import { apiJSON } from "./api";

export async function getLink(id) {
  return await apiJSON(`${process.env.REACT_APP_HOSTNAME}/api/link/${id}`, {
    method: "POST",
    credentials: 'include',
  });
}
