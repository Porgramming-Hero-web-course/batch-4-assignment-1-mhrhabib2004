type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
  if (shape.shape === "circle") {
      // Area of a circle: π * radius^2
      return Math.PI * shape.radius * shape.radius;
  } else if (shape.shape === "rectangle") {
      // Area of a rectangle: width * height
      return shape.width * shape.height;
  }
  return 0;
}

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); // Sample Output 1: 78.53981633974483

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(rectangleArea); // Sample Output 2: 24

  