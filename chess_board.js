/*Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.
На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
Когда справитесь, сделайте размер доски переменным, чтобы можно было создавать доски любого размера.*/

var space = " ";
var grate = "#";
for( var size = 1; size <= 8; size++)
{
   if (size % 2 == 0)  console.log (space + grate);
   else console.log (grate + space);
}