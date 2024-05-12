import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from './product';

@Injectable()
export class ProductsService {
  private urlEndPoint: string = "http://localhost:8080/api/products"

private httpHeaders= new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlEndPoint).pipe(
      catchError(e => {
        console.log(e.error.mensaje);
        return throwError(e);
      })
    );
  }

  getProduct(id: Product): Observable<Product>{
    return this.http.get<Product>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        console.log(e.error.mensaje);
        return throwError(e);
      })
    )
  }

  createProducts(product: Product): Observable<Product[]> {
    return this.http.post<any[]>(this.urlEndPoint, product, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.log(e.error.mensaje);
        return throwError(e);
      })
    );
  }

  updateProduct(product: Product): Observable<any>{
    return this.http.put<any[]>(`${this.urlEndPoint}/${product.id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.log(e.error.mensaje);
        return throwError(e);
      })
    )
  }

deleteProduct(id: Product): Observable<any>{
  return this.http.delete<any[]>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
    catchError(e => {
      console.log(e.error.mensaje);
      return throwError(e);
    })
  )
 }
}
