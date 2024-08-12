import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bodega } from '../models/bodega';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {
  private apiUrl = environment.urlApi +'bodegas';

  constructor(private http: HttpClient) {}

  getBodegas(): Observable<Bodega[]> {
    return this.http.get<Bodega[]>(this.apiUrl);
  }

  getBodega(id: number): Observable<Bodega> {
    return this.http.get<Bodega>(`${this.apiUrl}/${id}`);
  }

  addBodega(bodega: Bodega): Observable<Bodega> {
    return this.http.post<Bodega>(this.apiUrl, bodega);
  }

  deleteBodega(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

