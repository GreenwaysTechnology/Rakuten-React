import {name,city,isActive,count,sayHello} from './util/myutil'
import ProductService from './services/productservice'

console.log(name,city,isActive,count,sayHello());
let product = new ProductService();
console.log(product.findAll())