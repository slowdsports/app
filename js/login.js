let validacionOK = `
<div class="center">
  <h1>¡Bienvenido!</h1>
  <h3>Esta versión estará disponible hasta: </h3>
  <p class="">30 de junio de 2021</p>
  <a href="go:home"><div class="btn">Acceder</div></a>
</div>
`;

//for(const ele of document.getElementsByClassName("ok")){ele.innerHTML=(validacionOK)};

let validacionMal = `
<div class="center">
  <h1>¡Lo Sentimos!</h1>
  <h3>Esta versión ha caducado: </h3>
  <a href="go:update"><div class="btn">Actualizar</div></a>
</div>
`;

//for(const ele of document.getElementsByClassName("mal")){ele.innerHTML=(validacionMal)};


function validarLogin() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              12:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 05, 28, 07, 00, 00));

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    // GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
    var distance = countDownDate - now - (3600000 * 1);

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    for (const ele of document.getElementsByClassName("validarLogin")) {
      ele.innerHTML = (validacionOK)
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("validarLogin")) {
      ele.innerHTML = (validacionMal);
      }
    }
  }, 1000);
}

validarLogin()