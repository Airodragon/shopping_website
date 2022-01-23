import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClint: HttpClient) { }

  createProduct(productBody){
    const baseUrl = 'http://localhost:3000/products';
    return this.httpClint.post(baseUrl, productBody); 
  }
  viewProduct(productId){
    const baseUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClint.get(baseUrl, productId); 
  }
  updateProduct(productId,productBody){
    const baseUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClint.put(baseUrl, productBody); 
  }
  deleteProduct(productId){
    const baseUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClint.delete(baseUrl, productId); 
  }
  searchCategoryProduct(CategoryId){
    const baseUrl = 'http://localhost:3000/products/category='+CategoryId;
    return this.httpClint.get(baseUrl); 
  }
  SearchDateProduct(dateParam){
    const baseUrl = 'http://localhost:3000/products/date='+dateParam;
    return this.httpClint.get(baseUrl); 
  }
}
