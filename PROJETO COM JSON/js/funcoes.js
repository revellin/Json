$(function(){
	$.getJSON("js/automoveis.json", function(data) {

      	for(var i = 0; i <  data['automoveis'].length; i++){
      		$("#TableData").append("<tr>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['MARCA'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CARRO'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MIN'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MAX'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MIN'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MAX'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MIN'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MAX'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
			$("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");
			$("#TableData").append("</tr>");
		}

  	});
});

$(function () {

    $("#pesquisa").submit(function (event) { 
        event.preventDefault(); 

        var nome = $("#nome").val().toUpperCase();
        var marca = $("#marca").val().toUpperCase();

	
        $("#TableData").empty(); 

        $.getJSON("js/automoveis.json", function (data) { 

            data['automoveis'].forEach(function (automovel) {

                if ((nome === '' || automovel['CARRO'].includes(nome)) &&
                    (marca === '' || automovel['MARCA'].includes(marca))) {

                    $("#TableData").append("<tr>");

                    for (var prop in automovel) {
		
                        $("#TableData").append("<td scope='col'>" + automovel[prop] + "</td>");
                    }
		                   $("#TableData").append("</tr>");
                }
            });
        });
    });  
});

			   			






				