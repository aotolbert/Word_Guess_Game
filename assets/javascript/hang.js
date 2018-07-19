var firstname = ["Harry", "Jordan", "Raheem", "Eden", "Josef", "Kyle", "Christiano", "Lionel", "Antoinne", "Dele", "Christian", "Deandre", "Brad", "Tim", "Paul", "Michael", "Luis", "Virgil", "Gabriel", "David", "Jesse", "Mohammed", "Phillipe", "Roberto", "Sebastian",]

var lastname = ["Kane", "Henderson", "Sterling", "Hazard", "Martinez", "Walker", "Ronaldo", "Messi", "Griezmann", "Alli", "Eriksen", "Yedlin", "Guzan", "Howard", "Pogba", "Bradley", "Suarez", "VanDyke", "Jesus", "DeGea", "Lingard", "Salah", "Coutihno", "Firmino", "Giovinco",]

var firstpull;

var lastpull;

var guessedname = [];

var spacer;

var goodguess = false;

var guesscounter = 8;

var guessedbox;

var storedguess = "";


    function pullname() {
        var randomnumber = Math.floor(Math.random() * firstname.length);
        console.log(randomnumber);


        firstpull = firstname[Math.floor(randomnumber)];
        console.log(firstpull);


        lastpull = lastname[Math.floor(randomnumber)];
        console.log(lastpull);

        guessedname = firstpull.toLowerCase() + " " + lastpull.toLowerCase();

        console.log(guessedname);

    }   

pullname ();

    function displayname() {
        var displayboxes = document.getElementById("guessareafirst");
            for (i=0; i<guessedname.length; i++) {
                spacer = document.createElement("div");
                spacer.setAttribute("class", "mr-2 border-bottom border-dark w-5 p-3 text-hide uline");
                spacer.setAttribute("id", "letterbox" + i);
                spacer.textContent = guessedname[i];
                displayboxes.appendChild(spacer)
                }
      

    }

displayname();

    function displayfacts() {
        var facts =

        "<h3>Guesses left: " + guesscounter + "</h3>" +
        "<h3>Previous Guesses: " + storedguess + "</h3>" +
        "<h3> First Name Length: " + firstpull.length + "</h3>" +
        "<h3> Last Name Length: " + lastpull.length + "</h3>"
        ;
    
        
    
    
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#guesscounter").innerHTML = facts;
    


    }

displayfacts();



document.onkeyup = function(event) {

    var userguess = event.key;
    console.log(userguess);

    
    for (j=0; j<guessedname.length; j++) {
        var holdletter = document.getElementById("letterbox" + j);
        var letter = holdletter.innerHTML;
        // console.log(holdletter);
        // console.log(letter);

        if (userguess !== letter) {
            goodguess = false;
        }
    }


    for (j=0; j<guessedname.length; j++) {
        var holdletter = document.getElementById("letterbox" + j);
        var letter = holdletter.innerHTML;
        // console.log(holdletter);
        // console.log(letter);

        if (userguess == letter) {
            document.getElementById(("letterbox" + j)).setAttribute("class", "mr-3 border-bottom border-dark w-8 p-3 uline");
            goodguess = true;
            alert("Good Guess!")

        }

    }

    console.log(goodguess);


    if (goodguess === false) {
        alert("Bad Guess :(");
        guesscounter--;
        document.getElementById("image").setAttribute("src", "assets/images/Hangman_" + (8-guesscounter) + ".png");
        storedguess = storedguess + event.key + ", ";



    }

    console.log(guesscounter)

    if (guesscounter === 0) {
        alert("You lose! You mean that you've never hear of " + firstpull + " " + lastpull + " before?? Hit Refresh to try again!")
        pullname ();
        displayname();
        guesscounter = 8;
        document.getElementById("image").setAttribute("src", "assets/images/Hangman_" + (8-guesscounter) + ".png");


    }

    guessedbox = document.getElementsByClassName("text-hide");

    console.log(guessedbox);

    if (guessedbox.length === 0) {
        alert("Congratulations you really know your football! Hit Refresh to start over!")
        // holdletter;
        // storedguess = "";
        // guesscounter = 8;
        // guessedname = [];
        // spacer;
        // goodguess = false;
        // pullname();
        // displayname();
        // displayfacts();

    }
    


    displayfacts();




        

}




