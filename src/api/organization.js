import { apiJSON } from "./api";

export async function getOrganization(id) {
  return await apiJSON(`${process.env.REACT_APP_HOSTNAME}/api/organization/${id}`);
}

export async function listOrganizations() {
  return await apiJSON(`${process.env.REACT_APP_HOSTNAME}/api/organization/list`);
}
