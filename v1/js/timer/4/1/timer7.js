function d7t12am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              12:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 02, 28,  07, 00, 00));

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
    for (const ele of document.getElementsByClassName("d7t12am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t12am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t12am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t12am()

function d7t1230am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              12:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 02, 28,  07, 30, 00));

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
    for (const ele of document.getElementsByClassName("d7t1230am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t1230am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t1230am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t1230am()

function d7t1am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              1:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 02, 28,  08, 00, 00));

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
    for (const ele of document.getElementsByClassName("d7t1am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t1am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t1am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t1am()

function d7t130am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              1:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 02, 28,  08, 30, 00));

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
    for (const ele of document.getElementsByClassName("d7t130am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t130am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t130am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t130am()

function d7t2am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              2:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 02, 28,  09, 00, 00));

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
    for (const ele of document.getElementsByClassName("d7t2am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t2am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t2am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t2am()

function d7t230am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              2:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 02, 28,  09, 30, 00));

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
    for (const ele of document.getElementsByClassName("d7t230am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t230am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t230am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t230am()

function d7t3am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              3:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 02, 28,  10, 00, 00));

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
    for (const ele of document.getElementsByClassName("d7t3am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t3am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t3am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t3am()

function d7t330am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              3:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 02, 28,  10, 30, 00));

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
    for (const ele of document.getElementsByClassName("d7t330am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t330am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t330am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t330am()

function d7t4am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              4:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 02, 28,  11, 00, 00));

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
    for (const ele of document.getElementsByClassName("d7t4am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t4am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t4am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t4am()

function d7t430am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              4:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 02, 28,  11, 30, 00));

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
    for (const ele of document.getElementsByClassName("d7t430am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t430am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t430am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t430am()

function d7t5am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              5:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 02, 28,  12, 00, 00));

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
    for (const ele of document.getElementsByClassName("d7t5am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t5am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t5am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t5am()

function d7t530am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              5:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 12,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t530am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t530am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t530am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t530am()

function d7t6am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 13,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t6am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t6am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t6am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t6am()

function d7t630am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 13,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t630am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t630am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t630am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t630am()

function d7t7am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 14,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t7am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t7am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t7am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t7am()

function d7t730am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 14,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t730am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t730am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t730am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t730am()

function d7t8am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 15,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t8am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t8am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t8am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t8am()

function d7t830am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 15,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t830am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t830am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t830am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t830am()

function d7t9am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 16,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t9am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t9am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t9am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t9am()

function d7t930am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 16,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t930am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t930am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t930am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t930am()

function d7t10am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 17,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t10am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t10am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t10am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t10am()

function d7t1030am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 17,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t1030am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t1030am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t1030am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t1030am()

function d7t11am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 18,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t11am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t11am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t11am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t11am()

function d7t1130am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 18,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t1130am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t1130am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t1130am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t1130am()

function d7t12pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              12:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 19,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t12pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t12pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t12pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t12pm()

function d7t1230pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              12:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 19,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t1230pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t1230pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t1230pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t1230pm()

function d7t1pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              1:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 20,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t1pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t1pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t1pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t1pm()

function d7t130pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              1:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 20,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t130pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t130pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t130pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t130pm()

function d7t2pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              2:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 21,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t2pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t2pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t2pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t2pm()

function d7t230pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              2:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 21,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t230pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t230pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t230pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t230pm()

function d7t3pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              3:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 22,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t3pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t3pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t3pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t3pm()

function d7t330pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              3:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 22,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t330pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t330pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t330pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t330pm()

function d7t4pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              4:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 23,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t4pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t4pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t4pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t4pm()

function d7t430pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              4:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 28, 23,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t430pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t430pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t430pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t430pm()

function d7t5pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              5:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 29, 00,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t5pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t5pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t5pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t5pm()

function d7t530pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              5:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 29, 00,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t530pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t530pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t530pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t530pm()

function d7t6pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 29, 01,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t6pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t6pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t6pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t6pm()

function d7t630pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 29, 01,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t630pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t630pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t630pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t630pm()

function d7t7pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 29, 02,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t7pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t7pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t7pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t7pm()

function d7t730pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 29, 02,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t730pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t730pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t730pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t730pm()

function d7t8pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 29, 03,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t8pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t8pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t8pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t8pm()

function d7t830pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 29, 03,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t830pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t830pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t830pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t830pm()

function d7t9pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 29, 04,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t9pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t9pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t9pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t9pm()

function d7t930pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 29, 04,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t930pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t930pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t930pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t930pm()

function d7t10pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 29, 05,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t10pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t10pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t10pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t10pm()

function d7t1030pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 29, 05,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t1030pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t1030pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t1030pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t1030pm()

function d7t11pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 29, 04,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t11pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t11pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t11pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t11pm()

function d7t1130pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 02, 29, 04,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

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
		for (const ele of document.getElementsByClassName("d7t1130pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d7t1130pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d7t1130pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d7t1130pm()