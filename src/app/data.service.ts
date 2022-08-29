import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  BASE_URL = 'http://apolis-grocery.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(`${this.BASE_URL}/category`);
  };

  getSubCategories(catId:any): Observable<any>{
    return this.http.get(`${this.BASE_URL}/subcategory/${catId}`);
  };

  getProductsBySubId(subId:any): Observable<any>{
    return this.http.get(`${this.BASE_URL}/products/sub/${subId}`)
  }

  getProductsByCatId(catId: any): Observable<any>{
    return this.http.get(`${this.BASE_URL}/products/cat/${catId}`);
  };

  getProductById(prodId:any): Observable<any>{
    return this.http.get(`${this.BASE_URL}/products/${prodId}`);
  }
}
