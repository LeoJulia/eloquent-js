/* Chessboard
    Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.
    На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
    Когда справитесь, сделайте размер доски переменным, чтобы можно было создавать доски любого размера.
*/
var string;
var size = 11;
for (var i = 0; i < size; i++) {
    string = "";
    if (i % 2 != 0) {
        for (var j = 0; j < size/2; j++) {
           string += "# "
        }
    }
    else {
         for (var k = 0; k <  Math.floor(size/2); k++) {
           string += " #"
        }
    }
console.log(string);
}