const animeReviews = document.getElementById("anime-reviews");
const mangaReviews = document.getElementById("manga-reviews");
const reviewText = document.getElementById("review-text");
const readMore = document.getElementById("read-more");

getAnimeReviews();
getMangaReviews();

async function getAnimeReviews() {
  const url = "https://myanimelist.p.rapidapi.com/v2/anime/reviews?p=1";
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

    let reviewEl = "";

    for (let review of result.reviews.slice(0, 20)) {
      reviewEl += `
            <div class="review">
              <div class="user">
                <div class="user-info">
                  <img src="${review.user.picture_url}" />
                  <h3><a href="${review.user.url}" target="_blank">${review.user.name}</a></h3>
                </div>
                <p><strong>Posted:</strong> ${review.date.date_str}</p>
              </div>
              <div class="review-content">
                <div class="review-info">
                  <h3><a href="${review.object.mal_url}" target="_blank">${review.object.title}</a></h3>
                  <p id="review-text">${review.text.full}</p>
                  <p><strong class="review-tag">${review.tag}</strong></p>
                  <div class="options">
                  <script defer>
                  function readFullReview() {
                    document.getElementById("review-text").innerHTML = "${review.text.full}
                  }
                     </script>
                     <button class="read-more" id="read-more" onclick="readFullReview()"><i class="fas fa-chevron-down"></i>Read More</button>
                     <button class="add-btn")"><i class="fas fa-plus"></i>Add to My List</button>
                  </div>
                </div>
                <img src="${review.object.picture_url}" />
              </div>
            </div>
              `;

      animeReviews.innerHTML = reviewEl;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getMangaReviews() {
  const url = "https://myanimelist.p.rapidapi.com/v2/manga/reviews?p=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5d8ef6b029mshdf231aa011b282ep1f99a7jsn1bdc6f4d638a",
      "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  let reviewEl = "";

  try {
    for (let review of result.reviews.slice(0, 20)) {
      reviewEl += `
            <div class="review">
              <div class="user">
                <div class="user-info">
                  <img src="${review.user.picture_url}" />
                  <h3><a href="${review.user.url}" target="_blank">${
        review.user.name
      }</a></h3>
                </div>
                <p><strong>Posted:</strong> ${review.date.date_str}</p>
              </div>
              <div class="review-content">
                <div class="review-info">
                  <h3><a href="${review.object.mal_url}" target="_blank">${
        review.object.title
      }</a></h3>
                  <p>${review.text.full.slice(0, 600)} ...</p>
                  <p><strong>${review.tag}</strong></p>
                  <div class="options">
                  <script>
                    function readFullReview() {
                      document.getElementById("review-text").innerHTML = "${
                        review.text.full
                      }";
                    }
                  </script>
                     <button class="read-more" id="read-more" onclick="readFullReview()"><i class="fas fa-chevron-down"></i>Read More</button>
                     <button class="add-btn")"><i class="fas fa-plus"></i>Add To My List</button>
                  </div>
                </div>
                <img src="${review.object.picture_url}" />
              </div>
            </div>
              `;
      mangaReviews.innerHTML = reviewEl;
    }
  } catch (error) {
    console.log(error);
  }
}
