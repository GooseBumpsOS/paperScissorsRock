var usrPoint = 0;
var pcPoint = 0;

var usrChoice = 0;

$("#paper").click(function(){
usrChoice = 'p';
battle(usrChoice, ComputerChoice());
});

$("#scissors").click(function(){
usrChoice = 's';
battle(usrChoice, ComputerChoice());
});

$("#rock").click(function(){
usrChoice = 'r';
battle(usrChoice, ComputerChoice());
});

function ComputerChoice(){

var choice = ['p','s','r'];
var rand = 0 + Math.random() * (3 - 1);
rand = Math.round(rand);
//console.log(choice[rand]);
return choice[rand];

}

function animeteBorder(color){
  $('.gameCard').css({border: '0 solid ' + color}).animate({
      borderWidth: 3
  }, 800, function(){
    $('.gameCard').css('border', '3px inset #a0a0a0');
  } );
}

//Вы выиграли 🏆🏆🏆  🙁 🙏

function battle(user, PC){

switch (user + PC) {
  case 'pr':
  case 'sp':
  case 'rs':
  $('#User').html(++usrPoint);
  animeteBorder('#00e500');
  $('#endText').html('Вы выиграли 🏆🏆🏆');
  //console.log('WIN');
    break;

  case 'ps':
  case 'sr':
  case 'rp':
  $('#PC').html(++pcPoint);

  animeteBorder('#cc0000');
  $('#endText').html('Вы проиграли 🙁');
  //console.log('Lose');
    break;

  case 'ss':
  case 'pp':
  case 'rr':
  animeteBorder('#eeeeee');
  $('#endText').html('Ничья 🙏');
  //  console.log('draw');
    break;

  default: console.log('Smt wrong');

                                  }
}


// $('.gameCard').css('border', '3px solid green');
