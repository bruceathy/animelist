const animeRecs = document.getElementById("anime-recs");
const mangaRecs = document.getElementById("manga-recs");

getAnimeRecs();
getMangaRecs();

async function getAnimeRecs() {
  const url = "https://myanimelist.p.rapidapi.com/v2/anime/recommendations?p=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5d8ef6b029mshdf231aa011b282ep1f99a7jsn1bdc6f4d638a",
      "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    let recEl = "";

    for (let rec of result.recommendations.slice(0, 20)) {
      recEl += `
       <div class="rec">
       <h3>Anime recommendation from: <strong><a href="${rec.author.url}" target="_blank">${rec.author.name}</a></strong></h3>
         <div class="author-choices">
            <div class="choices">
              <div class="choice-text">
                <p>If you liked: <strong><a href="${rec.liked.myanimelist_url}" target="_blank">${rec.liked.title}</a></strong></p>
                <button class="add-btn")"><i class="fas fa-plus"></i>Add to My List</button>
              </div>
              <img src="${rec.liked.picture_url}" />
            </div>
            <div class="choices">
              <div class="choice-text">
                <p>Then you should watch: <strong><a href="${rec.recommendation.myanimelist_url}" target="_blank">${rec.recommendation.title}</a></strong></p>
                <button class="add-btn")"><i class="fas fa-plus"></i>Add to My List</button>
              </div>
                <img src="${rec.recommendation.picture_url}" />
            </div>
         </div>
        <p>${rec.description}</p>
       </div>
              `;

      animeRecs.innerHTML = recEl;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getMangaRecs() {
  const url = "https://myanimelist.p.rapidapi.com/v2/manga/recommendations?p=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5d8ef6b029mshdf231aa011b282ep1f99a7jsn1bdc6f4d638a",
      "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.recommendations);

    let recEl = "";
    for (let rec of result.recommendations.slice(0, 20)) {
      recEl += `
       <div class="rec">
       <h3>Manga recommendation from: <strong><a href="${rec.author.url}" target="_blank">${rec.author.name}</a></strong></h3>
         <div class="author-choices">
          <div class="choices">
            <div class="choice-text">
              <p>If you liked: <strong><a href="${rec.liked.myanimelist_url}" target="_blank">${rec.liked.title}</a></strong></p>
              <button class="add-btn")"><i class="fas fa-plus"></i>Add to My List</button>
            </div>
            <img src="${rec.liked.picture_url}" />
          </div>
          <div class="choices">
            <div class="choice-text">
              <p>Then you should read: <strong><a href="${rec.recommendation.myanimelist_url}" target="_blank">${rec.recommendation.title}</a></strong></p>
              <button class="add-btn")"><i class="fas fa-plus"></i>Add to My List</button>
            </div>
            <img src="${rec.recommendation.picture_url}" />
          </div>
         </div>
        <p>${rec.description}</p>
       </div>
              `;

      mangaRecs.innerHTML = recEl;
    }
  } catch (error) {
    console.error(error);
  }
}
