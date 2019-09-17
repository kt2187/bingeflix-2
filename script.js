//Delete movie from watched movie list
var deleteMovie = document.querySelector("#want-to-watch ul");
deleteMovie.addEventListener("click", function(e) {
    if (e.target.className == "delete-button") {
        const li = e.target.parentElement;
        deleteMovie.removeChild(li);
    }
})

//Assign variables to elements
var moveMovie = document.querySelector("#want-to-watch ul");
var watchedMovieSection = document.querySelector("#watched-movies ul");

//Move movie to watched movie list
//Todo - figure out how to remove watched button once moved to watched list
moveMovie.addEventListener("click", function(e) {
        if (e.target.className == "watched-button") {
            //e.target is button. e is the event and target is the thing involved in the event click e.target is what was clicked
            //parentElement is ul
            //item is button on li
            const item = e.target.parentElement;
                moveMovie.removeChild(item);
                watchedMovieSection.appendChild(item);
                item.removeChild(e.target);
                console.log(item);
        }
    });

//Delete watched movie
    var deleteWatchedMovie = document.querySelector("#watched-movies ul");
deleteWatchedMovie.addEventListener("click", function(e) {
    if (e.target.className == "delete-button") {
        const li = e.target.parentElement;
        deleteWatchedMovie.removeChild(li);
    }
});

//Add movies to watched movie list

var addMovieForm = document.forms["add-movie"];
const list = document.querySelector("#want-to-watch ul");

addMovieForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const value = addMovieForm.querySelector("input[type='text']").value;
    
    //Create elements
		const li = document.createElement("li");
		const movieName = document.createElement("span");
		const deleteBtn = document.createElement("span");
		const watchBtn = document.createElement("span");

		//Add content
		deleteBtn.textContent = "Delete";
		movieName.textContent = value;
		watchBtn.textContent = "Watched";

		//Add classes
		movieName.classList.add("movie-title");
		deleteBtn.classList.add("delete-button");
		watchBtn.classList.add("watched-button")

		//Append to DOM
		li.appendChild(movieName);
		li.appendChild(deleteBtn);
		li.appendChild(watchBtn);
        list.appendChild(li);      
});

//Search movies
var searchForm = document.forms["search-movies"].querySelector("input");
searchForm.addEventListener("keyup", function(e) {
    var inputEntry = e.target.value.toLowerCase();
    var movieEntries = list.getElementsByTagName("li");
    Array.from(movieEntries).forEach(function(entry){
        var title = entry.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(inputEntry) != -1) {
            entry.style.display = "block";
        } else {
            entry.style.display = "none";
        }
    })
});
