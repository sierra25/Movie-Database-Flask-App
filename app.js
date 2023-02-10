//Selecting elements from the DOM
const form = document.querySelector('form');
/*const input = document.querySelector('#inputValue');*/
const searchButton = document.querySelector('#search');
const input = document.querySelector('#searchInput');
const movieList = document.querySelector('.movie-list');



eventListeners();

function eventListeners(){
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();

    });
}

function loadJSON(){
    fetch('./static/movies.json')
    .then(response => response.json()) // will parse the Json file string to something Javascript can understand
    .then(data =>{
        let html = '';
        data.forEach(movie => {
            html += `
                <div class = "movie-item">
                    
                    <div class = "movie-content">
                        <h3 class = "movie-year">${movie.year}</h3>
                        <span class = "movie-cast">${movie.cast}</span>
                        <p class = "movie-genres">$${movie.genres}</p>
                    </div>
                </div>
            `;
        });
        movieList.innerHTML = html;
    })
    .catch(error => {

        //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })
}
















        var d;
        //Gets and loads content from json file.
        fetch('./static/movies.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) { //This function is where we would handle the JSON data
                appendData(data, 0); // calls appendData method
                d = data;
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        var per_page = 5; // limits the number of pages
        var j = 0;

        function latest()
        {
            document.getElementById("movies").innerHTML = "";
            var lat = d.sort(function(obj1, obj2) {
            // Descending: newest to oldest
                return obj2.year - obj1.year;
            });
            d = lat;
            appendData(lat, 0);
        }

        function moviename(){
        document.getElementById("movies").innerHTML = "";
        var name1 = d.sort(function(a, b) {
        // Descending: newest to oldest

            if(a.title < b.title) { return -1; }

            if(a.title > b.title) { return 1; }

            return 0;
        });

        d = name1;
        appendData(name1, 0);

    }


    function oldest(){

            document.getElementById("movies").innerHTML = "";
            var old1 = d.sort(function(y, x) {
            // Ascending: oldest to newest
                return y.year - x.year;
            });
            d = old1;
            appendData(old1, 0);
        }

        function searchList(){

            var inputted = document.getElementById("inputValue").value;// has the information that was input in the input field
            var results;
            console.log(inputted); // will print the input value to the console
            document.getElementById("movies").innerHTML = "";
            var name2 = d.sort(function(j, k) {
            // Descending: newest to oldest

                if(j.title < k.title) { return -1; }

                if(j.title > k.title) { return 1; }

                return 0;
            });

            d = name2;
            appendData(name2, 0);

        }




           // document.getElementById("movies").innerHTML = " "; // empties movie content card container
            // for loops through the json content looking at different parameters
            /*for( var i = 0 ; i < d.length; i++) {

                if( (d[i].year == inputted) || ((d[i].cast.toUpperCase) == (inputted.toUpperCase)) || ((d[i].genres.toUpperCase) == (inputted.toUpperCase)) ) {
                  document.getElementById("movies").innerHTML = " ";
                    results.push( d[i] );

                }
                }
             */
            /*
            var cloneArray = JSON.parse(JSON.stringify(data));
            document.getElementById("movies").innerHTML = " ";
            for( var i = 0 ; i < cloneArray.length; i++) {
                if( (cloneArray[i].year == inputted) || ((cloneArray[i].cast.toUpperCase) == (inputted.toUpperCase)) || ((cloneArray[i].genres.toUpperCase) == (inputted.toUpperCase)) ) {

                      results.push( cloneArray[i] );

                  }

            }


            d = results;
            appendData(results, 0);


        }

*/









            /* //Create a new array to hold the objects that matches with the search content and send the array to append data
            var arrayOfMovies[i];
            d.forEach(function{

                if( input == d[i].year || input == d[i].cast ||input == d[i].genres){
                return d[i];
            }

            d = array1[i];
            appendData(array1, 0);
        }


*/



        function nextpage()
        {
            document.getElementById("movies").innerHTML="";
            j = j + 1;
            var a = j * per_page;
            appendData(d, a);
        }

        function previouspage()
        {
            document.getElementById("movies").innerHTML="";
            if(j > 0)
            {
                j = j - 1;
            }
            var a = j * per_page;
            appendData(d, a);
        }
// add items to the end of the list
        function appendData(data, b){ 
            var mainContainer = document.getElementById("movies");
            for (var i = b; i < b + per_page; i++) {
                var div1 = document.createElement("div"); //creates the HTML element specified by tagName div
                div1.className = "card bg-dark text-white";// gives the div1 a class of "card bg-dark text-white"
                var div2 = document.createElement("div");//creates the HTML element specified by tagName div
                div2.className = "card-body";// gives the div2 a class of "card-body"
                var h4 = document.createElement("h4");//creates the HTML element specified by tagName h4
                h4.className = "card-title";// gives the h4,the card title, a class of "card-title"
                var p = document.createElement("p");//creates the HTML element specified by tagName p
                p.className = "card-text";// gives the p a class of "card-text"

                var br = document.createElement("br");//creates the HTML element specified by tagName br
                h4.innerHTML = data[i].title;//sets the title in the card for a specific movie from the json file
                p.innerHTML = 'Year: ' + data[i].year;

                var idTooltip = 'test';
                var button1 = document.createElement("button"); //creates the HTML element specified by tagName button
                button1.className = "show-more";// gives the button1 a class of "show-more"
                button1.innerHTML ='Show More';

               button1.setAttribute('id', idTooltip);
                button1.addEventListener("click", function () {
                    alert(p.innerHTML);


                });




                mainContainer.appendChild(div1);//adds the new created div1 elemnet to the html tag with the id "movies"
                div1.appendChild(div2);//adds the new created div2 elemnet to the html
                div2.appendChild(h4);//adds the new created h4 elemnet to the html
                div2.appendChild(p);//adds the new created p elemnet to the html
                mainContainer.appendChild(br);//adds the new created br elemnet to the html
                div1.appendChild(button1);
            }
        }



        /*Adding Search Bar Functionality*/
        let searchInput = document.getElementById('searchInput');

        searchInput.addEventListener('keyup',function(event){
        let searchQuery = event.target.value.toLowerCase();
        // console.log(event.target.value)
        // console.log(username.value) 
        console.log(searchQuery)

        let allNamesDOMCollection  = document.getElementsByClassName('data[i].title') // can also use getElementByTagName('li')
        // console.log(allNamesDOMCollection
        
        for(let i=0;i<allNamesDOMCollection.length;i++){
            const currentName = allNamesDOMCollection[i].textContent.toLowerCase();
            // console.log(searchQuery.length)
            
            //searchQuery == currentName.substring(0,searchQuery.length)
            // 'k' == karl.substring(0,1) (k)
            // this method only search from start
            if(currentName.includes(searchQuery))  
            {
                console.log(currentName)
                allNamesDOMCollection[i].style.display = 'block';
            }   
            else{
                // document.getElementById('result name').style.display = 'none'
                allNamesDOMCollection[i].style.display = 'none';
            }

    }
})




/*var content = document.getElementsByClassName("card-text");
 var button4 = document.getElementsByClassName("show-more");


button.onclick = function(){

alert('blah');
if(content.className == "card-text open"){
    //shrink the box
    content.className="";
    button.innerHTML="Show More";
} else{
//expand the box
content.className="open";
button.innerHTML="Show Less";
}
};
*/
/*
//Monitors the event that the button is clicked and has a function to handle ethat situation
buttonElement.onclick = function(event){
    event.preventDefault();// Will prevent any action that the browser automatically does for you, like reloading the page after pressing a submit button. Normally when you are inside of a form the browser is kind and decides to send the information you put inside the input field to a server and this causes the page to reload.


    const value = inputElement.value;// Will get the information that I put inside of the input field
    console.log('Value: ', value); // will print the input valu eto the console
    console.log("Hello world, this button has been clicked!!!");
}
*/
