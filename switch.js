/*Напишите "if", аналогичный "switch"
    Напишите if..else, соответствующий следующему switch:

    switch (browser) {
    case 'IE':
        alert( 'О, да у вас IE!' );
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Да, и эти браузеры мы поддерживаем' );
        break;

    default:
        alert( 'Мы надеемся, что и в вашем браузере все ок!' );
    }
    -----------
    var browser = " ";
    if (browser == "IE" ) {
        console.log ("О, да у вас IE!");
    } else if (browser == "Chrome" 
            || browser == "Firefox" 
            || browser == "Safari" 
            || browser == "Opera") {
        console.log ("Да, и эти браузеры мы поддерживаем");
    } else {
        console.log ("Мы надеемся, что и в вашем браузере все ок!");
    }
*/

/*Переписать if'ы в switch
    Перепишите код с использованием одной конструкции switch:

    var a = +prompt('a?', '');

    if (a == 0) {
    alert( 0 );
    }
    if (a == 1) {
    alert( 1 );
    }

    if (a == 2 || a == 3) {
    alert( '2,3' );
    }
*/
var num = 1; 
switch (num) {
    case 0:
        console.log (0);
        break;
    case 1:
        console.log (1);
        break;

    case 2:
    case 3:
        console.log (2,3);
        break;
}