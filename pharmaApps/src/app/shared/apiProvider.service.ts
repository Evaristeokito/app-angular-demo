import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './model/product.model';
import { Commande } from './model/commande.model';

@Injectable({
  providedIn: 'root',
})
export class ApiProviderService {
  baseApi = environment.baseURL;

  constructor(private http: HttpClient) {}

  // get all product
  getProduct(): Observable<Product> {
    return this.http
      .get<Product>(this.baseApi + '/products')
      .pipe(map((data: any) => data.data || []));
  }

  // get all commande
  getCommande(): Observable<Commande> {
    return this.http
      .get<Commande>(this.baseApi + '/command')
      .pipe(map((data: any) => data.data || []));
  }

  // traitement des erreurs
  errorTraitement(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
