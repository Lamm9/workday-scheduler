// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  var saveElPast = $('#past-btn');
  var saveElPresent = $('#present-btn');
  var saveElFuture = $('#future-btn');
  var pastText = $('#hour-9-text');
  var presentText = $('#hour-10-text');
  var futureText = $('#hour-11-text');

  var pastInput = JSON.stringify(pastText.val());
  var presentInput = JSON.stringify(presentText.val());
  var futureInput = JSON.stringify(futureText.val());

  saveInfoPast = function() {
    localStorage.setItem('9AM',pastInput);
  }
  saveInfoPresent = function () {
    localStorage.setItem('10AM', presentInput);
  }
  saveInfoFuture = function () {
    localStorage.setItem('11AM',futureInput);
  }

  saveElPast.on('click', saveInfoPast());
  saveElPresent.on('click', saveInfoPresent());
  saveElFuture.on('click', saveInfoFuture());


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
 var currentTime = dayjs().hour();
 var nine = $('#hour-9');
 var ten = $('#hour-10');
 var eleven = $('#hour-11');

 console.log(currentTime);

 if (currentTime > 11) {
  nine.className = 'past';
  ten.className = 'past';
  eleven.className = 'past';
 }
 else if (currentTime < 9) {
  nine.className = 'future';
  ten.className = 'future';
  eleven.className = 'future';
 }
 else if (currentTime == 9) {
  nine.className = 'present';
 }
 else if (currentTime == 10) {
  ten.className = 'present';
 }
 else if (currentTime == 11) {
  eleven.className = 'present';
 }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
 localStorage.getItem('9AM', pastInput);

 localStorage.getItem('10AM', presentInput);

 localStorage.getItem('11AM', futureInput);
  // TODO: Add code to display the current date in the header of the page.
 var currentDate = dayjs().format('MM-DD-YYYY');

 var header = $('<h1>' + currentDate + '</h1>');

 $('header').append(header);

});
