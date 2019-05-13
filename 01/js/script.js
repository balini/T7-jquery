// Javascript
// var lis = document.querySelectorAll('li');
// for (var i; i < lis.length; i++) {
//     lis[i].textContent = "pudim";
// }

// var lis = document.querySelectorAll('button');
// for (var i = 0; i < lis.length; i++) {
//     lis[i].textContent = "pudim";
// }


function mudaTextoLi() {
	$('li').text('Batata');
}

$(document).ready(function() {
	alert('Carregou');
	mudaTextoLi();
});

//

function mudaTextoLi() {
    if($('li').length > 0) {
        alert('Existe li');
        console.log($('li').lenght);
    }
}

$(document).ready(function(){
    alert('Carregou');
    mudaTextoLi();
});

//

function mudaTextoLi() {
    if($('li').length > 0) {
        console.log($('li .botao').text()); //ao usar o text() com nada escrito entre os parentesis, o console log está apenas retornando o valor do 'li' '.botao, ou seja, o que está escrito dentro desse elemento'
    }
}

$(document).ready(function(){
    alert('Carregou');
    mudaTextoLi();
});
