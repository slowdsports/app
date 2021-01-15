function d5t12am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              12:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 00, 08,  07, 00, 00));

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
    for (const ele of document.getElementsByClassName("d5t12am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t12am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t12am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t12am()

function d5t1230am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              12:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 00, 08,  07, 30, 00));

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
    for (const ele of document.getElementsByClassName("d5t1230am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t1230am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t1230am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t1230am()

function d5t1am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              1:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 00, 08,  08, 00, 00));

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
    for (const ele of document.getElementsByClassName("d5t1am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t1am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t1am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t1am()

function d5t130am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              1:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 00, 08,  08, 30, 00));

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
    for (const ele of document.getElementsByClassName("d5t130am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t130am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t130am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t130am()

function d5t2am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              2:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 00, 08,  09, 00, 00));

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
    for (const ele of document.getElementsByClassName("d5t2am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t2am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t2am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t2am()

function d5t230am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              2:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 00, 08,  09, 30, 00));

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
    for (const ele of document.getElementsByClassName("d5t230am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t230am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t230am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t230am()

function d5t3am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              3:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 00, 08,  10, 00, 00));

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
    for (const ele of document.getElementsByClassName("d5t3am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t3am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t3am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t3am()

function d5t330am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              3:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 00, 08,  10, 30, 00));

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
    for (const ele of document.getElementsByClassName("d5t330am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t330am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t330am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t330am()

function d5t4am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              4:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 00, 08,  11, 00, 00));

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
    for (const ele of document.getElementsByClassName("d5t4am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t4am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t4am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t4am()

function d5t430am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              4:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 00, 08,  11, 30, 00));

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
    for (const ele of document.getElementsByClassName("d5t430am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t430am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t430am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t430am()

function d5t5am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              5:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 00, 08,  12, 00, 00));

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
    for (const ele of document.getElementsByClassName("d5t5am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t5am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t5am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t5am()

function d5t530am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              5:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 12,30,00));

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
		for (const ele of document.getElementsByClassName("d5t530am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t530am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t530am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t530am()

function d5t6am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 13,00,00));

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
		for (const ele of document.getElementsByClassName("d5t6am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t6am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t6am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t6am()

function d5t630am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 13,30,00));

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
		for (const ele of document.getElementsByClassName("d5t630am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t630am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t630am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t630am()

function d5t7am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 14,00,00));

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
		for (const ele of document.getElementsByClassName("t7am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t7am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t7am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t7am()

function d5t730am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 14,30,00));

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
		for (const ele of document.getElementsByClassName("d5t730am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t730am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t730am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t730am()

function d5t8am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 15,00,00));

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
		for (const ele of document.getElementsByClassName("d5t8am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t8am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t8am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t8am()

function d5t830am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 15,30,00));

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
		for (const ele of document.getElementsByClassName("d5t830am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t830am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t830am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t830am()

function d5t9am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 16,00,00));

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
		for (const ele of document.getElementsByClassName("d5t9am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t9am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t9am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t9am()

function d5t930am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 16,30,00));

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
		for (const ele of document.getElementsByClassName("d5t930am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t930am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t930am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t930am()

function d5t10am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 17,00,00));

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
		for (const ele of document.getElementsByClassName("d5t10am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t10am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t10am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t10am()

function d5t1030am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 17,30,00));

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
		for (const ele of document.getElementsByClassName("d5t1030am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t1030am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t1030am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t1030am()

function d5t11am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 18,00,00));

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
		for (const ele of document.getElementsByClassName("d5t11am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t11am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t11am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t11am()

function d5t1130am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 18,30,00));

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
		for (const ele of document.getElementsByClassName("d5t1130am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t1130am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t1130am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t1130am()

function d5t12pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              12:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 19,00,00));

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
		for (const ele of document.getElementsByClassName("d5t12pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t12pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t12pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t12pm()

function d5t1230pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              12:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 19,30,00));

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
		for (const ele of document.getElementsByClassName("d5t1230pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t1230pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t1230pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t1230pm()

function d5t1pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              1:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 20,00,00));

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
		for (const ele of document.getElementsByClassName("d5t1pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t1pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t1pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t1pm()

function d5t130pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              1:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 20,30,00));

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
		for (const ele of document.getElementsByClassName("d5t130pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t130pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t130pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t130pm()

function d5t2pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              2:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 21,00,00));

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
		for (const ele of document.getElementsByClassName("d5t2pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t2pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t2pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t2pm()

function d5t230pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              2:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 21,30,00));

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
		for (const ele of document.getElementsByClassName("d5t230pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t230pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t230pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t230pm()

function d5t3pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              3:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 22,00,00));

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
		for (const ele of document.getElementsByClassName("d5t3pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t3pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t3pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t3pm()

function d5t330pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              3:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 22,30,00));

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
		for (const ele of document.getElementsByClassName("d5t330pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t330pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t330pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t330pm()

function d5t4pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              4:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 23,00,00));

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
		for (const ele of document.getElementsByClassName("d5t4pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t4pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t4pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t4pm()

function d5t430pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              4:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 08, 23,30,00));

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
		for (const ele of document.getElementsByClassName("d5t430pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t430pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t430pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t430pm()

function d5t5pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              5:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 09, 00,00,00));

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
		for (const ele of document.getElementsByClassName("d5t5pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t5pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t5pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t5pm()

function d5t530pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              5:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 09, 00,30,00));

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
		for (const ele of document.getElementsByClassName("d5t530pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t530pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t530pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t530pm()

function d5t6pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 09, 01,00,00));

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
		for (const ele of document.getElementsByClassName("d5t6pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t6pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t6pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t6pm()

function d5t630pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 09, 01,30,00));

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
		for (const ele of document.getElementsByClassName("d5t630pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t630pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t630pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t630pm()

function d5t7pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 09, 02,00,00));

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
		for (const ele of document.getElementsByClassName("d5t7pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t7pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t7pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t7pm()

function d5t730pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 09, 02,30,00));

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
		for (const ele of document.getElementsByClassName("d5t730pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t730pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t730pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t730pm()

function d5t8pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 09, 03,00,00));

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
		for (const ele of document.getElementsByClassName("d5t8pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t8pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t8pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t8pm()

function d5t830pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 09, 03,30,00));

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
		for (const ele of document.getElementsByClassName("d5t830pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t830pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t830pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t830pm()

function d5t9pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 09, 04,00,00));

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
		for (const ele of document.getElementsByClassName("d5t9pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t9pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t9pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t9pm()

function d5t930pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 09, 04,30,00));

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
		for (const ele of document.getElementsByClassName("d5t930pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t930pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t930pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t930pm()

function d5t10pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 09, 05,00,00));

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
		for (const ele of document.getElementsByClassName("d5t10pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t10pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t10pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t10pm()

function d5t1030pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 09, 05,30,00));

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
		for (const ele of document.getElementsByClassName("d5t1030pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t1030pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t1030pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t1030pm()

function d5t11pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 09, 04,00,00));

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
		for (const ele of document.getElementsByClassName("d5t11pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t11pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t11pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t11pm()

function d5t1130pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 00, 09, 04,30,00));

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
		for (const ele of document.getElementsByClassName("d5t1130pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d5t1130pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d5t1130pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d5t1130pm()