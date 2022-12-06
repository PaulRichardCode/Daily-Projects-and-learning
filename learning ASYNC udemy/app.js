const multiply = (x, y) => x * y;

const square = (x) => x * x;

const isRightTriangle = (a, b, c) => square(a) + square(b) === square(c);

isRightTriangle(3, 4, 5);
//call-stack means adding breakpoint to our code
