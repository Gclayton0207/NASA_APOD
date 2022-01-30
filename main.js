$('#button').click(function () {
    var data = $('#data').val()

    const key = 'H7lwDc9BBy04RuCTFn8KV5z8FZXX21QTOxwtuEQF'

    if (data) {
        url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`
    } else {
        url = `https://api.nasa.gov/planetary/apod?api_key=${key}`
    }

    $.ajax({
        type: 'GET',
        url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`,
        success: function (response) {
            exibirConteudo(response)
        },
        error: function () {
            alert(
                'Selecione uma data valida! As imagens estão disponíveis desde 16/06/1995 até o dia de hoje!'
            )
        }
    })
})

function exibirConteudo(response) {
    var imagem = $('#foto')
    var video = $('#video')

    if (response.media_type == 'image') {
        imagem.removeClass('visibility')
        video.addClass('visibility')
    } else if (response.media_type == 'video') {
        video.removeClass('visibility')
        imagem.addClass('visibility')
    }

    $('#titulo').text(response.title)
    imagem.attr('src', `${response.url}`)
    video.attr('src', `${response.url}`)
    $('#text').text(response.explanation)
}

