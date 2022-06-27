
    $(function(){
        $('[data-toggle="tooltip"]').tooltip();

//      $('.depype-menu .nav-item')[0].click();
        $('#headingOne').find('button').css('color', 'white');
        $('#headingOne').find('span').css('color', 'white');
    });

$('.btn-collapsable-item-siie').on('click', function(){
    // href="https://www.seg.guanajuato.gob.mx/SIIE/SitePages/SIIE.aspx" target="__blank"
    window.open('https://www.seg.guanajuato.gob.mx/SIIE/SitePages/SIIE.aspx', '_blank');
});

//  Trigger for card-reveal PLANEA
$('#ShowDocsEcea').on('click', function(){  
    $('.btn-info-ecea').fadeOut(100, function(){    
        $('#ShowDocsEcea').tooltip('hide');
    });

    $('.card-reveal-ecea').slideToggle('slow');

});

$('.card-reveal-ecea .close').on('click', function(){
    $('.card-reveal-ecea').slideToggle('slow', function(){
        $('.btn-info-ecea').fadeIn('fast');
    });
});

//  Trigger for card-reveal PLANEA
$('#ShowDocsPlanea').on('click', function(){  
    $('.btn-info-planea').fadeOut(100, function(){    
        $('#ShowDocsPlanea').tooltip('hide');
    });

    $('.card-reveal-planea').slideToggle('slow');

});

$('.card-reveal-planea .close').on('click', function(){
    $('.card-reveal-planea').slideToggle('slow', function(){
        $('.btn-info-planea').fadeIn('fast');
    });
});

//  Trigger for card-reveal PISA
    $('#ShowDocsPisa').on('click', function(){  
        $('.btn-info-pisa').fadeOut(100, function(){    
            $('#ShowDocsPisa').tooltip('hide');
        });

        $('.card-reveal-pisa').slideToggle('slow');

    });

    $('.card-reveal-pisa .close').on('click', function(){
        $('.card-reveal-pisa').slideToggle('slow', function(){
            $('.btn-info-pisa').fadeIn('fast');
        });
    });

//  Trigger for card-reveal TALIS
    $('#ShowDocsTalis').on('click', function(){  
        $('.btn-info-talis').fadeOut(100);

        $( $('.card-reveal-talis') ).slideToggle('slow');
        $('#ShowDocsTalis').tooltip('hide');
    });
    
    $('.card-reveal-talis .close').on('click', function(){
        $('.card-reveal-talis').slideToggle('slow', function(){
            $('.btn-info-talis').fadeIn('fast');
        });
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

    $('.dropdown-menu-dlae').on('click', 'dropdown-item', function(){
        console.log( $(this) );
    });

    $('.epe-inicio-tab-option').on('click', function(){
        console.log('Inicio');
        $('#epe-inicio-page').siblings().removeClass('active');
        $('#epe-inicio-page').siblings().removeClass('show');

        $('#epe-inicio-page').addClass('show');
        $('#epe-inicio-page').addClass('active');        
    });

    $('.dropdown-menu-practica-enseñanza').on('click', '.dropdown-item', function(){
        var program = $(this).attr('name-program');

        if( program =='info_depto' ){
            $('#epe-evaluacion-practica-enseñanza-page').siblings().removeClass('active');
            $('#epe-evaluacion-practica-enseñanza-page').siblings().removeClass('show');

            $('#epe-evaluacion-practica-enseñanza-page').addClass('show');
            $('#epe-evaluacion-practica-enseñanza-page').addClass('active');
        }

        console.log( 'Clicked => ', $(this).attr('name-program') );

    });

    $('.dropdown-menu-depype-TEST').on('click', '.dropdown-item', function(){
        var program = $(this).attr('name-program');

        if( program =='peeme' ){
            $('#epe-depype-peeme').siblings().removeClass('active');
            $('#epe-depype-peeme').siblings().removeClass('show');

            $('#epe-depype-peeme').addClass('show');
            $('#epe-depype-peeme').addClass('active');
        }else if( program == 'agenda-anual' ){
            $('#epe-depype-agenda-anual').siblings().removeClass('active');
            $('#epe-depype-agenda-anual').siblings().removeClass('show');

            $('#epe-depype-agenda-anual').addClass('show');
            $('#epe-depype-agenda-anual').addClass('active');
        }else if( program == 'evaluacion-p-y-p' ){
            $('#epe-depype-evaluacion_p_y_p').siblings().removeClass('active');
            $('#epe-depype-evaluacion_p_y_p').siblings().removeClass('show');

            $('#epe-depype-evaluacion_p_y_p').addClass('show');
            $('#epe-depype-evaluacion_p_y_p').addClass('active');
        }else if( program == 'contraloria-social' ){
            $('#epe-depype-contraloria-social').siblings().removeClass('active');
            $('#epe-depype-contraloria-social').siblings().removeClass('show');

            $('#epe-depype-contraloria-social').addClass('show');
            $('#epe-depype-contraloria-social').addClass('active');
        }else if( program == 'normativa' ){
            $('#epe-depype-normativa').siblings().removeClass('active');
            $('#epe-depype-normativa').siblings().removeClass('show');

            $('#epe-depype-normativa').addClass('show');
            $('#epe-depype-normativa').addClass('active');
        }

        console.log( 'Clicked => ', $(this).attr('name-program') );

    });
    
    $('.dropdown-menu-logistica').on('click', '.dropdown-item', function(){
        var program = $(this).attr('name-program');

        if( program =='evaluaciones-internacionales' ){
            $('#epe-logistica-evaluaciones-internacionales').siblings().removeClass('active');
            $('#epe-logistica-evaluaciones-internacionales').siblings().removeClass('show');

            $('#epe-logistica-evaluaciones-internacionales').addClass('show');
            $('#epe-logistica-evaluaciones-internacionales').addClass('active');

        }else if( program == 'evaluaciones-federales' ){
            $('#epe-logistica-evaluaciones-nacionales').siblings().removeClass('active');
            $('#epe-logistica-evaluaciones-nacionales').siblings().removeClass('show');

            $('#epe-logistica-evaluaciones-nacionales').addClass('show');
            $('#epe-logistica-evaluaciones-nacionales').addClass('active');
            
        }else if( program == 'EXUMS' ){
            $('#epe-logistica-exums').siblings().removeClass('active');
            $('#epe-logistica-exums').siblings().removeClass('show');

            $('#epe-logistica-exums').addClass('show');
            $('#epe-logistica-exums').addClass('active');
        }/*else if( program == 'RIMA' ){
            $('#epe-logistica-rima').siblings().removeClass('active');
            $('#epe-logistica-rima').siblings().removeClass('show');

            $('#epe-logistica-rima').addClass('show');
            $('#epe-logistica-rima').addClass('active');
        }*/

        console.log( 'Clicked => ', $(this).attr('name-program') );

    });

    $('.btn-info-planea-basica').on('click', function(){

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