
function convert() {
    let usa = parseFloat(document.getElementsByName("usd")[0].value);
    let choise = document.getElementsByName("choise")[0].value;
    let result = document.getElementsByName("result")[0];

    if (choise == "rub") {
        let total = usa * 125
        result.value = `${total}`;
    }
    else if(choise == "sum") {
        let total = usa * 13000
        result.value = `${total} sum`;
    }
    else if(choise == "eu") {
        let total = usa * 200
        result.value = `${total}`;
    }
}