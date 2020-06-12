const shapeContainer = document.getElementById("shapeBox"),
    rectangleButton = document.getElementById("rectangleButton"),
    squareButton = document.getElementById("squareButton"),
    circleButton = document.getElementById("circleButton"),
    triangleButton = document.getElementById("triangleButton");

rectangleButton.addEventListener("click", () => new Rectangle(document.getElementById("rectangleWidth").value, document.getElementById("rectangleHeight").value));
squareButton.addEventListener("click", () => new Square(document.getElementById("squareSideLength").value));
circleButton.addEventListener("click", () => new Circle(document.getElementById("circleRadius").value));
triangleButton.addEventListener("click", () => new Triangle(document.getElementById("triangleHeight").value));

class Shape {
    constructor() {
        this.shape = document.createElement("div");
        this.shape.classList.add("shape");
        this.shape.addEventListener("click", () => this.describe());
        this.shape.addEventListener("dblclick", () => shapeContainer.removeChild(this.shape));
        shapeContainer.appendChild(this.shape);
        this.shape.style.top = `${Math.floor(Math.random() * (600 - this.shape.style.height))}px`;
        this.shape.style.left = `${Math.floor(Math.random() * (600 - this.shape.style.width))}px`;
    }

    describe() {
        document.getElementById("displayShapeName").innerText = `Shape Name: ${this.shape.shapeName}`;
        document.getElementById("displayWidth").innerText = `Width: ${this.shape.width}`;
        document.getElementById("displayHeight").innerText = `Height: ${this.shape.height}`;
        document.getElementById("displayRadius").innerText = `Radius: ${this.shape.radius}`;
        document.getElementById("displayArea").innerText = `Area: ${this.shape.area}`;
        document.getElementById("displayPerimeter").innerText = `Perimeter: ${this.shape.perimeter}`;
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
        this.shape.shapeName = "Rectangle";
        this.shape.style.height = `${this.height}px`;
        this.shape.style.width = `${this.width}px`;
        this.shape.style.backgroundColor = "green";
        this.doMath();
    }

    doMath() {
        this.shape.height = `${this.height}`;
        this.shape.width = `${this.width}`;
        this.shape.radius = "N/A";
        this.shape.area = this.height * this.width;
        this.shape.perimeter = (2 * this.height) + (2 * this.width);
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
        this.shape.shapeName = "Square";
        this.shape.style.height = `${this.sideLength}px`;
        this.shape.style.width = `${this.sideLength}px`;
        this.shape.style.backgroundColor = "red";
        this.doMath();
    }

    doMath() {
        this.shape.height = `${this.sideLength}`;
        this.shape.width = `${this.sideLength}`;
        this.shape.radius = "N/A";
        this.shape.area = this.sideLength ** 2;
        this.shape.perimeter = 4 * this.sideLength;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.shape.shapeName = "Circle";
        this.shape.classList.add("circle");
        this.shape.style.height = `${2 * this.radius}px`;
        this.shape.style.width = `${2 * this.radius}px`;
        this.shape.style.backgroundColor = "purple";
        this.doMath();
    }

    doMath() {
        this.shape.height = `${this.radius}`;
        this.shape.width = `${this.radius}`;
        this.shape.radius = this.radius;
        this.shape.area = Math.round(Math.PI * (this.radius ** 2));
        this.shape.perimeter = Math.round(2 * Math.PI * this.radius);
    }
}


class Triangle extends Shape {
    constructor(height) {
        super();
        this.height = height;
        this.shape.shapeName = "Triangle";
        this.shape.classList.add("triangle");
        this.shape.style.borderTopWidth = `${this.height}px`;
        this.shape.style.borderRightWidth = `${this.height}px`;
        this.doMath();
    }

    doMath() {
        this.shape.height = `${this.height}`;
        this.shape.width = `${this.height}`;
        this.shape.radius = "N/A";
        this.shape.area = Math.round(0.5 * (this.height * this.height));
        this.shape.perimeter = Math.round(2 * this.height + Math.sqrt(2) * this.height);
    }
}








// $('#rectangleButton').click( () => new Rectangle($('#rectangleWidth').value, $('#rectangleHeight').value));
// $('#squareButton').click( () => new Square);
// $('#circleButton').click( () => new Circle);
// $('#triangleButton').click( () => new Triangle);

// class Shape {
//     constructor() {
//         this.shape = $('<div>');
//         $('#shapeBox').append(this.shape);
//         this.shape.style.top = `${Math.floor(Math.random() * (600 - this.shape.style.height))}px`;
//         this.shape.style.left = `${Math.floor(Math.random() * (600 - this.shape.style.width))}px`;
//     }
// }

// class Rectangle extends Shape {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//         $(this.shape).addClass('rectangle');
//         this.shape.height = `${this.height}px`;
//         this.shape.width = `${this.width}px`;
//         this.doMath();
//     }

//     doMath() {
//         this.shape.height = `${this.height}`;
//         this.shape.width = `${this.width}`;
//         this.shape.radius = "N/A";
//         this.shape.area = this.height * this.width;
//         this.shape.perimeter = (2 * this.height) + (2 * this.width);
//     }
// }

// class Square extends Shape {
//     constructor(sideLength) {
//         super();
//         this.sideLength = sideLength
//         $(this.shape).addClass('square');
//         $('#shapeBox').append(this.shape);

//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//         $(this.shape).addClass('circle');
//         $('#shapeBox').append(this.shape);

//     }
// }

// class Triangle extends Shape {
//     constructor(height) {
//         super();
//         this.height = height;
//         $(this.shape).addClass('triangle');
//         $('#shapeBox').append(this.shape);

//     }
// }