//1.
var favMovies = ["Inception", "Jaws", "Topgun", "Despicable Me", "E.T."];
window.console.log(favMovies[1]);
window.console.log("\n");

//2.
var movies = new Array(5);
movies[0] = "Spider Man";
movies[1] = "Avengers";
movies[2] = "Harry Potter";
movies[3] = "Glass Onion";
movies[4] = "Rush Hour";
window.console.log(movies[0]);
window.console.log("\n");

//3.
var movies = new Array(5);
movies[0] = "Spider Man";
movies[1] = "Avengers";
movies[2] = "Harry Potter";
movies[3] = "Glass Onion";
movies[4] = "Rush Hour";
movies.splice(2,0, "The Dark Knight");
window.console.log(movies.length);
window.console.log("\n");

//4.
var movies = ["Inception", "Jaws", "Topgun", "Despicable Me","Rush Hour"];
delete movies[0];
window.console.log(movies);
window.console.log("\n");

//5.
var movies = ["Inception", "Jaws", "Topgun", "Despicable Me","Rush Hour","Spider Man","Avengers"];
var index;
for (index in movies){
    if (movies.hasOwnProperty(index)){
    window.console.log(movies[index]);
    }
}
window.console.log("\n");

//6.
var movies = ["Inception", "Jaws", "Topgun", "Despicable Me","Rush Hour","Spider Man","Avengers"];
var index;
for (index of movies){
    window.console.log(index);
}
window.console.log("\n");

//7.
var movies = ["Inception", "Jaws", "Topgun", "Despicable Me","Rush Hour","Spider Man","Avengers"];
movies.sort();
var index;
for (index of movies){
    window.console.log(index);
}
window.console.log("\n");

//8.
var movies = ["Inception", "Jaws", "Topgun", "Despicable Me","Rush Hour","Spider Man","Avengers"];
var leastFavMovies = ["Barbarien","Bramhastra","Nope"];
window.console.log("Movies I like:")
window.console.log("\n");
var index;
for (index in movies){
    if (movies.hasOwnProperty(index)){
    window.console.log(movies[index] + "\n");
    }
}
window.console.log("\n");
window.console.log("Movies I regret watching:")
window.console.log("\n");
var i;
for (i in leastFavMovies){
    if (leastFavMovies.hasOwnProperty(i)){
    window.console.log(leastFavMovies[i] + "\n");
    }
}
window.console.log("\n");

//9.
var movies = ["Inception", "Jaws", "Topgun", "Despicable Me","Rush Hour","Spider Man","Avengers"];
var leastFavMovies = ["Barbarien","Bramhastra","Nope"];
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
var index;
for (index of movies){
    window.console.log(index);
}
window.console.log("\n");

//10.
var movies = ["Inception", "Jaws", "Topgun", "Despicable Me","Rush Hour","Spider Man","Avengers"];
var leastFavMovies = ["Barbarien","Bramhastra","Nope"];
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies.slice(movies.length-1));
window.console.log("\n");

//11.
var movies = ["Inception", "Jaws", "Topgun", "Despicable Me","Rush Hour","Spider Man","Avengers"];
var leastFavMovies = ["Barbarien","Bramhastra","Nope"];
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies.slice(0,1));
window.console.log("\n");

//12.
var movies = ["Inception", "Barbarien", "Bramhastra", "Despicable Me","Rush Hour","Nope","Avengers"];
var doNotLikeMovies = ["Barbarien","Bramhastra","Nope"];
var indices = [];
var i,j;
for (i=0; i<movies.length; i+=1){
    for (j=0; j<doNotLikeMovies.length; j+=1){
        if(movies[i] === doNotLikeMovies[j]){
            indices.push(i);
        }
    }
}
window.console.log(indices);

var favMovies = ["Harry Potter","Topgun","Spider Man"];

for (var k=0; k<indices.length; k+=1){
    movies[indices[k]] = favMovies[k];
}
window.console.log(movies);
window.console.log("\n");

//13.
var movies = [["Topgun", 1], ["Rush Hour", 2], ["Despicable Me", 3], ["Inception", 4], ["Nope", 5]];

var movieType = movies.filter(function(item){
    "use strict";
    return typeof item[0] === "string";
});
var movieNames = movieType.map(function(item){
    return item[0];
})
window.console.log(movieNames);
window.console.log("\n");

//14.
var employees = ["ZAK","JESSICA","MARK","FRED","SALLY"];
var i;
var showEmployee = function(employees) {
  for (i = 0; i < employees.length; i+=1) {
    console.log(employees[i]);
  }
};
showEmployee(employees);
window.console.log("\n");

//15.
var filterValues = function(values){
    "use strict";
    return values.filter(function(item){
    "use strict";
    return item !== false && item !== null && item !== 0 && item !== "";
});
};
window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
window.console.log("\n");

//16.
var randomItem = function(item) {
    "use strict";
    return item[Math.floor(Math.random() * item.length)];
}; 
var numbers = [1,2,3,4,5,6,7,8,9,10];
window.console.log(randomItem(numbers));
window.console.log("\n");

//17.
var largestNum = function(item){
    "use strict";
    return Math.max.apply(null,item);
};
var numbers = [1,2,3,4,5,6,7];
window.console.log(largestNum(numbers));


