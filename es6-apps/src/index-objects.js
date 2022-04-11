//objects 
//using function -  style es 5
//using classes -  style es6
//using literals 

//using function -  style es 5
function Employee() {
    //instance variables
    this.id = 1;
    this.name = 'ram'
    this.salary = 100;

    //instance methods
    this.calculateSalary = function () {
        return this.salary * 100;
    }

}
//
//Employee()//regular funciton call
//emp is just variable,; new is operator Employee() is constructor call
let emp = new Employee() // constructor call

console.log(emp.id, emp.name, emp.calculateSalary())

class Customer {
    //instance variables
    // id = 10;
    // name = 'ram'
    //constructor
    constructor(id = 0, name = 'default') {
        //instance variables
        this.id = id
        this.name = name //'ram'
    }
    //instance methods
    // calculateTax() {
    //     return 100;
    // }
    calculateTax = () => 100
}
let customer = new Customer(90, 'ram');
console.log(customer.id, customer.name, customer.calculateTax())

//literal pattern

const product = {
    id: 1,
    name: 'phone',
    price: 1000,
    qty: 10,
    category: {
        id: 99,
        name: 'Electronics'
    }
}
console.log(product.id,product.name,product.qty,product.category.name)