Describe: numberConverter(number)

Test: "It should return an array of numbers from 0 to the entered number."
Code: numberConverter(5);
Expected Output: arr = [0, 1, 2, 3, 4, 5];

Test: "It should pass each number into a numberIdentifier function as an argument and return predefined strings."
Code: numberConverter(numberIdentifier(0));
Expected Output: arr = [0];
Code: numberConverter(numberIdentifier(1));
Expected Output: arr = [boop];
Code: numberConverter(numberIdentifier(2));
Expected Output: arr = [beep];
Code: numberConverter(numberIdentifier(3));
Expected Output: arr = [robotSound];

Describe: numberIdentifier(number)

Test: "It should accept a passed integer argument and convert into a temp string variable."
Code: numberIdentifier(5);
Expected Output: temp = '5';

Test: "It should compare the temp variable against 3 string values with an if / else if / else statement."
Code: numberIdentifier(3);
Expected Output: temp = robotSound;
Code: numberIdentifier(2);
Expected Output: temp = beep;
Code: numberIdentifier(1);
Expected Output: temp = boop;
Code: numberIdentifier(any number < 1 || number > 3);
Expected Output: temp = that number;