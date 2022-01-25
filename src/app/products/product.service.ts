import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClint: HttpClient) { }

  createProduct(productBody: Observable<Product>){
    const baseUrl = 'http://localhost:3000/products';
    return this.httpClint.post<Product>(baseUrl, productBody); 
  }
  
  viewProduct():Observable<Product>{
    const baseUrl = 'http://localhost:3000/products/';
    return this.httpClint.get<Product>(baseUrl);
  }
  
  updateProduct(productId:Observable<Product>,productBody: Observable<Product>){
    const baseUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClint.put<Product>(baseUrl, productBody); 
  }
  
  deleteProduct(productId: Observable<Product>){
    const baseUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClint.delete<Product>(baseUrl); 
  }
  
  searchCategoryProduct(CategoryId: Observable<Product>){
    const baseUrl = 'http://localhost:3000/products/category='+CategoryId;
    return this.httpClint.get<Product>(baseUrl); 
  }
  
  SearchDateProduct(dateParam: Observable<Product>){
    const baseUrl = 'http://localhost:3000/products/date='+dateParam;
    return this.httpClint.get<Product>(baseUrl); 
  }
  getCategory(){
    const categoryUrl = 'http://localhost:3000/categories';
    return this.httpClint.get<Category>(categoryUrl);
  }

}
