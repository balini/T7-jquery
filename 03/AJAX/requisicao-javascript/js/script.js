const app = document.getElementById('root');
const container = document.createElement('div');

app.appendChild(container);

let request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/photos', true) //o open abre o request e permite acrescentar um metodo, link, valor booleano (ou seja, caracteristicas do request)
request.onload = function() { //o onload carrega o request
    let photos = JSON.parse(this.response); //o comando JSON.parse(this.response) está convertendo os dados da variavel photo em dados do tipo JSON -- ao fazer um request para o servidor, ele devolve uma resposta (essa resposta é o this.response), que será convertida para JSON (com o comando JSON.parse)

    if(request.status >= 200 && request.status < 400) {
        photos.forEach(function(photo){
            const conteudo = document.createElement('div');
            conteudo.setAttribute('class', 'photo' + photo.id);

            const h2 = document.createElement('h2');
            h2.textContent = photo.title;

            const img = document.createElement('img');
            img.setAttribute('src', photo.url);

            container.appendChild(conteudo);
            container.appendChild(h2);
            conteudo.appendChild(img);
        })

    } else {
        const errorMessage = document.createElement('img'); //se fosse uma msg de erro, no lugar do 'img' deveriamos colocar um 'p'
        errorMessage.setAttribute('src', 'https://http.cat/' + request.status);
        //se eu quisesse que aparecesse uma msg de erro, deveria usar o comando: errorMessage.textContent = "Erro ao carregar dados!" no lugar do codigo da linha acima;
        app.appendChild(errorMessage);

    }
}

request.send(); //o send executa o request

//Metafora: Eu fazendo um pedido para uma pizzaria sou o request; O AJAX é o entregador; a pizza são os dados recebidos do servidor