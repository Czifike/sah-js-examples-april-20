// Third part:
console.log('Script file is loaded.')

$('h1').html('This is <em> done by </em> JavaScript');

$('h2').toggleClass('blue');

let name = 'Niki';
let age = 29;

function mylittleFunction() {
    $('main').append('<p>A p is appendid in the main.</p>')
    $('p').css('border', '1px solid red');
    $('p').css('padding', '10px');
}

mylittleFunction();
mylittleFunction();

$('#add').click(mylittleFunction);

$('#remove').click(function () {
    $('p:last-child').remove();
});




// Single line comments
//jQuery helpd us