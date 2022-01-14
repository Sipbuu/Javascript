//def the log var and random number func
const log = console.log
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Grew Function
function grew(name, howmuch, howtall, lose) {
  var howtallnow = null
  if (lose == "grew") {
    var howtallnow = howtall + howmuch
  } else if (lose == "lost") {
    var howtallnow = howtall - howmuch
  }
  if (howtallnow > 1 ) {
    howtallnow = howtallnow + " inches"
  } else if (howtallnow <= 1 ) {
    howtallnow = howtallnow + " inch"
  } else if (howtallnow < -1 ) {
    howtallnow = howtallnow + " inches"
  }
  if (howmuch > 1) {
    howmuch = howmuch + " inches"
  } else if (howtallnow >= 1 ) {
    howmuch = howmuch + " inch"
  }

  if (lose == "grew") {
      console.log(name, "grew", howmuch, "inch", "and is now", howtallnow, "tall")
  } else if (lose == "lost" ) {
      console.log(name, "lost", howmuch, "and is now", howtallnow, "tall")
  }
}

//EightBall Function
function eightball(questions) {
  log("Your question was:", questions)
  log("The 8 ball responds with:")
  var random = getRandomInt(16)
  if (random == 1) {
    log("It is certain.")
  } else if (random == 2) {
    log("As I see it, yes.")
  } else if (random == 3) {
    log("Better not tell you now.")
  } else if (random == 4) {
    log("Don't count on it.")
  } else if (random == 5) {
    log("My reply is no.")
  } else if (random == 6) {
    log("Yes.")
  } else if (random == 7) {
    log("My signs point to yes.")
  } else if (random == 8) {
    log("Reply hazy, try again.")
  } else if (random == 9) {
    log("Outlook not so good.")
  } else if (random == 10) {
    log("As I see it, yes.")
  } else if (random == 11) {
    log("Very doubtful.")
  } else if (random == 12) {
    log("Concentrate and ask again.")
  } else if (random == 13) {
    log("You may rely on it.")
  } else if (random == 14) {
    log("Don't count on it.")
  } else if (random == 15) {
    log("Without a doubt.")
  } else if (random == 16) {
     log("Ask again later.")
  }
}
