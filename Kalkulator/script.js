function insert(value){ document.getElementById('display'). value += value;
}

function clearDisplay(){
    document.getElementById('display').value = "";
}

function calcute(){
    try {
        document.getElementById('display'). value = eval(document.getElementById('display').value);
    }
    catch {
        document.getElementById('display').value = "Error";
    }
}