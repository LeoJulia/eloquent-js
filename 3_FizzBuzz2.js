/* FizzBuzz
  Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
  Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
  Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.
*/

  for (var number = 1; number <=100; number++) { 
    var print = "" 
    
    if(number % 3 == 0) 
    print += "Fizz";
    if (number % 5 == 0) 
    print += "Buzz";

    console.log (print || number);
  }