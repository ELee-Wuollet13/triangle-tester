import { Triangle } from './../src/triangle.js'

describe ('Triangle', () => {
var reusableTriangle;

beforeEach(() => {
  reusableTriangle = new Triangle(5, 5, 5);
});
test('should show how beforeEach() works', () => {
console.log(reusableTriangle);
});
  test('should correctly create a triangle object with three lengths', () => {
    let triangle = new Triangle (2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });

  test('should correctly determine whether three lengths are not a triangle', () => {
    let notTriangle = new Triangle(3,9,22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });
});

test('should correctly determine whether three lengths make a scalene triangle', function() {
  var scalTriangle = new Triangle(4,5,7)
  expect(scalTriangle.checkType()).toEqual("scalene triangle");
});
test('should correctly determine whether three lengths make an isosceles triangle', () => {
  var isocTriangle = new Triangle(5,5,7)
  expect(isocTriangle.checkType()).toEqual("isosceles triangle");
});
