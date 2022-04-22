var com = document.getElementById('comands');

var enter = 13;

document.addEventListener("keypress", vamo);

function vamo(evento){
    var p1 = document.getElementById("tex").value;
    if(evento.keyCode == enter && p1 == "git help --all")
    {
        /*location.href=("comands.html");*/
        document.getElementById('siu').style.display = 'block';
        console.log(p1, lim);
        document.getElementById("tex").value = '';
    }
    var lim = document.getElementById("limpiar").value;
    if(evento.keyCode == enter && lim == "clear")
    {
        /*location.href=("index.html");*/
        document.getElementById('siu').style.display = 'none';
        console.log(p1, lim);
        document.getElementById("tex").value = '';
        document.getElementById("limpiar").value = '';
    }
}
