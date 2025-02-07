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


// Task 3: Array Manipulation (push, pop, shift, unshift)


// line 40 declares an array
let cartItems = ["Socks", "Underwear", "Shoes"];

// line 43 add the string "pants" to the end of the array
cartItems.push("Pants");

// line 46 removes the last item in the array
cartItems.pop();

// line 49 adds the string "T-Shirt" to the beginning of the array
cartItems.unshift("T-Shirt");

// line 52 removes the first item in the array
cartItems.shift();

console.log(cartItems);


// Task 4: Map Method


// declaring an array with numbers
let prices = [100, 200, 300];


// using the map syntax to go through the array and apply a 10% discount to each number and logging it in the console
console.log(prices.map((price) => price - (price * .1)));


// Task 5: Filter Method

let invetory = [2, 0, 3, 9, 7];  // declares array


// line 74 is filtering the "inventory" array to not show the products that have 0 in stock, and logging it in the console
console.log(invetory.filter((stock) => stock > 0));


// Task 6: Reduce Method

let sales = [500, 300, 200, 400];  // declares array

// line 83 uses the reduce method to add all of the sales in the array together and get the total, while logging it in the console
console.log(sales.reduce((totalSale, sale) => totalSale + sale, 0));


// Task 7: find() Method

let customers = ["Adam", "Brian", "Charlie", "Daniel"];  // declares array


//  line 91 uses the find method to find a specific string in the array and log it in the console
console.log(customers.find((customer) => customer === "Charlie"));