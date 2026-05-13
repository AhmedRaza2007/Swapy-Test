const API = "https://jsonplaceholder.typicode.com";

// GET POSTS
function getPosts(limit = 10) {
  return fetch(`${API}/posts?_limit=${limit}`)
    .then(res => res.json());
}

// GET SINGLE POST
function getPost(id) {
  return fetch(`${API}/posts/${id}`)
    .then(res => res.json());
}

// GET USER
function getUser(id) {
  return fetch(`${API}/users/${id}`)
    .then(res => res.json());
}

// GET COMMENTS
function getComments(postId) {
  return fetch(`${API}/comments?postId=${postId}`)
    .then(res => res.json());
}