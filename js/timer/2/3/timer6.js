function d6t12am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              12:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 13,  07, 00, 00));

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
    for (const ele of document.getElementsByClassName("d6t12am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t12am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t12am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t12am()

function d6t1230am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              12:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 13,  07, 30, 00));

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
    for (const ele of document.getElementsByClassName("d6t1230am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t1230am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t1230am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t1230am()

function d6t1am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              1:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 13,  08, 00, 00));

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
    for (const ele of document.getElementsByClassName("d6t1am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t1am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t1am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t1am()

function d6t130am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              1:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 13,  08, 30, 00));

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
    for (const ele of document.getElementsByClassName("d6t130am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t130am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t130am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t130am()

function d6t2am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              2:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 13,  09, 00, 00));

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
    for (const ele of document.getElementsByClassName("d6t2am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t2am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t2am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t2am()

function d6t230am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              2:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 13,  09, 30, 00));

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
    for (const ele of document.getElementsByClassName("d6t230am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t230am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t230am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t230am()

function d6t3am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              3:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 13,  10, 00, 00));

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
    for (const ele of document.getElementsByClassName("d6t3am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t3am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t3am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t3am()

function d6t330am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              3:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 13,  10, 30, 00));

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
    for (const ele of document.getElementsByClassName("d6t330am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t330am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t330am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t330am()

function d6t4am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              4:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 13,  11, 00, 00));

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
    for (const ele of document.getElementsByClassName("d6t4am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t4am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t4am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t4am()

function d6t430am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              4:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 13,  11, 30, 00));

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
    for (const ele of document.getElementsByClassName("d6t430am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t430am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t430am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t430am()

function d6t5am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              5:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 13,  12, 00, 00));

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
    for (const ele of document.getElementsByClassName("d6t5am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t5am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t5am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t5am()

function d6t530am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              5:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 12,30,00));

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
		for (const ele of document.getElementsByClassName("d6t530am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t530am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t530am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t530am()

function d6t6am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 13,00,00));

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
		for (const ele of document.getElementsByClassName("d6t6am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t6am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t6am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t6am()

function d6t630am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 13,30,00));

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
		for (const ele of document.getElementsByClassName("d6t630am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t630am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t630am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t630am()

function d6t7am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 14,00,00));

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
		for (const ele of document.getElementsByClassName("d6t7am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t7am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t7am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t7am()

function d6t730am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 14,30,00));

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
		for (const ele of document.getElementsByClassName("d6t730am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t730am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t730am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t730am()

function d6t8am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 15,00,00));

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
		for (const ele of document.getElementsByClassName("d6t8am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t8am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t8am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t8am()

function d6t830am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 15,30,00));

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
		for (const ele of document.getElementsByClassName("d6t830am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t830am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t830am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t830am()

function d6t9am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 16,00,00));

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
		for (const ele of document.getElementsByClassName("d6t9am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t9am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t9am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t9am()

function d6t930am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 16,30,00));

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
		for (const ele of document.getElementsByClassName("d6t930am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t930am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t930am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t930am()

function d6t10am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 17,00,00));

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
		for (const ele of document.getElementsByClassName("d6t10am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t10am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t10am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t10am()

function d6t1030am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 17,30,00));

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
		for (const ele of document.getElementsByClassName("d6t1030am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t1030am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t1030am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t1030am()

function d6t11am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 18,00,00));

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
		for (const ele of document.getElementsByClassName("d6t11am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t11am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t11am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t11am()

function d6t1130am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 18,30,00));

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
		for (const ele of document.getElementsByClassName("d6t1130am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t1130am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t1130am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t1130am()

function d6t12pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              12:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 19,00,00));

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
		for (const ele of document.getElementsByClassName("d6t12pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t12pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t12pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t12pm()

function d6t1230pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              12:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 19,30,00));

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
		for (const ele of document.getElementsByClassName("d6t1230pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t1230pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t1230pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t1230pm()

function d6t1pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              1:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 20,00,00));

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
		for (const ele of document.getElementsByClassName("d6t1pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t1pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t1pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t1pm()

function d6t130pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              1:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 20,30,00));

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
		for (const ele of document.getElementsByClassName("d6t130pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t130pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t130pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t130pm()

function d6t2pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              2:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 21,00,00));

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
		for (const ele of document.getElementsByClassName("d6t2pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t2pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t2pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t2pm()

function d6t230pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              2:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 21,30,00));

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
		for (const ele of document.getElementsByClassName("d6t230pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t230pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t230pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t230pm()

function d6t3pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              3:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 22,00,00));

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
		for (const ele of document.getElementsByClassName("d6t3pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t3pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t3pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t3pm()

function d6t330pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              3:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 22,30,00));

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
		for (const ele of document.getElementsByClassName("d6t330pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t330pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t330pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t330pm()

function d6t4pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              4:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 23,00,00));

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
		for (const ele of document.getElementsByClassName("d6t4pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t4pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t4pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t4pm()

function d6t430pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              4:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 13, 23,30,00));

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
		for (const ele of document.getElementsByClassName("d6t430pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t430pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t430pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t430pm()

function d6t5pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              5:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 14, 00,00,00));

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
		for (const ele of document.getElementsByClassName("d6t5pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t5pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t5pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t5pm()

function d6t530pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              5:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 14, 00,30,00));

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
		for (const ele of document.getElementsByClassName("d6t530pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t530pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t530pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t530pm()

function d6t6pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 14, 01,00,00));

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
		for (const ele of document.getElementsByClassName("d6t6pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t6pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t6pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t6pm()

function d6t630pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 14, 01,30,00));

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
		for (const ele of document.getElementsByClassName("d6t630pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t630pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t630pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t630pm()

function d6t7pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 14, 02,00,00));

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
		for (const ele of document.getElementsByClassName("d6t7pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t7pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t7pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t7pm()

function d6t730pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 14, 02,30,00));

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
		for (const ele of document.getElementsByClassName("d6t730pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t730pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t730pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t730pm()

function d6t8pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 14, 03,00,00));

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
		for (const ele of document.getElementsByClassName("d6t8pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t8pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t8pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t8pm()

function d6t830pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 14, 03,30,00));

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
		for (const ele of document.getElementsByClassName("d6t830pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t830pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t830pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t830pm()

function d6t9pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 14, 04,00,00));

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
		for (const ele of document.getElementsByClassName("d6t9pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t9pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t9pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t9pm()

function d6t930pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 14, 04,30,00));

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
		for (const ele of document.getElementsByClassName("d6t930pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t930pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t930pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t930pm()

function d6t10pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 14, 05,00,00));

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
		for (const ele of document.getElementsByClassName("d6t10pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t10pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t10pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t10pm()

function d6t1030pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 14, 05,30,00));

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
		for (const ele of document.getElementsByClassName("d6t1030pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t1030pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t1030pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t1030pm()

function d6t11pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 14, 04,00,00));

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
		for (const ele of document.getElementsByClassName("d6t11pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t11pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t11pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t11pm()

function d6t1130pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 14, 04,30,00));

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
		for (const ele of document.getElementsByClassName("d6t1130pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d6t1130pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d6t1130pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d6t1130pm()