import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoppingList } from './shared/ShoppingList';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {

  private baseUrl = 'http://localhost:8080/api/shoppingList';

  constructor(private http: HttpClient) {}

  getShoppingList(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createShoppingList(list: ShoppingList): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, list);
  }

  deleteShoppingList(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType : 'text'});
  }

  getAllLists(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


}
