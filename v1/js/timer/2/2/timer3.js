function d3t12am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              12:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 03,  07, 00, 00));

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
    for (const ele of document.getElementsByClassName("d3t12am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t12am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t12am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t12am()

function d3t1230am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              12:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 03,  07, 30, 00));

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
    for (const ele of document.getElementsByClassName("d3t1230am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t1230am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t1230am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t1230am()

function d3t1am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              1:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 03,  08, 00, 00));

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
    for (const ele of document.getElementsByClassName("d3t1am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t1am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t1am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t1am()

function d3t130am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              1:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 03,  08, 30, 00));

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
    for (const ele of document.getElementsByClassName("d3t130am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t130am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t130am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t130am()

function d3t2am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              2:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 03,  09, 00, 00));

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
    for (const ele of document.getElementsByClassName("d3t2am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t2am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t2am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t2am()

function d3t230am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              2:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 03,  09, 30, 00));

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
    for (const ele of document.getElementsByClassName("d3t230am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t230am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t230am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t230am()

function d3t3am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              3:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 03,  10, 00, 00));

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
    for (const ele of document.getElementsByClassName("d3t3am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t3am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t3am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t3am()

function d3t330am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              3:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 03,  10, 30, 00));

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
    for (const ele of document.getElementsByClassName("d3t330am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t330am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t330am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t330am()

function d3t4am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              4:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 03,  11, 00, 00));

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
    for (const ele of document.getElementsByClassName("d3t4am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t4am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t4am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t4am()

function d3t430am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              4:30 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 03,  11, 30, 00));

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
    for (const ele of document.getElementsByClassName("d3t430am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t430am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t430am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t430am()

function d3t5am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              5:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2021, 01, 03,  12, 00, 00));

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
    for (const ele of document.getElementsByClassName("d3t5am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t5am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t5am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t5am()

function d3t530am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              5:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 12,30,00));

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
		for (const ele of document.getElementsByClassName("d3t530am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t530am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t530am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t530am()

function d3t6am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 13,00,00));

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
		for (const ele of document.getElementsByClassName("d3t6am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t6am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t6am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t6am()

function d3t630am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 13,30,00));

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
		for (const ele of document.getElementsByClassName("d3t630am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t630am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t630am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t630am()

function d3t7am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 14,00,00));

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
		for (const ele of document.getElementsByClassName("d3t7am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t7am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t7am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t7am()

function d3t730am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 14,30,00));

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
		for (const ele of document.getElementsByClassName("d3t730am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t730am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t730am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t730am()

function d3t8am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 15,00,00));

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
		for (const ele of document.getElementsByClassName("d3t8am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t8am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t8am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t8am()

function d3t830am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 15,30,00));

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
		for (const ele of document.getElementsByClassName("d3t830am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t830am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t830am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t830am()

function d3t9am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 16,00,00));

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
		for (const ele of document.getElementsByClassName("d3t9am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t9am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t9am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t9am()

function d3t930am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 16,30,00));

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
		for (const ele of document.getElementsByClassName("d3t930am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t930am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t930am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t930am()

function d3t10am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 17,00,00));

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
		for (const ele of document.getElementsByClassName("d3t10am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t10am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t10am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t10am()

function d3t1030am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 17,30,00));

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
		for (const ele of document.getElementsByClassName("d3t1030am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t1030am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t1030am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t1030am()

function d3t11am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 18,00,00));

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
		for (const ele of document.getElementsByClassName("d3t11am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t11am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t11am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t11am()

function d3t1130am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 18,30,00));

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
		for (const ele of document.getElementsByClassName("d3t1130am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t1130am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t1130am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t1130am()

function d3t12pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              12:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 19,00,00));

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
		for (const ele of document.getElementsByClassName("d3t12pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t12pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t12pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t12pm()

function d3t1230pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              12:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 19,30,00));

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
		for (const ele of document.getElementsByClassName("d3t1230pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t1230pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t1230pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t1230pm()

function d3t1pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              1:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 20,00,00));

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
		for (const ele of document.getElementsByClassName("d3t1pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t1pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t1pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t1pm()

function d3t130pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              1:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 20,30,00));

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
		for (const ele of document.getElementsByClassName("d3t130pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t130pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t130pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t130pm()

function d3t2pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              2:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 21,00,00));

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
		for (const ele of document.getElementsByClassName("d3t2pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t2pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t2pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t2pm()

function d3t230pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              2:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 21,30,00));

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
		for (const ele of document.getElementsByClassName("d3t230pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t230pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t230pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t230pm()

function d3t3pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              3:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 22,00,00));

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
		for (const ele of document.getElementsByClassName("d3t3pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t3pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t3pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t3pm()

function d3t330pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              3:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 22,30,00));

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
		for (const ele of document.getElementsByClassName("d3t330pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t330pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t330pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t330pm()

function d3t4pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              4:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 23,00,00));

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
		for (const ele of document.getElementsByClassName("d3t4pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t4pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t4pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t4pm()

function d3t430pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              4:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 03, 23,30,00));

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
		for (const ele of document.getElementsByClassName("d3t430pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t430pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t430pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t430pm()

function d3t5pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              5:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 04, 00,00,00));

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
		for (const ele of document.getElementsByClassName("d3t5pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t5pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t5pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t5pm()

function d3t530pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              5:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 04, 00,30,00));

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
		for (const ele of document.getElementsByClassName("d3t530pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t530pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t530pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t530pm()

function d3t6pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 04, 01,00,00));

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
		for (const ele of document.getElementsByClassName("d3t6pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t6pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t6pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t6pm()

function d3t630pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 04, 01,30,00));

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
		for (const ele of document.getElementsByClassName("d3t630pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t630pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t630pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t630pm()

function d3t7pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 04, 02,00,00));

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
		for (const ele of document.getElementsByClassName("d3t7pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t7pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t7pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t7pm()

function d3t730pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 04, 02,30,00));

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
		for (const ele of document.getElementsByClassName("d3t730pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t730pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t730pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t730pm()

function d3t8pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 04, 03,00,00));

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
		for (const ele of document.getElementsByClassName("d3t8pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t8pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t8pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t8pm()

function d3t830pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 04, 03,30,00));

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
		for (const ele of document.getElementsByClassName("d3t830pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t830pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t830pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t830pm()

function d3t9pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 04, 04,00,00));

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
		for (const ele of document.getElementsByClassName("d3t9pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t9pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t9pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t9pm()

function d3t930pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 04, 04,30,00));

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
		for (const ele of document.getElementsByClassName("d3t930pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t930pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t930pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t930pm()

function d3t10pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 04, 05,00,00));

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
		for (const ele of document.getElementsByClassName("d3t10pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t10pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t10pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t10pm()

function d3t1030pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 04, 05,30,00));

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
		for (const ele of document.getElementsByClassName("d3t1030pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t1030pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t1030pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t1030pm()

function d3t11pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 04, 04,00,00));

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
		for (const ele of document.getElementsByClassName("d3t11pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t11pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t11pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t11pm()

function d3t1130pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2021, 01, 04, 04,30,00));

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
		for (const ele of document.getElementsByClassName("d3t1130pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("d3t1130pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("d3t1130pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

d3t1130pm()