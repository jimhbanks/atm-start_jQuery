$(document).ready(function(){
 var balance = ''

// deposits #amount1 to #balance1 but isnt storing
  $('#deposit1').click(function(){
  $('#balance1').html($('#amount1').val());
   balance = $('#amount1');
  debugger;
   })

});
 
//  $('#withdrawl1').click(function(){
//     balance = $('#amount1').cal();
//   $('#balance1').html($('#amount1').val());
//    return this.balance = $('#amount1');
// });
//    })

// });



