/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string
*/

let test = "This is a string";

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/

let sum = 10 + 20;

/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/

let random = Math.floor(Math.random() * 20);

/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/

let Me = {
  Name: "John",
  Surname: "Smith",
  Age: 30,
};

/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/

delete Me.Age;

/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/

Me.Skills = ["Javascript", "soontm", "soontm"];

/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*/

Me.Skills.pop();

// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/

let diceRoll = () => {
  diceRoll = Math.floor(Math.random() * 6) + 1;
  return diceRoll;
};

diceRoll();

/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/

let whoIsBigger = (x, y) => {
  if (x > y) {
    return (whoIsBigger = x);
  } else {
    return (whoIsBigger = y);
  }
};

whoIsBigger(6, 5);

/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/

let splitMe = (x) => {
  if (typeof x === "string") {
    return (splitMe = x.split(" "));
  } else {
    return (splitMe = "You did not enter a string");
  }
};

splitMe("hello this is a test sentence");

/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter, otherwise should remove the last one
*/

let deleteOne = (x, y) => {
  if (typeof x === "string" && typeof y === "boolean") {
    if (y === true) {
      return (deleteOne = x.slice(1));
    } else {
      return (deleteOne = x.slice(0, -1));
    }
  } else {
    return (deleteOne = "You did not enter a string followed by a boolean");
  }
};

deleteOne("Elephant", false);

/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it. (COME BACK TO THIS ONE)
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/

let onlyLetters = (x) => {
  if (typeof x === "string") {
    onlyLetters = x.split(" ");
    let wordsWithNoNumbers = [];

    let onlyLettersArrayLength = onlyLetters.length;

    for (let i = 0; i < onlyLettersArrayLength; i++) {
      let noNumbers = [];
      if (isNaN(parseInt(onlyLetters[i]))) {
        noNumbers.push(onlyLetters[i]);
      }

      if (noNumbers.length > 0) wordsWithNoNumbers.push(noNumbers.join(""));
    }
    onlyLetters = wordsWithNoNumbers;
    return onlyLetters.join(" ");
  } else {
    return (onlyLetters = "You did not enter a string");
  }
};

onlyLetters("this 1222 is 123 a test 123 sentence");

/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*/

let isThisAnEmail = (x) => {
  const checkChars = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (isThisAnEmail = checkChars.test(x));
};

isThisAnEmail("test@test.com");

/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/

let whatDayIsIt = () => {
  let daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let newDate = new Date();
  let day = daysOfTheWeek[String(newDate.getDay())];

  newDate = day;

  whatDayIsIt = newDate;
};

whatDayIsIt();

/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/

let rollTheDices = (x) => {
  let diceObject = {};
  let diceRolls = [];
  let diceSumHolder = 0;

  for (let i = 0; i < x; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    diceRolls.push(roll);
    diceSumHolder = diceSumHolder + diceRolls[i];
  }

  diceObject["Sum of Dice"] = diceSumHolder;
  diceObject["Dice Rolls"] = diceRolls;

  return (rollTheDices = diceObject);
};

rollTheDices(2);

/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
*/

let HowManyDays = (dateInput) => {
  let today = new Date();
  return (HowManyDays = (today - dateInput) / (1000 * 60 * 60 * 24));
};

HowManyDays(new Date(2019, 10, 04));

/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*/

let isTodayMyBirthday = () => {
  let myBirthday = "02/10";
  let today = new Date();
  let dayHolder = String(today.getDate());
  let day = dayHolder;
  let month = String(today.getMonth() + 1);

  if (day < 10) {
    day = "0" + dayHolder;
  }
  today = day + "/" + month;

  if (today === myBirthday) {
    return (isTodayMyBirthday = true);
  } else {
    return (isTodayMyBirthday = false);
  }
};

isTodayMyBirthday();

// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file

/* Ex.11
   Write the function DeleteProp that receives an object and a string, and returns the object after deleting the property with that given name
*/

let testObject = { name: "b", surname: "b", age: 30, email: "test@test.com" };

let deleteProp2 = (obj, prop) => {
  let objectPull = {};
  if (obj === testObject) {
    objectPull = obj;
  }

  delete objectPull[prop];
  return objectPull;
};

deleteProp2(testObject, "name");

/* Movies array is an example array, used for the exs. Don't change it :)  */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* Ex.12 
    Write the function OlderMovie that finds the older movie in the array
*/

let olderMovie = () => {
  let result = { Year: 2100 }; // Setting starting point for first comparison

  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i]; // Sets new variable to be equal to the index movies object
    let currentYear = parseInt(movie.Year); // Convert the property to a number and set a new variable to be equal to the year property
    if (currentYear < result.Year) {
      // Check the starting year to the year contained in currentYear
      result = movie; // If the year in currentYear is lower than the year in result, it replaces the number for a new lower point
    }
  }
  return result; // Returns final value in result
};

olderMovie();

/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/

let countMovies = () => {
  return (countMovies = movies.length);
};

countMovies();

/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/

let onlyTitles = () => {
  let movieTitles = []; // Create a new array for the elements to be pushed to
  for (let i = 0; i < movies.length; i++) {
    // Create a loop that runs for every index of the first array
    let currentTitle = movies[i].Title; // Pull the title from the first arrays index and set it to a variable
    movieTitles.push(currentTitle); // Push the title stored in the variable into the second array
  }
  return movieTitles;
};

onlyTitles();

/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/

let onlyThisMillennium = () => {
  let currentMillennium = 2000;
  let millenniumArray = [];
  let oldMovies = [];
  for (let i = 0; i < movies.length; i++) {
    let movieYear = movies[i].Year;
    if (movieYear > 1999) {
      millenniumArray.push(movies[i]);
    } else {
      oldMovies.push(movies[i]);
    }
  }

  return millenniumArray;
};

onlyThisMillennium();

/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/

let getMovieById = (x) => {
  let getMovie = {};

  if (typeof x === "number") {
    getMovie = movies[x];
  } else {
    console.log("You did not enter a number");
    return false;
  }
  return getMovie;
};

getMovieById(1);

/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/

let sumYears = () => {
  let sumHold = 0;

  for (let i = 0; i < movies.length; i++) {
    let currentNum = movies[i].Year;
    sumHold = sumHold + parseInt(currentNum);
  }

  return sumHold;
};

sumYears();

/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/

/* Ex.19
    Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movies
*/

/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/

let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let deleteX = (x) => {
  let holdNumArray = [];

  for (let i = 0; i < numArray.length; i++) {
    if (x !== numArray[i]) {
      holdNumArray.push(numArray[i]);
    }
  }
  return holdNumArray;
};

deleteX(7);

// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/

let halfTree = (x) => {
  let treeArray = [];

  for (let i = 0; i < x; i++) {
    treeArray.push("*");
    let tree = treeArray.join("");
    console.log(tree);
  }
  return x;
};

halfTree(5);

/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *  
   *** 
  *****
*/

function tree(n) {
  let space = " ";
  let char = "*";

  for (let i = 1; i < n + 1; i++) {
    console.log(space.repeat(n - 1) + char.repeat(i * 2 - 1));
  }
}

tree(3);

/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/

let isItPrime = (x) => {
  let numberHold = 1;
  let numberArray = [];

  for (let i = 0; i < x + 1; i++) {
    if (x % numberHold == 0) {
      numberArray.push(numberHold);
    }
    numberHold++;
  }
  if (numberArray.length < 3) {
    return true;
  } else {
    return false;
  }
};

isItPrime(13);
