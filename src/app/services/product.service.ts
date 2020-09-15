import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private SERVER_URL =environment.SERVER_URL;

  constructor(private http: HttpClient) { }

getAllProduct(numberOfResults = 10 ) {
     return this.http.get( this.SERVER_URL + '/products',{
       params:{
         limit: numberOfResults.toString()
       }
     });
 }
}
 