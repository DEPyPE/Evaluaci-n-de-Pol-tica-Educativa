
    $(function(){
//      $('.depype-menu .nav-item')[0].click();
        $('#headingOne').find('button').css('color', 'white');
        $('#headingOne').find('span').css('color', 'white');
    });

    $('.epe-menu-normativa .epe-nav-item').on('click', function(){
        var type_context =  $(this);
        console.log( type_context );

        console.log('Item clicked');
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

//      Cambimos el color del icono a blanco
        $(this).find('span').css('color', 'white');

        var id_tab = 'epe-'+$(this).attr('typedept');
        
        console.log( $(this).parent().siblings().children().find('span').css('color', '#007bff') );

        if( id_tab == "epe-inicio" ){
            $( 'div#epe-inicio' ).show();
            $( 'div#epe-normativa').hide();
            $( 'div#epe-evaluacion-educativa').hide();
            $( 'div#epe-evaluacion-pyp').hide();
            $( 'div#epe-docente').hide();

            console.log(' Inicio clicked ');
        }else if( id_tab == "epe-normativa" ){
            $( 'div#epe-inicio' ).hide();
            $( 'div#epe-normativa').show();
            $( 'div#epe-evaluacion-educativa').hide();
            $( 'div#epe-evaluacion-pyp').hide();
            $( 'div#epe-docente').hide();

            console.log(' Normativa clicked ');
        }

//        $( 'div#'+id_tab ).siblings().hide();




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
