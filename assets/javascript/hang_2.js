var firstname = ["Harry", "Jordan", "Raheem", "Eden", "Josef", "Kyle", "Christiano", "Lionel", "Antoinne", "Dele", "Christian", "Deandre", "Brad", "Tim", "Paul", "Michael", "Luis", "Virgil", "Gabriel", "David", "Jesse", "Mohammed", "Phillipe", "Roberto", "Sebastian",]

var lastname = ["Kane", "Henderson", "Sterling", "Hazard", "Martinez", "Walker", "Ronaldo", "Messi", "Griezmann", "Alli", "Eriksen", "Yedlin", "Guzan", "Howard", "Pogba", "Bradley", "Suarez", "VanDyke", "Jesus", "DeGea", "Lingard", "Salah", "Coutihno", "Firmino", "Giovinco",]

var firstpull;

var lastpull;

var holdWord;

var answer;

var first = "";

var firstnameletters = [];

var lastnameletters = [];


function pullName() {

    var randomnumber = Math.floor(Math.random() * firstname.length);
    console.log(randomnumber);
    
    
    firstpull = firstname[Math.floor(randomnumber)];
    console.log(firstpull);
    
    lastpull = lastname[Math.floor(randomnumber)];
    console.log(lastpull);
    
    
    function hidefirstname () {
        var hidefirst = document.getElementById("guessareafirst");
        for (i=0; i<firstpull.length; i++) {
            var space = document.createElement('div', { class: "mr-3" });
            space.textContent = "_";
            hidefirst.appendChild(space)
            }
    }

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


document.onkeyup = function(event) {

    var userguess = event.key;

    console.log(event.key);
    
    console.log(userguess);

    for (var j=0; j<firstnameletters.length; j++) {

    if (userguess === firstnameletters[j]) {
        alert ("Good Guess!");
    }

    
    // if (userguess !== firstnameletters[j]) {
    //     alert ("Bad Guess!")
    // }
    }

    for (var j=0; j<firstnameletters.length; j++) {

        if (userguess !== firstnameletters[j]) {
            alert ("Bad Guess!");
        }
    }

}
