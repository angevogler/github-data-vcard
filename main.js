function reqListener () {
  let data = JSON.parse(this.responseText);

  body = document.querySelector("body");
  let card = '';
  let cardData = [];
  cardData.push(data);
  console.log(cardData);

  for (let i = 0; i < cardData.length; i++) {
    let cardInfo = `
      <h1>${cardData[i].name}</h1>
      <div>
        <h2>The Basics</h2>
        <ul>
          <li>
            <span class="category">Name:</span>
            ${cardData[i].name}
          </li>
          <li>
            <span class="category">Github URL</span>
            ${cardData[i].html_url}
          </li>
          <li>
            <span class="category">Email:</span>
            ${cardData[i].email}
          </li>
          <li>
            <span class="category">Company:</span>
            ${cardData[i].company}
          </li>
          <li>
            <span class="category">Website:</span>
            ${cardData[i].blog}
          </li>
        </ul>
      </div>
      <div>
        <h2>The Story</h2>
        <p>${cardData[i].bio}</p>
      </div>
      <div>
        <img src="${cardData[i].avatar_url}">
      </div>
    `;
    card += cardInfo;
  }
body.innerHTML = card;
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/angevogler");
req.addEventListener("load", reqListener);
req.send();
