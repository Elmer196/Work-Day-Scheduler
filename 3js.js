$(document).ready(function(){
    $("#currentDay").html(moment().format('LLLL'));
  });

$(document).ready(function(){ 
  var dayTime = moment();
    
  document.getElementById("text1").innerHTML = localStorage.getItem('set1');

  if(dayTime.isAfter(moment('08:59 AM', 'hh:mm A')) && dayTime.isBefore(moment('10:00 AM', 'hh:mm A'))){
    $(".row1").addClass("present");
  }

  else if(dayTime.isAfter(moment('10:00 AM', 'hh:mm A'))){
    $(".row1").addClass("past");
  }

  else if(dayTime.isBefore(moment('09:00 AM', 'hh:mm A'))){
    $(".row1").addClass("future");
  }  

});

$("#button1").click(function (){
    
  var saveMe = document.getElementById("text1").value;
  
  localStorage.setItem('set1', saveMe);
  
  document.getElementById("text1").innerHTML = localStorage.getItem('set1');
  

});

$(document).ready(function(){ 
  var dayTime = moment();

  document.getElementById("text2").innerHTML = localStorage.getItem('set2');

  if(dayTime.isAfter(moment('09:59 AM', 'hh:mm A')) && dayTime.isBefore(moment('11:00 AM', 'hh:mm A'))){
    $(".row2").addClass("present");
  }

  else if(dayTime.isAfter(moment('11:00 AM', 'hh:mm A'))){
    $(".row2").addClass("past");
  }

  else if(dayTime.isBefore(moment('10:00 AM', 'hh:mm A'))){
    $(".row2").addClass("future");
  }  

});

$("#button2").click(function (){
    
  var saveMe = document.getElementById("text2").value;
  
  localStorage.setItem('set2', saveMe);
  
  document.getElementById("text2").innerHTML = localStorage.getItem('set2');
  

});

$(document).ready(function(){ 
  var dayTime = moment();

  document.getElementById("text3").innerHTML = localStorage.getItem('set3');

  if(dayTime.isAfter(moment('10:59 AM', 'hh:mm A')) && dayTime.isBefore(moment('12:00 PM', 'hh:mm A'))){
    $(".row3").addClass("present");
  }

  else if(dayTime.isAfter(moment('12:00 PM', 'hh:mm A'))){
    $(".row3").addClass("past");
  }

  else if(dayTime.isBefore(moment('11:00 AM', 'hh:mm A'))){
    $(".row3").addClass("future");
  }  

});

$("#button3").click(function (){
    
  var saveMe = document.getElementById("text3").value;
  
  localStorage.setItem('set3', saveMe);
  
  document.getElementById("text3").innerHTML = localStorage.getItem('set3');
  

});

$(document).ready(function(){ 
  var dayTime = moment();

  document.getElementById("text4").innerHTML = localStorage.getItem('set4');

  if(dayTime.isAfter(moment('11:59 AM', 'hh:mm A')) && dayTime.isBefore(moment('01:00 PM', 'hh:mm A'))){
    $(".row4").addClass("present");
  }

  else if(dayTime.isAfter(moment('01:00 PM', 'hh:mm A'))){
    $(".row4").addClass("past");
  }

  else if(dayTime.isBefore(moment('12:00 PM', 'hh:mm A'))){
    $(".row4").addClass("future");
  }  

});

$("#button4").click(function (){
    
  var saveMe = document.getElementById("text4").value;
  
  localStorage.setItem('set4', saveMe);
  
  document.getElementById("text4").innerHTML = localStorage.getItem('set4');
  

});

$(document).ready(function(){ 
  var dayTime = moment();

  document.getElementById("text5").innerHTML = localStorage.getItem('set5');

  if(dayTime.isAfter(moment('12:59 PM', 'hh:mm A')) && dayTime.isBefore(moment('02:00 PM', 'hh:mm A'))){
    $(".row5").addClass("present");
  }

  else if(dayTime.isAfter(moment('02:00 PM', 'hh:mm A'))){
    $(".row5").addClass("past");
  }

  else if(dayTime.isBefore(moment('01:00 PM', 'hh:mm A'))){
    $(".row5").addClass("future");
  }  

});

$("#button5").click(function (){
    
  var saveMe = document.getElementById("text5").value;
  
  localStorage.setItem('set5', saveMe);
  
  document.getElementById("text5").innerHTML = localStorage.getItem('set5');
  

});

$(document).ready(function(){ 
  var dayTime = moment();

  document.getElementById("text6").innerHTML = localStorage.getItem('set6');

  if(dayTime.isAfter(moment('01:59 PM', 'hh:mm A')) && dayTime.isBefore(moment('03:00 PM', 'hh:mm A'))){
    $(".row6").addClass("present");
  }

  else if(dayTime.isAfter(moment('03:00 PM', 'hh:mm A'))){
    $(".row6").addClass("past");
  }

  else if(dayTime.isBefore(moment('02:00 PM', 'hh:mm A'))){
    $(".row6").addClass("future");
  }  

});

$("#button6").click(function (){
    
  var saveMe = document.getElementById("text6").value;
  
  localStorage.setItem('set6', saveMe);
  
  document.getElementById("text6").innerHTML = localStorage.getItem('set6');
  

});

$(document).ready(function(){ 
  var dayTime = moment();

  document.getElementById("text7").innerHTML = localStorage.getItem('set7');

  if(dayTime.isAfter(moment('02:59 PM', 'hh:mm A')) && dayTime.isBefore(moment('04:00 PM', 'hh:mm A'))){
    $(".row7").addClass("present");
  }

  else if(dayTime.isAfter(moment('04:00 PM', 'hh:mm A'))){
    $(".row7").addClass("past");
  }

  else if(dayTime.isBefore(moment('03:00 PM', 'hh:mm A'))){
    $(".row7").addClass("future");
  }  

});

$("#button7").click(function (){
    
  var saveMe = document.getElementById("text7").value;
  
  localStorage.setItem('set7', saveMe);
  
  document.getElementById("text7").innerHTML = localStorage.getItem('set7');
  

});

$(document).ready(function(){ 
  var dayTime = moment();

  document.getElementById("text8").innerHTML = localStorage.getItem('set8');

  if(dayTime.isAfter(moment('03:59 PM', 'hh:mm A')) && dayTime.isBefore(moment('05:00 PM', 'hh:mm A'))){
    $(".row8").addClass("present");
  }

  else if(dayTime.isAfter(moment('05:00 PM', 'hh:mm A'))){
    $(".row8").addClass("past");
  }

  else if(dayTime.isBefore(moment('04:00 PM', 'hh:mm A'))){
    $(".row8").addClass("future");
  }  

});

$("#button8").click(function (){
    
  var saveMe = document.getElementById("text8").value;
  
  localStorage.setItem('set8', saveMe);
  
  document.getElementById("text8").innerHTML = localStorage.getItem('set8');
  

});

$(document).ready(function(){ 
  var dayTime = moment();

  document.getElementById("text9").innerHTML = localStorage.getItem('set9');

  if(dayTime.isAfter(moment('04:59 PM', 'hh:mm A')) && dayTime.isBefore(moment('06:00 PM', 'hh:mm A'))){
    $(".row9").addClass("present");
  }

  else if(dayTime.isAfter(moment('06:00 PM', 'hh:mm A'))){
    $(".row9").addClass("past");
  }

  else if(dayTime.isBefore(moment('05:00 PM', 'hh:mm A'))){
    $(".row9").addClass("future");
  }  

});

$("#button9").click(function (){
    
  var saveMe = document.getElementById("text9").value;
  
  localStorage.setItem('set9', saveMe);
  
  document.getElementById("text9").innerHTML = localStorage.getItem('set9');
  

});

  