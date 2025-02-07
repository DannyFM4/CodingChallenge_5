// Task 1: Object Properties


let customer = { // these lines declare an object with 3 properties in it
    name: "LeBron James", 
    age: 40, 
    email: "king.james@email.com" 
};


// the lines below log each of the objects properties in the console
console.log(`The customer's name is: ${customer.name}`);
console.log(`The customer's age is: ${customer.age}`);
console.log(`The customer's email is: ${customer.email}`);


// Task 2: Object Methods


let order = {   // lines below declare an object with 3 properties and a method in it
    orderId: 12345,
    totalAmount: 150, 
    status: "Processing",
    displayOrder() {
        // the "this" syntax makes sure the method is using the properties from this object
        console.log(`Order ID: ${this.orderId}`) 
        console.log(`Order price: $${this.totalAmount}`)
        console.log(`Order status: ${this.status}`)
    }
};


order.displayOrder();   // This line calls the method in the object, which then logs the properties in the console