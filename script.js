let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("sucess");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  createPost();
};

let createPost = () => {
  posts.innerHTML += `<div>
    <p>${data.text}</p>
    <span class="options">
      <ion-icon onclick='editPost(this)' class='icons' name="create-outline"></ion-icon>
      <ion-icon onclick='deletePost(this)' class='icons' name="trash-outline"></ion-icon>
    </span>
  </div>`;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();

};
