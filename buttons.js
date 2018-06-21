random = () => {

}

off = () => {
     document.getElementById('overlay').style.display = "none"
}

(on = () => {
     document.getElementById('overlay').style.display = "block"
})();

pulse = (cl, audio) => {
    let color = "hsl(" + 360 * Math.random() + ',' +
    (85 + 10 * Math.random()) + '%, 50%)';

    let btn = document.getElementById(cl).style

    btn.color = color
    btn.borderColor = color
    btn.boxShadow = '0 0 15px ' + color 
    document.getElementById('keyboard').style.boxShadow = '20px 20px 200px ' + color
    setTimeout(() => {
        btn.color = "white"
        btn.borderColor = "black"
        btn.boxShadow = 'none' 
        document.getElementById('keyboard').style.boxShadow = 'none'
    }, 200);

    document.getElementById(audio).play();
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 48:
            pulse('item-0', '0')
            break;
        case 49:
            pulse('item-1', '1')
            break;
        case 50:
            pulse('item-2', '2')
            break;
        case 51:
            pulse('item-3', '3')
            break;
        case 52:
            pulse('item-4', '4')
            break;
        case 53:
            pulse('item-5', '5')
            break;
        case 54:
            pulse('item-6', '6')
            break;
        case 55:
            pulse('item-7', '7');
            break;
        case 56:
            pulse('item-8', '8')
            break;
        case 57:
            pulse('item-9', '9')
            break;
        case 65:
            pulse('item-A', 'A')
            break;
        case 66:
            pulse('item-B', 'B')
            break;
        case 67:
            pulse('item-C', 'C')
            break;
        case 68:
            pulse('item-D', 'D')
            break;
        case 69:
            pulse('item-E', 'E')
            break;
        case 70:
            pulse('item-F', 'F')
            break;
        case 71:
            pulse('item-G', 'G')
            break;
        case 72:
            pulse('item-H', 'H')
            break;
        case 73:
            pulse('item-I', 'I')
            break;
        case 74:
            pulse('item-J', 'J')
            break;
        case 75:
            pulse('item-K', 'K')
            break;
        case 76:
            pulse('item-L', 'L')
            break;
        case 77:
            pulse('item-M', 'M')
            break;
        case 78:
            pulse('item-N', 'N')
            break;
        case 79:
            pulse('item-O', 'O')
            break;
        case 80:
            pulse('item-P', 'P')
            break;
        case 81:
            pulse('item-Q', 'Q')
            break;
        case 82:
            pulse('item-R', 'R')
            break;
        case 83:
            pulse('item-S', 'S')
            break;
        case 84:
            pulse('item-T', 'T')
            break;
        case 85:
            pulse('item-U', 'U')
            break;
        case 86:
            pulse('item-V', 'V')
            break;
        case 87:
            pulse('item-W', 'W')
            break;
        case 88:
            pulse('item-X', 'X')
            break;
        case 89:
            pulse('item-Y', 'Y')
            break;
        case 90:
            pulse('item-Z', 'Z')
            break;
        default:
            console.log("Key is not found!");    
    }
};