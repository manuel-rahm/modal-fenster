$('.modal_close').on('click', function(){
    $('.modal_content').hide();
    $('.modal_close').hide();
    $('.modal_open').show();
});

$('.modal_open').on('click', function(){
    $('.modal_content').show();
    $('.modal_close').show();
    $('.modal_open').hide();
});
$(function() {
    $( ".modal_content" ).dialog({
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