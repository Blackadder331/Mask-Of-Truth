//  Ball
function shake(){
    var ball = document.getElementById("ball")
    var messageText = document.getElementById("message")

    if(messageText != null) {
        messageText.parentNode.removeChild(messageText)
    }

    var getValue= document.getElementById("question-text");
    if (getValue.value !="") {
        getValue.value = "";
    }

    // var magicContainer = document.getElementById("magic-container");
    // if (magicContainer !="") {
    //     magicContainer.setAttribute('class',"magic")
    // } 

    // Delayed 1 second
    var magicContainer = document.getElementById("magic-container");
    if (magicContainer !== null) {
      if (magicContainer.classList.contains('magic')) {
        magicContainer.classList.remove('magic');
      }
      setTimeout(function() {
        magicContainer.classList.add('magic');
      }, 1000);
    }
    

    ball.classList.add("shake")
    setTimeout(function(){ball.classList.remove("shake");}, 1000)
    setTimeout(function(){getFortune();}, 1000)
}

function clearInput(){
    var getValue= document.getElementById("question-text");
      if (getValue.value !="") {
          getValue.value = "";
      }
}

function getFortune() {
    var fortunes = [
        'It is certain',
        'Not likely',
        'I think we both know the answer to that...',
        'Uncertain, but leaning no',
        'You need help...',
        'Try again later',
        'Yes!',
        'Yep!',
        'Affirmative',
        'My sources say no',
        'Keep dreaming, kid',
        'Try asking in a different way',
        'Without a doubt!',
        'Negative',
        'As if!',
        'All signs point to yes',
        'The bones have spoken! (They say yes)',
        'I have a clouded mind, try again another time',
        'Don\'t count on it!',
        'Yeah right! You\'re hilarious'
    ]

    var fortune = fortunes[Math.floor(Math.random()*fortunes.length)]

    var parent = document.getElementById("fortune")
    var newMessage = document.createElement("span")
    newMessage.setAttribute('id',"message")
    newMessage.setAttribute('class',"magic-text")
    newMessage.innerHTML = "\“"+fortune+"\”"
    parent.appendChild(newMessage)

}


// Star

let index = 0,
    interval = 1000;

const rand =(min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
    

const animate = star => {
    star.style.setProperty("--star-left", `${rand(-30, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-150, 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
    setTimeout(() => {
        animate(star);

        setInterval(() => animate(star), 1000);         
    }, index++ * (interval / 2))
} 