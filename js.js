
//$(document).ready(function(){
  //$('a.valueButton').on('click', function() {
  //$('h4.cardname').text('Jace Beleren, Price $7.00');
  //$('.cardinfo').show();

  //});

const cards = {
  jace: {name: "Jace Beleren", value: 7, effect: "Legendary Planeswalker Jace (3) +2 Each player draws a card. -1 Target player draws a card. -10 Target player puts the top twenty cards of their library into their graveyard."},
  cdt: {name: "Crow of dark tidings", value: 15, effect: "Flying, When Crow of dark tidings enters the battlefield or dies, put the top two cards of your library into your graveyard."},
  jcc: {name: "Jace Cunning Castaway", value: 20, effect: "Legendary Planeswalker Jace (3) +1 Whenever one or more creatures you control deal combat damage to a player this turn, draw a card, then discard a card. −2 Create a 2/2 blue Illusion creature token with When this creature becomes the target of a spell, sacrifice it. −5 Create two tokens that are copies of Jace, Cunning Castaway, except they're not legendary."}
};

//var textfield = document.getElementbyId('fieldtext').value;

const cardWant = {
ck: {name: "Cave of Koilos", value: 6},
ch: {name: "Chastise", value: 3},
th: {name: "Thought Courier", value: 12},
tb: {name: "Treetop Bracers", value: 13},
cc: {name: "Centaur Courser", value: 18},
ct: {name: "Charging Tuskodon", value: 19}
};



$(document).ready(function(){
  $('a.valueButton').on('click', function(){
    var textfield = $('#input_text').val();
    console.log(textfield);
    var currentCard = cards[textfield]
    console.log(currentCard);
    $('h4.cardname').text(currentCard.name);
    $('p.paragraphcard').text(currentCard.effect);
    $('h3.cardValue').text(currentCard.value);
    if (textfield === "jace") {
      $('.cardccgc').hide(), $('.cardccgjc').hide()
    } else if (textfield === "cdt") {
      $('.cardccgj').hide(), $('.cardccgjc').hide()
    } else if (textfield === "jcc") {
        $('.cardccgj').hide(), $('.cardccgc').hide()
    };

    $('a.effectButton').on('click', function(){
      $('.cardEffect').show();
      $('.cardyc').hide();
    });

    $('a.cardButton').on('click', function(){
      $('.cardyc').show();
      $('.cardEffect').hide();
    });
    //Let (i = 0, i < cardWant.length, i++)
    //if (currentCard.value ==< 7) {
    //  $('li.ck').show(), $('li.ch').show()
    //} else if (currentCard ==< 15) {
  //    $('li.th').show(), $('li.tb').show()
  //  } else if (currentCard ==< 20) {
  //    $('li.cc').show(), $('li.ct').show()
  //  } else {
  //    console.log("error")
  //  };
    $('.cardinfo').show();
    var ojace = cards.jace;
    var ocdt = cards.cdt;
    var ojcc = cards.jcc;
    if (currentCard === ojace) {
      $('li.th').hide(), $('li.tb').hide(), $('li.cc').hide(), $('li.ct').hide();
    } else if (currentCard === ocdt) {
      $('li.th').hide(), $('li.tb').hide();
    };
    $('.cardinfo').show();


 //else {
    //  var errorText = $('<h2>Could not find card</h2>')
  //    $('a.valueButton').after(errorText);




    }
  )

  //code for final



$('.tcgtcg').hide();

$('.tcgtcgcards').on('click', function(){
$('.homescreen').fadeOut(300);
$('.tcgtcg').fadeIn(200);
})

$('#card').hide();
$('.tcgtcgtcg').hide();

$('.buttont').on('click', function(){
console.log('trade');
let cbox = $('input[type = "checkbox"]:checked');
cbox.each(function(){
console.log($(this).val())
  //select html element to put value of cbox. .append
//$(this).append($('.tradew'));
$('.tradew').append($(this).val());
})
console.log(cbox);
$('.tcgtcg').fadeOut(300);
$('.tcgtcgtcg').fadeIn(200);
$('#card').show();//$('.textfield').before($(':checked'));
console.log($(':checked'));
})


});



//var jace = {
  //name: "Jace Beleren",
  //value: 7,
  //effect: "Legendary Planeswalker Jace (3) +2 Each player draws a card. -1 Target player draws a card. -10 Target player puts the top twenty cards of their library into their graveyard."

//};




 //$('li.addcollectiontext').on('mouseover', function(){
//$(this).text('DID you pack this card?')


//});
