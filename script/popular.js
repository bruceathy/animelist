getPopularAnime();
getPopularManga();

async function getPopularAnime() {
  const popularAnime = document.getElementById("popular-anime");

  const url = "https://myanimelist.p.rapidapi.com/anime/top/all";
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

    let animeEl = "";

    for (let anime of result.slice(0, 20)) {
      // CREATE ADD TO LIST FUNCTION
      animeEl += `
            <div class="card" style="background-image: url(${anime.picture_url})">
              <div class="info">
                <h3><a href="${anime.myanimelist_url}" target="_blank">${anime.title}</a></h3>
                <button class="add-btn" onclick="addToMyList(${anime.myanimelist_id})"><i class="fas fa-plus"></i>Add to My List</button>
                <p><strong>Score:</strong> ${anime.score}</p>
                <p><strong>Rank:</strong> ${anime.rank}</p>
                <p><strong>Aired On:</strong> ${anime.aired_on}</p>
              </div>
            </div>
              `;
      popularAnime.innerHTML = animeEl;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getPopularManga() {
  const popularManga = document.getElementById("popular-manga");

  const url = "https://myanimelist.p.rapidapi.com/manga/top/all";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5d8ef6b029mshdf231aa011b282ep1f99a7jsn1bdc6f4d638a",
      "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  let mangaEl = "";

  try {
    // CREATE ADD TO LIST FUNCTION
    for (let manga of result.slice(0, 20)) {
      mangaEl += `
            <div class="card" style="background-image: url(${manga.picture_url})">
              <div class="info">
                <h3><a href="${manga.myanimelist_url}" target="_blank">${manga.title}</a></h3>
                <button class="add-btn" onclick="addToMyList(${manga.myanimelist_id})"><i class="fas fa-plus"></i>Add to My List</button>
                <p><strong>Score:</strong> ${manga.score}</p>
                <p><strong>Rank:</strong> ${manga.rank}</p>
                <p><strong>Aired On:</strong> ${manga.aired_on}</p>
              </div>
            </div>
              `;
      popularManga.innerHTML = mangaEl;
    }
  } catch (error) {
    console.log(error);
  }
}
