import { request } from "../api/api.js";

async function fetchUser(id) {

  const user = await request(`/users/${id}`);

  return user;

}

export { fetchUser };