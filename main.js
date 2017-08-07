function reqListener () {
  let data = JSON.parse(this.responseText);

  body = document.querySelector("body");
  let card = '';
  let cardData = [];
  cardData.push(data);
  console.log(cardData);

  let cardInfo = `
  <section>
    <h1>${data.name}</h1>
    <div class="container">
      <div class="the-basics">
        <h2>The Basics</h2>
        <ul>
          <li>
            <span class="category">Name:</span>
            ${data.name}
          </li>
          <li>
            <span class="category">Github URL:</span>
            <a class="link" href="${data.html_url}">${data.login}</a>
          </li>
          <li>
            <span class="category">Email:</span>
            ${data.email}
          </li>
          <li>
            <span class="category">Company:</span>
            ${data.company}
          </li>
          <li>
            <span class="category">Website:</span>
            <a class="link" href="${data.blog}">${data.blog}</a>
          </li>
        </ul>
      </div>
      <div class="the-story">
        <h2>The Story</h2>
        <p>${data.bio}</p>
      </div>
      <div class="avatar">
        <img src="${data.avatar_url}">
      </div>
    <div>
  </section>
  `;
  card += cardInfo;
body.innerHTML = card;
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/angevogler");
req.addEventListener("load", reqListener);
req.send();
