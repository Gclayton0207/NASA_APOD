$('#button').click(function () {
    let data = $('#data').val()
  
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
        exibeConteudo(response)
      },
      error: function () {
        alert(
            'Erro na API, por favor tente novamente. Recarregue a pagina ou mude a data, datas disponiveis: 16/06/1995 até o dia de hoje!'
        )
      }
    })
  })
  
  function exibeConteudo(response) {
    let image = $('#foto')
    let video = $('#video')
  
    if (response.media_type == 'image') {
      image.removeClass('visibility')
      video.addClass('visibility')
    } else if (response.media_type == 'video') {
      video.removeClass('visibility')
      image.addClass('visibility')
    }
  
    $('#titulo').text(response.title)
    image.attr('src', `${response.url}`)
    video.attr('src', `${response.url}`)
    $('#text').text(response.explanation)
  }