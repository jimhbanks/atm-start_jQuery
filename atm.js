$(document).ready(function(){
 var balance = ''

// deposits #amount1 to #balance1, does not store
  $('#deposit1').click(function(){
  $('#balance1').html($('#amount1').val());
   balance = $('#amount1');
   })

//withdraws inputted balance and updates new balance
  $('#withdraw1').click(function(){
   withdraw = $('#amount1').val();
   balance = balance - withdraw;
   $('#balance1').html(balance);
  })
   })


 



