let leftRunning = false;
let rightRunning = false;
let leftTime = 150.0;
let rightTime = 150.0;

const tasks = [
    "Take a selfie.",
	"Take a panorama photo.",
	"Touch a wall.",
	"Draw a line. You may use any tools, other than a pen and a pencil.",
	"Shake your hands with someone other than your opponent.",
	"High-five someone other than your opponent.",
	"Look at someone who is at least 3 years older or younger than you for 3 seconds.",
	"Flip a coin.",
	"Call yourself on the phone and leave a threatening voicemail.",
	"Wait until your opponent blinks.",
	"Read out the GPS coordinates of your current location.",
	"Open “Level” in the default Measure app and balance your phone on two fingers such that the screen turns green for at least 3 seconds.",
	"Find a book and ask someone to judge it by its cover.",
	"Open the default Calendar app and tap on the date exactly 10 years from now.",
	"Open the Compass app and point your phone to exactly 123° SE.",
	"Rickroll yourself.",
	"Read the title of a news report published today.",
	"Knock on a door.",
	"Touch a window.",
	"Permanently delete a photo from your Recently Deleted album.",
	"Scan a QR code.",
	"Recite the alphabet backwards.",
	"Create, in order, a MathError, a StackError and a SyntaxError on your calculator.",
	"Using the Random button on English Wikipedia, find a Wikipedia page whose title does not contain the letter E.",
	"Switch something off. You may not switch this device off.",
	"Switch something on.",
	"Have someone, other than yourself and your opponent, tap the spacebar.",
	"Put 10 different things on your table. Paper doesn’t count.",
	"Separate something into three different parts and then reassemble it.",
	"Touch someone, other than your opponent, who has a different age than you.",
	"Lose a game of Rock Paper Scissors.",
	"Make something roll continuously for at least five seconds.",
	"Using only two fingers, hold a 15 cm ruler at one end. Place a pencil at the other end and tilt the ruler until the pencil is between the 6 and 8 cm marks.",
	"Without using the buttons 1, 2, 3 or 4, make your calculator display the result 1234.",
	"Flip three pens on the back of your hand and then snatch them in mid-air.",
	"Constructively criticise your opponent.",
	"Balance a stationery item on one finger. The stationery item must remain stationary for at least 5 seconds.",
	"Greet three different people in three different languages other than Chinese and English.",
	"Spin something or someone, other than yourself. The spin must involve a rotation of at least 720°.",
	"Touch something soft that isn’t a human.",
	"Complete a Buzzfeed quiz.",
	"Call someone other than yourself and your opponent, and hang up before they answer the phone.",
	"Completely close your eyes for 7 seconds. You may only press the spacebar after you’ve opened your eyes and confirmed that the duration is at least 7 seconds.",
	"All roads lead to Rome. On Google Maps, find a road leading from outside Rome to inside Rome.",
	"Take a screenshot. You may not take a screenshot on this device.",
	"In order, search “Bing” on Yahoo!, “Yahoo!” on Google, and “Google” on Bing.",
	"Without turning on Incognito, show your opponent the top video on your YouTube recommended page. You may choose to reload an unlimited number of times.",
	"By enhancing the zoom on your phone camera, take a photo showing the individual red-green-blue components of the pixels on this screen.",
	"Using the Google Tuner, sing a middle C (C4).",
	"Search “Tic Tac Toe” on Google and win a game.",
	"Open the web version of YouTube.",
	"Via WhatsApp, send your opponent a text message containing all emojis displayed in the Frequently Used section, in order.",
	"Turn to a random page of a book, hold the book upside down and then read a complete sentence from that page.",
	"Tie and then untie a knot.",
	"Take a photo containing exactly five feet.",
	"Say “good evening” to someone other than your opponent.",
	"In order, touch your head, shoulders, knees and toes.",
	"Yawn four times.",
	"Increase your noise level, measured using a decibel meter, to over 125 decibels.",
	"Reduce your noise level, measured using a decibel meter, to less than 70 decibels.",
	"Walk in a completely straight path. Your walk must consist of at least 7 increasingly big steps.",
    "Using “Measure” in the default Measure app, demonstrate that your 15 cm ruler is indeed 15 centimetres long.",
    "Using “Measure” in the default Measure app, measure a distance of 6 metres.",
	"On Google Street View, find a road sign that says “Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch” in full.",
	"Starting from the English Wikipedia homepage and using only blue hyperlinks, get to the Wikipedia article for any of the 118 chemical elements on the periodic table.",
	"Randomly generate a number from 1 to 100 until the generated number is prime.",
	"Open the default Calendar app and tap on the date on which you were born.",
	"Without using your phone’s front-facing camera, take a selfie.",
	"Read out the lyrics of the last verse of “Twelve Days of Christmas”.",
	"Turn something upside down without touching it.",
	"Touch something that is not made of paper, plastic or metal.",
	"Hydrate yourself.",
	"Read out all seven days of the week in alphabetical order.",
	"Search “I’m feeling curious” on Google and read out both the question and the answer.",
	"Search “askew” on Google, scroll down to the bottom of the page and then scroll back up.",
	"Search “do a barrel roll” on Google, and wait until the page completes a 360° rotation.",

    // Handicaps:
	"Turn on your phone’s flashlight and leave it on until this game ends.",
	"Make one of your thumbs touch one of your pinkies. They may not separate until this game ends.",
	"Put something somewhere at least 5 metres away. You may not retrieve it until this game ends.",
	"Put either your left hand into your right pocket, or your right hand into your left pocket. The hand may not leave the pocket until this game ends.",
 ];

const skipPenalty = 30;

let bag = [];

setInterval(updateTimers, 10)

document.addEventListener('keydown', (event) => {
  if (event.key == ' ') {
      spacebar();
  }
}, false);

document.getElementById("skip1").addEventListener("click", skip1);
document.getElementById("skip2").addEventListener("click", skip2);


function updateTimers() {
    if (leftTime >= 0 && rightTime >= 0) {
        let places;
        
        if (leftRunning) {
            leftTime -= 0.01;
        } else if (rightRunning) {
            rightTime -= 0.01;
        }
        
        places = (leftTime < 10) ? 2 : 1;
        
        document.getElementById("player1_timerText").innerHTML = (Math.max(Math.round(leftTime * 10 ** places) / 10 ** places, 0.00)).toFixed(places);
        
        places = (rightTime < 10) ? 2 : 1;
        
        document.getElementById("player2_timerText").innerHTML = (Math.max(Math.round(rightTime * 10 ** places) / 10 ** places, 0.00)).toFixed(places);
    } else {
        leftTime = 0;
        rightTime = 0;
        leftRunning = false;
        rightRunning = false;
    }
    
}

function spacebar() {
    if (!leftRunning && !rightRunning) {
        leftRunning = true;
    } else if (leftRunning || rightRunning) {
        leftRunning = !leftRunning;
        rightRunning = !rightRunning;
    }
    if (leftRunning || rightRunning) {
        document.getElementById("task").innerHTML = getTask();
    }
}

function random_item(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function getTask() {
    let result = "";
    let index;
    
    let i = 0;
    
    if (bag.length == 0) {
        bag = tasks.slice();
    }
        
    while (i < bag.length) {
        let matches = /[0-9] second/.exec(bag[i]);
        if (matches != null) {
            if (matches[0][0] > (leftRunning ? leftTime : rightTime)) {
                bag.splice(i, 1);
            }
        }

        i++;
    }
        
    result = random_item(bag);
    index = bag.indexOf(result);
    if (index > -1) {
        bag.splice(index, 1);
    }
    
    return result;
}

function skip1() {
    if (leftRunning) {
        spacebar();

        leftTime = Math.max(0, leftTime - skipPenalty);
        
        if (leftTime == 0) {
            leftRunning = false;
            rightRunning = false;
        }
    }
}

function skip2() {
    if (rightRunning) {
        spacebar();
        rightTime = Math.max(0, rightTime - skipPenalty);
        
        if (rightTime == 0) {
            leftRunning = false;
            rightRunning = false;
        }
    }
}
