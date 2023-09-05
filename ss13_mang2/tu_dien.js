function transcript() {
    let arrEng = ["banana", "apple", "orange", "pen", "pencil", "book"];
    let arrVie = ["Chuối", "Táo", "Cam", "Bút", "Bút chì", "Sách"];
    let string = document.getElementById("string").value;
    let indexEng = 0;
    let result = "";
    for (let i = 0; i < arrEng.length; i++) {
        if (string == arrEng[i]) {
            indexEng = i;
            for (let j = 0; j < arrVie.length; j++) {
                if (indexEng == j) {
                    result = arrVie[j];
                }
            }
        }
    }
    document.getElementById("result").innerHTML = result;
}