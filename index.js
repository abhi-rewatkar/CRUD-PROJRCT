
let movies = [
  {
    id: 1,
    title: "Anand",
    genres: ["Drama"],
    ratings: [
      5, 6, 8, 1, 2, 5, 8, 2, 8, 6, 10, 6, 3, 7, 6, 4, 1, 10, 3, 6, 5, 3, 9, 8,
      7, 2, 4, 10, 5, 9,
    ],
    poster:
      "MV5BMjE0Mzk3OTk2NF5BMl5BanBnXkFtZTgwMTQ1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
    duration: "PT161M",
    releaseDate: "1971-03-12",
    averageRating: 0,
    storyline:
      "A melodramatic tale of a man with a terminal disease. The story begins with Dr Bhaksar winning a literary prize for his book about a patient called Anand. The rest is flashback. Anand, the title character, is suffering from lymphosarcoma of the intestine. He, however appears to be cheerful on the outside and is determined to extract as much pleasure from his remaining lifespan as is possible. Dr. Bhaskar his physician tends to Anand in his last days. After Anand dies we can however still hear his voice which was recorded on a tape. Dr Bhakser writes a book on his patient and wins a literary prize for it                Written by\nAnonymous",
    actors: ["Rajesh Khanna", "Amitabh Bachchan", "Sumita Sanyal"],
    imdbRating: 8.9,
    posterurl:
      "https://circle.youthop.com/wp-content/uploads/2021/07/3_Idiots.jpg",
  },
  {
    id: 2,
    title: "Dangal",
    genres: ["Action", "Biography", "Drama"],
    ratings: [
      5, 6, 3, 9, 6, 9, 7, 6, 4, 2, 7, 1, 10, 7, 7, 6, 2, 4, 2, 5, 7, 8, 6, 7,
      3, 3, 4, 6, 8, 1,
    ],
    poster:
      "MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg",
    duration: "PT161M",
    releaseDate: "2016-12-23",
    averageRating: 0,
    storyline:
      "Biopic of Mahavir Singh Phogat, who taught wrestling to his daughters Babita Kumari and Geeta Phogat. Geeta Phogat was India's first female wrestler to win at the 2010 Commonwealth Games, where she won the gold medal (55 kg) while her sister Babita Kumari won the silver (52 kg).                Written by\nDibyayan_Chakravorty",
    actors: ["Aamir Khan", "Sakshi Tanwar", "Fatima Sana Shaikh"],
    imdbRating: 8.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg",
  },
  {
    id: 3,
    title: "Drishyam",
    year: "2013",
    genres: ["Crime", "Drama", "Thriller"],
    ratings: [
      4, 7, 4, 6, 1, 8, 6, 4, 4, 6, 4, 1, 5, 9, 4, 7, 5, 6, 5, 1, 8, 3, 9, 1, 7,
      4, 6, 10, 6, 6,
    ],
    poster:
      "MV5BYmY3MzYwMGUtOWMxYS00OGVhLWFjNmUtYzlkNGVmY2ZkMjA3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX330_CR0,0,330,432_AL_.jpg",
    contentRating: "",
    duration: "PT160M",
    releaseDate: "2013-12-19",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Georgekutty (Mohanlal) is a cable TV network owner in a remote and hilly village in Kerala. He lives a happy life with his wife and 2 girls. The first half revolves around the depiction of their happy family. Anju (Ansiba), Georgekutty's daughter goes to a school trip in between the proceedings. After a few days a guy who had been at the school trip with her meets Anju. He blackmails her with a video of her that he had captured during the school trip. In the course of events he is accidentally killed by Rani (Meena) and Anju. Georgekutty on returning home is appraised of the events and thus begins a cat and mouse game as the murdered person is the son of IG Geeta Prabhakar (Asha Sharath) and Prabhakar (Siddique). How the family weathers the storm that ensues during the murder investigation forms the rest of the story leading to a deeply satisfying and unexpected climax.                Written by\nAthul",
    actors: ["Mohanlal", "Meena", "Ansiba"],
    imdbRating: 8.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYmY3MzYwMGUtOWMxYS00OGVhLWFjNmUtYzlkNGVmY2ZkMjA3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX330_CR0,0,330,432_AL_.jpg",
  },
  {
    id: 4,
    title: "Nayakan",
    year: "1987",
    genres: ["Crime", "Drama"],
    ratings: [
      6, 3, 2, 1, 8, 10, 5, 8, 1, 10, 6, 9, 6, 5, 1, 6, 9, 1, 1, 3, 3, 9, 4, 9,
      8, 1, 3, 8, 4, 10,
    ],
    poster:
      "MV5BNTI2Zjc5ODMtNGE0NC00YjU5LTk0NjktZjU4ZDRlZDFkZWU0XkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SY480_SX320_AL_.jpg",
    contentRating: "",
    duration: "PT145M",
    releaseDate: "1987-07-31",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A small boy (Ratnavelu) from Tamilnadu sees his father, a labor leader, killed in cold blood by a policeman. He kills the policeman and runs away to the city of Bombay. From there, the story traces his ascent to become a mafia chief (Velu Naicker).                Written by\nSathyanarayanan Narayanaswamy <sathya@ntd.comsat.com>",
    actors: ["Kamal Haasan", "Saranya Ponvannan", "Delhi Ganesh"],
    imdbRating: 8.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTI2Zjc5ODMtNGE0NC00YjU5LTk0NjktZjU4ZDRlZDFkZWU0XkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SY480_SX320_AL_.jpg",
  },
  {
    id: 5,
    title: "Anbe Sivam",
    year: "2003",
    genres: ["Adventure", "Comedy", "Drama"],
    ratings: [
      9, 7, 1, 6, 10, 5, 9, 5, 3, 7, 2, 10, 2, 3, 1, 2, 3, 1, 3, 3, 8, 7, 9, 3,
      4, 9, 3, 1, 10, 1,
    ],
    poster:
      "MV5BNWQxY2MyNmUtOTkxZC00MmQ3LWFkMjMtNWU3YmFlZDM5YTBhXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX352_CR0,0,352,499_AL_.jpg",
    contentRating: "",
    duration: "PT160M",
    releaseDate: "2003-01-14",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Nallasivam (Kamal Haasan) and Anbarasu (Madhavan) are drawn together by the strings of fate after they come into contact at the Bhuvaneshwar airport. Anbarasu is an advertisement director, while Nallasivam is a trade unionist. Fate entwines their travel plans, and they end up travelling to Chennai together. In the course of their journey, Anbarasu, born with a golden spoon, is touched by the realities of the sufferings of a normal human being when he witnesses the dead and the injured during a train accident, and he volunteers to donate his blood, which is of a very rare group, despite his fear of blood. The flashback of Nallasivam is recounted during one of their journeys. Nallasivam is a communist trade unionist, who fights for higher wages for his comrades. By chance, he falls in love with the daughter Bala (Kiran) of a rich industrialist, Bala's father, Padaiyacchi (Nasser). Due to the opposition, they plan to elope and get married, but unfortunately, Nallasivam meets with an ...                Written by\nNiranjan Venkatraman <v.niranjan@ieee.org>",
    actors: ["Kamal Haasan", "Madhavan", "Kiran Rathod"],
    imdbRating: 8.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNWQxY2MyNmUtOTkxZC00MmQ3LWFkMjMtNWU3YmFlZDM5YTBhXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX352_CR0,0,352,499_AL_.jpg",
  },
  {
    id: 6,
    title: "Gol Maal",
    year: "1979",
    genres: ["Comedy", "Romance"],
    ratings: [
      7, 9, 10, 8, 8, 9, 8, 9, 9, 2, 9, 4, 3, 9, 3, 3, 10, 8, 8, 10, 3, 10, 9,
      3, 3, 6, 2, 2, 6, 4,
    ],
    poster:
      "MV5BMjA4OTczODgxNF5BMl5BanBnXkFtZTgwMDAzMTU2NDE@._V1_SY250_CR0,0,187,250_AL_.jpg",
    contentRating: "",
    duration: "PT144M",
    releaseDate: "1979-04-20",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Ramprasad is a recent college graduate who finds a job with a finicky man, Bhavani Shankar, who believes that a man without a mustache is a man without a character. Bhavani Shankar is also against any of his employees indulging in recreation of any kind. When Ramprasad is caught by his boss at a soccer match, he has to invent a twin brother, the clean-shaven Laxman Prasad, to save his job. When Bhavani's daughter falls in love with the clean-shaven Laxman Prasad, and insists on marrying him, and Bhavani insists she should marry Ramprasad, things take a whacky turn. A fake mother and a hilarious chase are other enjoyable features involved in this comedy.                Written by\nVijay",
    actors: ["Amol Palekar", "Bindiya Goswami", "Deven Verma"],
    imdbRating: 8.7,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4OTczODgxNF5BMl5BanBnXkFtZTgwMDAzMTU2NDE@._V1_SY250_CR0,0,187,250_AL_.jpg",
  },
  {
    id: 7,
    title: "Black Friday",
    year: "2004",
    genres: ["Crime", "Drama", "Thriller"],
    ratings: [
      8, 5, 10, 2, 4, 7, 4, 4, 10, 1, 7, 8, 9, 4, 5, 8, 10, 1, 8, 4, 2, 4, 3, 4,
      8, 6, 3, 2, 4, 1,
    ],
    poster:
      "MV5BMmU1NDhjYTQtYjQxYy00MjlmLWIxMjItMjllMmE2NDRlY2ZhXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_SX400_AL_.jpg",
    contentRating: "",
    duration: "PT143M",
    releaseDate: "2007-02-09",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A dramatic presentation of the bomb blasts that rocked Bombay on March 12, 1993, displays the police investigation, amidst allegations of human rights violations, led by DCP Rakesh Maria, in tracking down the suspects, especially Bashir Khan. Bashir managed to elude authorities by re-locating to Rajasthan, Uttar Pradesh, Delhi, and West Bengal, after finally being apprehended in Bombay. His confession and subsequent flashbacks showcases the apathy shown by authorities who refused to intervene during the destruction of the sacred Babri Masjid by Hindu Kar Sevaks, and the inability of the police to fulfill their mandate and protect the vulnerable, forcing many to flee to other locations. The subsequent aftermath that succeeded in irreversibly polarizing communities in Bombay; Pakistan's involvement in training and arms' supplies; the main alleged suspects, Dawood Ibrahim, and Mushtaq Memon, sought refuge in Dubai, United Arab Emirates, while Indian politicians made a cosmetic move to ...                Written by\nrAjOo (gunwanti@hotmail.com)",
    actors: ["Kay Kay Menon", "Pavan Malhotra", "Aditya Srivastava"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMmU1NDhjYTQtYjQxYy00MjlmLWIxMjItMjllMmE2NDRlY2ZhXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_SX400_AL_.jpg",
  },
  {
    id: 8,
    title: "Taare Zameen Par",
    year: "2007",
    genres: ["Drama", "Family", "Music"],
    ratings: [
      1, 9, 10, 4, 1, 6, 2, 9, 5, 10, 4, 5, 7, 6, 3, 8, 7, 4, 1, 2, 1, 5, 7, 10,
      3, 10, 8, 2, 4, 3,
    ],
    poster:
      "MV5BNTVmYTk2NjAtYzY3MS00YjFjLTlkYzktYzg3YzMyZDQyOWRiXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,346,500_AL_.jpg",
    contentRating: "PG",
    duration: "PT165M",
    releaseDate: "2008-12-26",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Ishaan Awasthi is an eight-year-old whose world is filled with wonders that no one else seems to appreciate; colours, fish, dogs and kites are just not important in the world of adults, who are much more interested in things like homework, marks and neatness. And Ishaan just cannot seem to get anything right in class. When he gets into far more trouble than his parents can handle, he is packed off to a boarding school to 'be disciplined'. Things are no different at his new school, and Ishaan has to contend with the added trauma of separation from his family. One day a new art teacher bursts onto the scene, Ram Shankar Nikumbh, who infects the students with joy and optimism. He breaks all the rules of 'how things are done' by asking them to think, dream and imagine, and all the children respond with enthusiasm, all except Ishaan. Nikumbh soon realizes that Ishaan is very unhappy, and he sets out to discover why. With time, patience and care, he ultimately helps Ishaan find himself.                Written by\nAnonymous",
    actors: ["Darsheel Safary", "Aamir Khan", "Tanay Chheda"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTVmYTk2NjAtYzY3MS00YjFjLTlkYzktYzg3YzMyZDQyOWRiXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,346,500_AL_.jpg",
  },
  {
    id: 9,
    title: "Jaane Bhi Do Yaaro",
    year: "1983",
    genres: ["Comedy", "Drama"],
    ratings: [
      9, 10, 10, 7, 1, 2, 6, 7, 10, 10, 8, 2, 8, 3, 7, 3, 4, 8, 5, 2, 10, 9, 5,
      10, 10, 5, 7, 9, 10, 2,
    ],
    poster:
      "MV5BNzQ0MzA3NDY3Nl5BMl5BanBnXkFtZTcwOTAwMzIzMg@@._V1_SY235_CR0,0,177,235_AL_.jpg",
    contentRating: "",
    duration: "PT132M",
    releaseDate: "1983-08-12",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Vinod (Naseeruddin Shah) and Sudhir (Ravi Baswani) are two professional photographers trying to start a photo studio. The first real assignment that they get, from the activist magazine Khabardar (literally meaning beware), draws them into the shady world of Bombay real estate. They discover that one of the biggest builders in Bombay, Tarneja, is trying to bribe Municipal Commissioner D'Mello (Satish Shah) into giving him a bridge contract. Meanwhile D'Mello is negotiating with Tarneja's arch rival Ahuja (Om Puri). The contract is finally awarded to a third person. By chance Vinod and Sudhir find out that Tarneja has murdered D'Mello...                Written by\n<bagchi@jhu.edu>",
    actors: ["Naseeruddin Shah", "Ravi Baswani", "Bhakti Barve"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQ0MzA3NDY3Nl5BMl5BanBnXkFtZTcwOTAwMzIzMg@@._V1_SY235_CR0,0,177,235_AL_.jpg",
  },
  {
    id: 10,
    title: "3 Idiots",
    year: "2009",
    genres: ["Comedy", "Drama"],
    ratings: [
      5, 4, 8, 7, 2, 7, 1, 10, 1, 2, 3, 8, 4, 9, 4, 5, 5, 1, 3, 6, 6, 3, 8, 5,
      6, 8, 8, 1, 5, 7,
    ],
    poster:
      "MV5BZWRlNDdkNzItMzhlZC00YTdmLWIwNjktYjY5NjQ1ZmQ3N2FkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,373,500_AL_.jpg",
    contentRating: "11",
    duration: "PT170M",
    releaseDate: "2009-12-25",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Farhan Qureshi and Raju Rastogi want to re-unite with their fellow collegian, Rancho, after faking a stroke aboard an Air India plane, and excusing himself from his wife - trouser less - respectively. Enroute, they encounter another student, Chatur Ramalingam, now a successful businessman, who reminds them of a bet they had undertaken 10 years ago. The trio, while recollecting hilarious antics, including their run-ins with the Dean of Delhi's Imperial College of Engineering, Viru Sahastrabudhe, race to locate Rancho, at his last known address - little knowing the secret that was kept from them all this time.                Written by\nrAjOo (gunwanti@hotmail.com)",
    actors: ["Aamir Khan", "Madhavan", "Mona Singh"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTVmYTk2NjAtYzY3MS00YjFjLTlkYzktYzg3YzMyZDQyOWRiXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,346,500_AL_.jpg",
  },


];




if (localStorage.getItem("movies") !== null) {
  movies = JSON.parse(localStorage.getItem("movies"));
}
else {
  //creating the local storage if we passes the blank array
  localStorage.setItem("movies", JSON.stringify(movies));
}

//adding the new property in the array 

// for(let i = 0; i <= movies.length; i++)
// {
//   movies[i].blocked === false;
// }




let totalPages = null;
let currentPage = null;
let start = null;
let end = null;
let paginate = [];

function setupPagination(){

  //total number of pages 
totalPages = Math.ceil(movies.length / 10);
document.getElementById("total_Page").innerText = totalPages;
// console.log(totalPages);

currentPage = 1;
document.getElementById("currentPage").innerText = currentPage;

let start = (currentPage - 1)*10;
let end = currentPage * 10;

let serial = start + 1;

//displaying the paginated movies of the total movies
let paginate = movies.slice(start, end);

generatePageLinks();

} 


//total number of pages 
totalPages = Math.ceil(movies.length / 10);
// console.log(totalPages);

currentPage = 1;
start = 0;
end = 10;

let serial = start + 1;

//displaying the paginated movies of the total movies
paginate = movies.slice(start, end);

document.getElementById("total_Page").innerText = totalPages;



function displayMovieTable(data) {

  document.getElementById("movies").innerHTML = "";

  
let serial = start + 1;

  data.forEach((movie, index) => {

    let row = document.createElement("tr");

    let numbering = document.createElement("td");
    numbering.append(serial++);
    row.appendChild(numbering);

    let titleTD = document.createElement("td");
    titleTD.append(movie.title);
    row.appendChild(titleTD);

    let releaseDate = document.createElement("td");
    releaseDate.append(movie.releaseDate);
    row.appendChild(releaseDate);

    let genres = document.createElement("td");
    let genresString = "";
    movie.genres.forEach((genre, index) => {
      genresString += genre + ", ";
    })
    // console.log(genresString.substring(0,genresString.length-2))
    genres.append(genresString.substring(0, genresString.length - 2));


    row.appendChild(genres);

    let duration = document.createElement("td");
    var strDuration = movie.duration;
    var matches = strDuration.match(/(\d+)/);
    duration.append(matches[0] + "M");
    row.appendChild(duration);


    let imdbRating = document.createElement("td");
    imdbRating.append(movie.imdbRating);
    row.appendChild(imdbRating);

    // let contentRating = document.createElement("td");
    // contentRating.append(movie.contentRating);
    // row.appendChild(contentRating);

    let Action = document.createElement("td");
    Action.classList.add("actions");

    let view = document.createElement("i");
    view.classList.add("fas");
    view.classList.add("fa-eye");
    view.onclick = openModal.bind(this, movie.id);
    // view.addEventListener('click', openModal);
    // view.onclick=function(){
    //   movieid = movie.id;
    //   openModal();
    // }



    let edit = document.createElement("i");
    edit.classList.add("fas");
    edit.classList.add("fa-edit");
    edit.onclick = setupdata.bind(this, movie.id);

    let trash = document.createElement("i");
    trash.classList.add("fas");
    trash.classList.add("fa-trash");
    trash.onclick = deleteMovie.bind(this, movie.id);


    Action.appendChild(view);
    Action.appendChild(edit);
    Action.appendChild(trash);


    let circle;
    if(movie.blocked === true)
    {
      circle = document.createElement('p');
      circle.classList.add("circle_blocked");
    }
    Action.append(circle);

    row.appendChild(Action);

    document.getElementById("movies").appendChild(row);

  })

}

//first time call on onloaddisplay
setupPagination();
displayMovieTable(paginate);


// loading the next page
function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    openPage(currentPage);
    // start += 10;
    // end += 10;
    // serial = start + 1;


    // paginate = movies.slice(start, end);
    // displayMovieTable(paginate);

    // document.getElementById("currentPage").innerText = currentPage;

  }
}

function prevPage() {
  if (currentPage >= 1) {
    currentPage--;
    openPage(currentPage);
    // start -= 10;
    // end -= 10;
    // serial = start + 1;


    // paginate = movies.slice(start, end);
    // displayMovieTable(paginate);

    // document.getElementById("currentPage").innerText = currentPage;

  }
}

// open page on the click of page
function generatePageLinks() {

  document.getElementById("pages").innerHTML="";

  for (let i = 1; i <= totalPages; i++) {

    let link = document.createElement("a");
    link.append(i);
    link.onclick = openPage.bind(this, i);
    link.classList.add("pages_event");

    document.getElementById("pages").appendChild(link);
  }

  // document.getElementById("pages")
}




// taking pagenumber as Input
function openPage(Pagenumber) {

  if (Pagenumber !== "" && Pagenumber >= 1 && Pagenumber <= totalPages) {
    currentPage = Pagenumber;
    start = (currentPage - 1) * 10;
    end = currentPage * 10;
    serial = start + 1;


    paginate = movies.slice(start, end);
    displayMovieTable(paginate);

    document.getElementById("currentPage").innerText = currentPage;

  }


}




// opning the single movie info

function openModal(movieid) {

  let movie = movies.find((movies, index) => {
    return movies.id === movieid;
  })

  // console.log(movie);

  document.getElementById("title").innerText = movie.title;
  document.getElementById("poster").src = movie.posterurl;
  document.getElementById("genre").innerText = movie.genres;
  document.getElementById("storyline").innerText = movie.storyline;
  document.getElementById("actors").innerText = movie.actors;
  document.getElementById("releaseDate").innerText = movie.releaseDate;
  document.getElementById("Runtime").innerText = movie.duration;
  document.getElementById("imbdrating").innerText = movie.imdbRating;
  document.getElementById("averagerating").innerText = movie.averageRating;

  document.getElementById("viewModal").style.display = "flex";
}

//opening the addmovie modal
function openaddmovie() {
  document.getElementById("addmovieModal").style.display = "flex";
}






//update the movie
let datatoupdate = null;
function setupdata(id) //setupdate
{

  let movie = movies.find((movie, index) => {
    return id === movie.id;
  })

  datatoupdate = movie;
  console.log(movie);

  document.getElementById("update_title").value = movie.title;
  let genres = "";
  movie.genres.forEach((genre, index) => {
    genres += genre + ",";
  })
  document.getElementById("update_genres").value = genres.substring(0, genres.length - 1);

  document.getElementById("update_duration").value = movie.duration;
  document.getElementById("update_relesedate").value = movie.releaseDate;


  let actors = "";
  movie.actors.forEach((actor, index) => {
    actors += actor + ",";
  })
  document.getElementById("update_actor").value = actors.substring(0, actors.length - 1);
  document.getElementById("update_imbdrating").value = movie.imdbRating;
  document.getElementById("update_url").value = movie.posterurl;
  document.getElementById("update_text").value = movie.storyline;

if(movieToUpdate.blocked===true)
{
 document.getElementById("update_blocked").checked = true;
}
else
{
  document.getElementById("update_blocked").checked = false;
}



  document.getElementById("updatemovieModal").style.display = "flex";
}





// // update new movie  
function updateMovie() {

  datatoupdate.title = document.getElementById("update_title").value;
  datatoupdate.genres = document.getElementById("update_genres").value.split(", ");
  datatoupdate.duration = document.getElementById("update_duration").value;
  datatoupdate.releaseDate = document.getElementById("update_relesedate").value;
  datatoupdate.actors = document.getElementById("update_actor").value.split(",");
  datatoupdate.imdbRating = document.getElementById("update_imbdrating").value;
  datatoupdate.posterurl = document.getElementById("update_url").value;
  datatoupdate.storyline = document.getElementById("update_text").value;
  datatoupdate.blocked = document.getElementById("update_blocked").value;

  if(document.getElementById("update_blocked").checked)
  {
    movieToUpdate.blocked = true  ;
  }

  console.log(datatoupdate);

  // movies.push(movie);
  displayMovieTable(paginate);
  closeModal("updatemovieModal", true );


}





// creating new movie
function createMovie() {

  // console.log("hello")
  let lastId;
  let movie;
  if (movies.length !== 0) {
    lastId = movies[movies.length - 1].id;
  }
  else {
    lastId = 0;
  }

  // let lastId = movies[movies.length-1].id;
  // console.log(lastid);

  movie = {
    ratings: [],
    id: lastId + 1,
    blocked:false,
  }

  movie.title = document.getElementById("add_title").value;
  movie.genres = document.getElementById("add_genres").value.split(", ");
  movie.duration = document.getElementById("add_duration").value;
  movie.releaseDate = document.getElementById("add_relesedate").value;
  movie.actors = document.getElementById("add_actor").value.split(",");
  movie.imdbRating = document.getElementById("add_imbdrating").value;
  movie.posterurl = document.getElementById("add_url").value;
  movie.storyline = document.getElementById("text").value;

  // console.log(movie);

  movies.push(movie);
  alert("Movie Added");
  localStorage.setItem("movies", JSON.stringify(movies));
  setupPagination();
  displayMovieTable(paginate);
  closeModal("addmovieModal", true);

  //  document.getElementById("add_form").reset();
  document.getElementById("add_relesedate").type = "text";

}





// closing the modal
function closeModal(modal_id,target_id = false) {

  if(target_id === modal_id || target_id === true)
  {
    document.getElementById(modal).style.display = "none";

  }
}





// function to convert text to date
function convertToDate() {
  document.getElementById("add_relesedate").type = "date";
}





//function for deleting movie
function deleteMovie(id) {
  let confirmation = confirm("Are you sure you want to delete ");
  console.log(id);
  if (confirmation == true) {
    let index = movies.findIndex((movie, id) => {
      return movie.id === id;
    })
    // console.log(index);

    movies.splice(index, 1);
    localStorage.setItem("movies", JSON.stringify(movies));

    displayMovieTable(paginate);
  }

}







