export async function apiJSON(path, data) {
  const response = await fetch(path, data);
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return await response.json();
}