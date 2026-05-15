const API = "https://jsonplaceholder.typicode.com";

export async function getPosts(limit = 10) {
  const res = await fetch(`${API}/posts?_limit=${limit}`);
  return await res.json();
}

export async function getPost(id) {
  const res = await fetch(`${API}/posts/${id}`);
  return await res.json();
}

export async function getUser(id) {
  const res = await fetch(`${API}/users/${id}`);
  return await res.json();
}

export async function getComments(postId) {
  const res = await fetch(`${API}/comments?postId=${postId}`);
  return await res.json();
}