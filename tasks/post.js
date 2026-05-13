fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(posts => {

    posts.slice(0, 10).forEach((post, index) => {

      fetch(`https://jsonplaceholder.typicode.com/users/${index + 1}`)
        .then(res => res.json())
        .then(user => {

          document.getElementById("posts").innerHTML += `
            <div class="card">

              <h2>${post.title}</h2>
              <p>${post.body}</p>

              <hr>

              <h3>${user.name}</h3>
              <p>${user.email}</p>

              <button onclick="goDetail(${post.id})">
                View Details
              </button>

            </div>
          `;

        });

    });

  });

function goDetail(id) {
  window.location.href = `details.html?id=${id}`;
}