function submitEmail() {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const name = document.getElementById("name-email").value;
  const error = document.getElementById("error-email");
  const check = name.match(regex);
  const info = document.querySelector(".info-full");
  const submit = document.querySelector(".submit-email");
  if (check) {
    info.style.display = "block";
    submit.style.display = "none";
  } else {
    error.innerHTML = "Vui lòng nhập đúng định dạng email";
    error.style.color = "red";
  }
}

function view_move(element) {
  const view_more = element.querySelector(".view-button");
  view_more.style.visibility = "visible";
}
function view_out(element) {
  const view_more = element.querySelector(".view-button");
  view_more.style.visibility = "hidden";
}
function view_click(element) {
  const job_content = element.querySelector("#job-info .job-content");
  const view_less = element.querySelector(".view-button >button");
  if (view_less.innerHTML.includes("More")) {
    view_less.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg> View Less`;
    job_content.style.display = "block";
  } else {
    view_less.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
  </svg> View More`;
    job_content.style.display = "none";
  }
}
