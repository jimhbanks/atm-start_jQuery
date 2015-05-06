$(document).ready(function(){
 var balance = 0
 var deposit = 0
 var saveBalance = 0
 var saveWithdraw = 0

// deposits #amount1 to #balance1, does not store
  $('#deposit1').click(function(){
    var deposit = parseInt($('#amount1').val())
    balance = balance + deposit
    $('#balance1').html(balance);
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
    var deposit = parseInt($('#amount2').val())
    balance = balance + deposit
    $('#balance2').html(deposit);
   })

 $('#withdraw2').click(function(){
   var withdraw = parseInt($('#amount2').val())
   balance = balance - withdraw;
   $('#balance2').html(deposit);
  })


//  else {
//   alert("no money in the bank");
// };

// if (savingsTotal === 0){
//   $('#balance2').css('background-color', 'red');
// };

    



