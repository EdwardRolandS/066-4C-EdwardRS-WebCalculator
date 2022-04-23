let outputscreen = document.getElementById("masukkan");

function display(num){
    outputscreen.value += num;
}
function hasil(){
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err){
        alert("Input Salah, Periksa Kembali")
    }
}

function bersihkan(){
    outputscreen.value = "";
}

function del(){
    outputscreen.value = outputscreen.value.slice(0, -1);
}