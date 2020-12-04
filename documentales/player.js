let fuente;
function miFuncion(unclick){
var i = unclick;
var fuente = miArreglo[i];
document.getElementById("fuente").innerHTML = fuente;
       
var playerInstance = jwplayer("aRzklaXf");
playerInstance.setup({
"file": fuente,
"height":"400",
"width":"100%",
stretching: "bestfit",
"image": "#",
"mediaid": "player",
"mute": false,
"autostart": false,
"cast": {
"appid": "player",
"logo": "https://i.ibb.co/Tgk2YrC/Logow-1-1.png",
},
});
}