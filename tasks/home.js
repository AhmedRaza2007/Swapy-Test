import { getPosts, getUser } from "./api.js";

const postsDiv = document.getElementById("posts");

async function loadPosts() {
  const posts = await getPosts(10);

  posts.forEach(async (post) => {
    const user = await getUser(post.userId);

    postsDiv.innerHTML += `
      <div class="card">
        <h1>${post.heading}</h1>
        <h2>${post.title}</h2>
        <p>${post.body}</p>

        <hr>

        <h3>${user.name}</h3>
        <p>${user.email}</p>

        <button class="btn" data-id="${post.id}">
          View Details
        </button>

      </div>
    `;
  });
}

loadPosts();

// click event (no inline onclick)
postsDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    const id = e.target.dataset.id;
    window.location.href = `details.html?id=${id}`;
  }
});