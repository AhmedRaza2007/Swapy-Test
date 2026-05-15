import { getPost, getUser, getComments } from "./api.js";

async function loadDetails() {

  const id = new URLSearchParams(window.location.search).get("id");

  // POST
  const post = await getPost(id);

  document.getElementById("post").innerHTML = `
    <h2> Post</h2>
    <h3>${post.title}</h3>
    <p>${post.body}</p>
  `;

  // USER
  const user = await getUser(post.userId);

  document.getElementById("user").innerHTML = `
    <h2> User</h2>
    <h3>${user.name}</h3>
    <p>${user.email}</p>
    <p>${user.address.city}</p>
  `;

  // COMMENTS (heading first)
  document.getElementById("comments").innerHTML = `
    <h2> Comments</h2>
  `;

  const comments = await getComments(id);

  comments.slice(0, 5).forEach((c) => {
    document.getElementById("comments").innerHTML += `
      <div class="comment">
        <h4>${c.name}</h4>
        <p>${c.body}</p>
      </div>
    `;
  });

}

loadDetails();

// async function getPostDetails() {

//   let id = new URLSearchParams(window.location.search).get("id");

//   // POST
//   let postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   let post = await postRes.json();

//   document.getElementById("post").innerHTML = `
//     <h2>${post.title}</h2>
//     <p>${post.body}</p>
//   `;

//   // USER
//   let userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
//   let user = await userRes.json();

//   document.getElementById("user").innerHTML = `
//     <h3>${user.name}</h3>
//     <p>${user.email}</p>
//     <p>${user.address.city}</p>
//   `;

//   // COMMENTS
//   let commentRes = await fetch(
//     `https://jsonplaceholder.typicode.com/comments?postId=${id}`
//   );

//   let comments = await commentRes.json();

//   comments.slice(0, 5).forEach(comment => {

//     document.getElementById("comments").innerHTML += `
//       <div class="comment">

//         <h4>${comment.name}</h4>
//         <p>${comment.body}</p>

//       </div>
//     `;

//   });

// }

// getPostDetails();

// // POST
// fetch("https://jsonplaceholder.typicode.com/posts/" + id)
// .then(res => res.json())
// .then(post => {

//   document.getElementById("post").innerHTML = `
//     <h2>${post.title}</h2>
//     <p>${post.body}</p>
//   `;

//   // USER
//   fetch("https://jsonplaceholder.typicode.com/users/" + post.userId)
//   .then(res => res.json())
//   .then(user => {

//     document.getElementById("user").innerHTML = `
//       <h3>User: ${user.name}</h3>
//       <p>${user.email}</p>
//       <p>${user.address.city}</p>
//     `;

//   });

// });

// // COMMENTS
// fetch("https://jsonplaceholder.typicode.com/comments?postId=" + id)
// .then(res => res.json())
// .then(comments => {

//   let box = document.getElementById("comments");

//   comments.slice(0, 5).forEach(c => {

//     box.innerHTML += `
//       <div class="comment">
//         <h4>${c.name}</h4>
//         <p>${c.body}</p>
//       </div>
//     `;

//   });

// });
