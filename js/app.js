
    $(function(){
//      $('.depype-menu .nav-item')[0].click();
        $('#headingOne').find('button').css('color', 'white');
        $('#headingOne').find('span').css('color', 'white');
    });

    $('.epe-menu-normativa .epe-nav-item').on('click', function(){
        var type_context =  $(this);
    });

    $('.card-menu-item .card-menu-item-header').on('click', function(){
//      Asignamos el color azul al item activo y cambiamos el color de letra a blanco
        $(this).addClass('active');
        $(this).children().find('button').css('color', 'white');

//      Quitamos la clase 'active' a los items hermanos para quitar el color azul del elemento seleccionado anteriormente
        $(this).parent().siblings().children().removeClass('active');
        $(this).parent().siblings().children().find('button').css('color', '#007bff');
        
//      Mostrar las opciones del elemento seleccionado y ocultamos los elementos abiertos con anterioridad
        $(this).siblings().collapse('toggle');
        $(this).parent().siblings().children().collapse('hide');

//      Cambimos el color del icono a blanco dependiendo de la opción seleccionada
        $(this).find('span').css('color', 'white');
        $(this).parent().siblings().children().find('span').css('color', '#007bff');

        var id_tab = 'epe-'+$(this).attr('typedept');

    });

    $('#epe-inicio-tab').on('click', function(){
        console.log( $('#epe-inicio-page') );
    });
    
    $('.epe-menu-evaluacion-educativa').on('click', 'div a', function(){
        $(this).addClass('.menu-evaluacion-educativa-active-item');
        $(this).parent().siblings().find('.epe-nav-item').removeClass('.menu-evaluacion-educativa-active-item');
    });

    $('.dropdown-menu-dlae').on('click', 'dropdown-item', function(){
        console.log( $(this) );
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