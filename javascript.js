$('.modal_close').on('click', function(){
    $('.modal_content').hide();
    $('.modal_close').hide();
    $('.modal_open').show();
    $('body:not(.modal)').css("background-color", "white").css("opacity", "1");
});

$('.modal_open').on('click', function(){
    $('.modal_content').show();
    $('.modal_close').show();
    $('.modal_open').hide();
    $('body').css("background-color", "darkgrey").css("opacity", "0.8");
    $(".modal-content").css("opacity", "1");
});
$(function() {
    $(".modal_content").dialog({
        modal: true,
        draggable: false,
        resizable: false,
        buttons: {
            Ok: function() {
                $( this ).dialog( "close" );
            }
        }
    });
});
