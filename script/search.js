// async function searchlist() {
//   const url = `https://myanimelist.p.rapidapi.com/v2/anime/search?q=${search.value}&n=50&score=8&genre=1`;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "5d8ef6b029mshdf231aa011b282ep1f99a7jsn1bdc6f4d638a",
//       "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// EXPORT THIS FUNCTION TO PAGES WITH SEARCHBAR

function searchlist() {
  const search = document.getElementById("search").value;
  const searchBtn = document.getElementById("search-btn");
  console.log(search);

  searchBtn.addEventListener("click", searchlist);
}

searchlist();
