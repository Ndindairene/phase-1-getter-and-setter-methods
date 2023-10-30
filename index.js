// Add your Circle class here

class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter() {
      return this.radius * 2;
    }
  
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    set diameter(value) {
      if (value < 0) {
        throw new Error("Diameter cannot be negative");
      }
      this.radius = value / 2;
    }
  
    set circumference(value) {
      if (value < 0) {
        throw new Error("Circumference cannot be negative");
      }
      this.radius = value / (2 * Math.PI);
    }
  
    set area(value) {
      if (value < 0) {
        throw new Error("Area cannot be negative");
      }
      this.radius = Math.sqrt(value / Math.PI);
    }
  }
  
  const circle = new Circle(5);
  console.log("Radius:", circle.radius);
  console.log("Diameter:", circle.diameter);
  console.log("Circumference:", circle.circumference);
  console.log("Area:", circle.area);
  
  
  circle.diameter = 10;
  console.log("Updated Radius:", circle.radius);
  
  circle.circumference = 31.42; 
  console.log("Updated Radius:", circle.radius);
  
  circle.area = 78.54;  
  console.log("Updated Radius:", circle.radius);
  
  
  
  
  
  
  