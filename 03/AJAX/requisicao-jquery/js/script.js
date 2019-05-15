$(document).ready(function() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos",
        type: "GET",
        success: function(photos) { //entre os () da function definimos a resposta da nossa função; nesse caso queremos uma foto como retorno, por isso usamos 'photos' entre os ();
        $(photos).each(function() {
            let container = $("<div>");
            container.attr('class', 'photo' + this.id);
            let photoTitle = $("<h2>").text(this.title);
            let photoImg = $("<img>").attr("src", this.url);

            container.append(photoTitle);
            container.append(photoImg);

            $('#root').append(container);

            });
        },
        error: function(req) {
            let errorImage = $("<img>").attr("src", `https://http.cat/${req.status}`);
            $("#root").append(errorImage);

        }

    })
    //O comando acima inicializa o ajax usando o jQuery; dentre as chaves podemos definir os atributos do ajax (como a url, o tipo de metodo, o que ocorre em caso de sucesso [sucess] ou em caso de falha [error] etc)

});