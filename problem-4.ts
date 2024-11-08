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

// Define circle and rectangle objects
const circle: Circle = { shape: "circle", radius: 5 };
const rectangle: Rectangle = { shape: "rectangle", width: 4, height: 6 };

// Sample Input 1:
const circleArea = calculateShapeArea(circle);

// Sample Input 2:
const rectangleArea = calculateShapeArea(rectangle);