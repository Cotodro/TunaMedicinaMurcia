// Mostramos y ocultamos menú
$(document).ready(main);
var contador = 1;

function main() {
    $('.menu_bar').click(function() {
        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });

    // Mostramos y ocultamos submenús
    $('.submenu').children('.children').hide();

    $('.submenu').click(function() {
        $(this).children('.children').slideToggle();
    });

    // Icono Whatsapp flotante
    $("body").append('<a href="https://api.whatsapp.com/send?phone=34717708969"> \
    <img src="images/contacto/logo-whatsapp-1.png" class="icono-whatsapp" \
    style="position: fixed; bottom: 1em; right: 1em; display: block; margin: auto; width: 5em;"></a>');
}