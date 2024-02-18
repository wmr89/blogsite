const newFormHandler = async (event) => {
  event.preventDefault();

  const id = event.target.getAttribute('data-id');

  const body = document.querySelector("#comment-body").value.trim();

  if (body) {
    const response = await fetch(`/api/blogpost/${id}/comment`, {
      method: "POST",
      body: JSON.stringify({ body }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace(`/blogpost/${id}`);
    } else {
      alert("Failed to post comment");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newFormHandler);
