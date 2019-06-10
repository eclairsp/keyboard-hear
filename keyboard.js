var synth = window.speechSynthesis;
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechRecognitionEvent =
    SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();
recognition.lang = "en-US";

let body = document.querySelector("body").style;
let keyboard = document.querySelector(".keyboard").style;

on = () => {
    document.getElementsByClassName("overlay-wrapper")[0].style.display =
        "flex";
    if (window.innerWidth < 1100) {
        keyboard.display = "none";
        body.overflow = "hidden";
        body.margin = "0";
        body.width = "100vw";
        body.height = "100vh";
    }
};

off = () => {
    document.getElementsByClassName("overlay-wrapper")[0].style.display =
        "none";
    if (window.innerWidth < 1100) {
        keyboard.display = "block";
        body.overflow = "scroll";
        body.margin = "10px";
        body.width = "100%";
        body.height = "100%";
    }
};

pulse = id => {
    console.log(id);
    let color =
        "hsl(" +
        360 * Math.random() +
        "," +
        (85 + 10 * Math.random()) +
        "%, 50%)";

    let btn = document.getElementById(id).style;

    btn.color = color;
    btn.borderColor = color;
    btn.boxShadow = "0 0 15px " + color;
    btn.fill = color;
    document.getElementById("keyboard").style.boxShadow =
        "20px 20px 200px " + color;
    setTimeout(() => {
        btn.color = "white";
        btn.borderColor = "white";
        btn.boxShadow = "none";
        btn.fill = "white";
        document.getElementById("keyboard").style.boxShadow = "none";
    }, 200);

    speak(id);
};

listen = () => {
    recognition.start();

    recognition.onresult = function(event) {
        var last = event.results.length - 1;
        var word = event.results[last][0].transcript;
        document.getElementsByClassName("recognitionGuess")[0].innerHTML = word;
        console.log(word.replace(/\s+/, "").toLowerCase());
        switch (word.replace(/\s+/, "").toLowerCase()) {
            case "shift":
                pulse("shiftleft");
                break;
            case "backslash":
                pulse("\\");
                break;
            case "slash":
                pulse("/");
                break;
            case "comma":
                pulse(",");
                break;
            case "dot":
                pulse(".");
                break;
            case "fullstop":
                pulse(".");
                break;
            case "semicolon":
                pulse(";");
                break;
            case "quote":
                pulse("'");
                break;
            case "singlequote":
                pulse("'");
                break;
            default:
                pulse(word.replace(/\s+/, "").toLowerCase());
                break;
        }
    };

    recognition.onspeechend = function() {
        recognition.stop();
    };

    recognition.onerror = function(event) {
        console.log("Error occurred in recognition: " + event.error);
    };
};

speak = word => {
    if (synth.speaking) {
        console.error("speechSynthesis.speaking");
        document.getElementsByClassName("speaking")[0].innerHTML =
            "Yes. Try again";
        return;
    } else {
        document.getElementsByClassName("speaking")[0].innerHTML = "No";
    }
    if (word) {
        var utterThis = new SpeechSynthesisUtterance(word);
        utterThis.rate = 1;
        utterThis.voice = synth.getVoices()[5];
        utterThis.onerror = function(event) {
            console.error("SpeechSynthesisUtterance.onerror");
        };
        utterThis.pitch = 1;
        utterThis.rate = 1;
        synth.speak(utterThis);
    }
};

document.onkeydown = function(e) {
    if (e.which > 64 && e.which < 91) {
        // Cotnrols alphabet presses
        pulse(e.key.toLowerCase());
    } else if (e.which > 47 && e.which < 58) {
        // Controls number presses
        pulse(e.key.toLowerCase());
    } else if (e.which > 180 && e.which < 230) {
        // Controls ',' '.' '/' ';' ''' '[' ']' '\' '-' '='
        // basically symbols
        // number taken are arbitrary because = is at 187 and ] is at 221
        pulse(e.key.toLowerCase());
    } // Controls shift, alt, ctrl both left and right
    else if (e.which === 16) {
        e.location === 1 ? pulse("shiftleft") : pulse("shiftright");
    } else if (e.which === 18) {
        e.location === 1 ? pulse("altleft") : pulse("altright");
    } else if (e.which === 17) {
        e.location === 1 ? pulse("controlleft") : pulse("controlright");
    } else if (e.which === 91) {
        e.location === 1 ? pulse("windowsleft") : pulse("windowsright");
    } else {
        // everything else. basically default
        console.log(e.code.toLowerCase());
        pulse(e.code.toLowerCase());
    }
};
