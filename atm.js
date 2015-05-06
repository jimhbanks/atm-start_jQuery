$(document).ready(function(){
 var balance = 0
 var deposit = 0

// deposits #amount1 to #balance1, does not store
  $('#deposit1').click(function(){
    var deposit1 = parseInt($('#amount1').val())
    balance = balance + deposit1
    $('#balance1').html(balance);
   // balance = $('#amount1');
   })

//withdraws and deposits inputted balance and updates new balance
  $('#withdraw1').click(function(){
   var withdraw = parseInt($('#amount1').val())
   balance = balance - withdraw;
   $('#balance1').html(balance);
  })
   })

// below is not working
  $('#deposit2').click(function(){
  $('#balance2').html($('#amount2').val());
   balance = $('#amount1');
   })

$('#withdraw2').click(function(){
   withdraw = $('#amount2').val();
   balance = balance - withdraw;
   $('#balance2').html(balance);
   debugger;
   })
 



