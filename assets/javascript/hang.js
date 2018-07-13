var firstname = ["Harry", "Jordan", "Raheem", "Eden", "Josef", "Kyle", "Christiano", "Lionel", "Antoinne", "Dele", "Christian", "Deandre", "Brad", "Tim", "Paul", "Michael", "Luis", "Virgil", "Gabriel", "David", "Jesse", "Mohammed", "Phillipe", "Roberto", "Sebastian",]

var lastname = ["Kane", "Henderson", "Sterling", "Hazard", "Martinez", "Walker", "Ronaldo", "Messi", "Griezmann", "Alli", "Eriksen", "Yedlin", "Guzan", "Howard", "Pogba", "Bradley", "Suarez", "VanDyke", "Jesus", "DeGea", "Lingard", "Salah", "Coutihno", "Firmino", "Giovinco",]

var firstpull;

var lastpull;

var holdWord;

var answer;

var first = "";

var firstnameletters = [];

var lastnameletters = [];


// var answer = firstpull + lastpull;

function pullName() {

var randomnumber = Math.floor(Math.random() * firstname.length);
console.log(randomnumber);


firstpull = firstname[Math.floor(randomnumber)];
console.log(firstpull);

lastpull = lastname[Math.floor(randomnumber)];
console.log(lastpull);


    // function displayname() {
    //   var pull = document.getElementById("guessareahidden");
    //   var addName = document.createElement("h2");
    //     addName.textContent = firstname[randomnumber] + " " + lastname[randomnumber];
    //     pull.appendChild(addName);
    



    // answer = firstpull + lastpull;
    // var uniformanswer = answer.toLowerCase();
    // console.log(uniformanswer);

    // console.log(uniformanswer.length);

 
   
    // }
    
    // displayname();

    function hidefirstname () {
        var hidefirst = document.getElementById("guessareafirst");
        for (i=0; i<firstpull.length; i++) {
            var space = document.createElement("h1")
            space.textContent = "_";
            hidefirst.appendChild(space)
            }
    }

    // holdWord[firstpull].replace(holdWord[firstpull], "_");
    hidefirstname();

        function hidelastname () {
            
        var hidelast = document.getElementById("guessarealast");
        for (i=0; i<lastpull.length; i++) {
            var spacer = document.createElement("h1")
            spacer.textContent = "_";
            hidelast.appendChild(spacer)
            }


        }
    hidelastname();

    
       function storename () {
           var answer = firstpull + lastpull;
            var uniformfirst = firstpull.toLowerCase();
            var uniformlast = lastpull.toLowerCase();
            console.log(uniformanswer);
            // console.log(uniformanswer.length);
            // console.log(firstpull);
            // console.log(lastpull);

            firstnameletters = uniformfirst.split("");

            lastnameletters = uniformlast.split("");

       }


       storename();

       console.log(firstnameletters);
       console.log(lastnameletters);
}

pullName();

var answer = firstpull + lastpull;
var uniformanswer = answer.toLowerCase();
console.log(uniformanswer);

console.log(uniformanswer.length);


// for (i=0; i<uniformanswer.length; i++)
// var space = document.createElement("h1")
// space.textContent = "_";


// document.onkeyup = function(event) {

//     var userGuess = event.key;
    
//     if (userGuess !== computerGuess) {
//         alert ("Try again");
//         guessCounter --;
//         guessTracker = guessTracker + event.key + ", ";
        

//     }

//    else if (userGuess === computerGuess) {
//         alert ("Congratulations");
//         winCounter ++;
//         guessCounter = 10;
//         guessTracker = [];
//         random();
        

//     }

//     if (guessCounter === 0) {
//         alert ("You lose. Sorry buddy");
//         lossCounter ++;
//         guessCounter = 10;
//         guessTracker = [];
//         random();
//     }


document.onkeyup = function(event) {

    var userguess = event.key;
    
    console.log(userguess);

    if (userguess !== [firstnameletters]) {
        alert ("Bad Guess");
    }


    else {
        alert ("Good Guess!");
    }






}
