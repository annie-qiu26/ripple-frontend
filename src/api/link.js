import { apiJSON } from "./api";

export async function generateLink(parentId, userId, locationOn) {
  const payload = {
    parent_id: parentId,
  }
  return await apiJSON(`${process.env.REACT_APP_HOSTNAME}/api/link`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

export async function getLink(id) {
  return await apiJSON(`${process.env.REACT_APP_HOSTNAME}/api/link/${id}`, {
    method: "POST",
    credentials: 'include',
  });
}