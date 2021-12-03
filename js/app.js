
    $(function(){
//      $('.depype-menu .nav-item')[0].click();
        
    });

    $('.depype-menu .nav-item').on('click', function(){
        var type_context =  $(this).text();
        console.log( type_context );

        if( type_context == "Inicio" ){
            $(this).css('background-color', 'rgba(0, 123, 255, 1)');
        }else if( type_context == "PEEME" ){
            $(this).css('background-color', 'rgba(216, 112, 147, 1)');
        }else if( type_context == "Agenda Anual de Evaluación" ){
            
        }else if( type_context == "Evaluación de Programas y Proyectos" ){
            
        }else if( type_context == "Contraloría Social" ){
            
        }
    });

/*
    $('.depype-menu .list-group-item').on('click', function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        var type_context =  $(this).text();
        console.log( type_context );

        if( type_context == "Inicio" ){
            $('#depype-peeme, #depype-agenda-anual, #depype-evaluacion-pyp, #depype-contraloria').hide();
            $('#depype-inicio').show('1000');
        }else if( type_context == "Programa Estatal de Evaluación y Mejora Educativa (PEEME)" ){
            $('#depype-inicio, #depype-agenda-anual, #depype-evaluacion-pyp, #depype-contraloria').hide();
            $('#depype-peeme').show();
        }else if( type_context == "Agenda Anual de Evaluación de Programas y Proyectos Educativos" ){
            $('#depype-inicio, #depype-peeme, #depype-evaluacion-pyp, #depype-contraloria').hide();
            $('#depype-agenda-anual').show();
        }else if( type_context == "Evaluación de Programas y Proyectos" ){
            $('#depype-inicio, #depype-peeme, #depype-agenda-anual, #depype-contraloria').hide();
            $('#depype-evaluacion-pyp').show();
        }else if( type_context == "Contraloría Social" ){
            $('#depype-inicio, #depype-peeme, #depype-agenda-anual, #depype-evaluacion-pyp').hide();
            $('#depype-contraloria').show();
        }
    });
*/
