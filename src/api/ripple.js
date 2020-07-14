import { apiJSON } from "./api";

export async function createRipple(title, orgIds, userId, locationOn) {
  const payload = {
    title,
    organizations: orgIds,
  }
  return await apiJSON(`${process.env.REACT_APP_HOSTNAME}/api/ripple`, {
    method: "POST",
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

export async function getRipple(id) {
  return await apiJSON(`${process.env.REACT_APP_HOSTNAME}/api/ripple/${id}`);
}

export async function listRipples() {
  return await apiJSON(`${process.env.REACT_APP_HOSTNAME}/api/ripple/list`);
}
