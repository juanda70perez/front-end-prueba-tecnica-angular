import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puerto } from '../models/puerto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PuertoService {
  private apiUrl = environment.urlApi+'puertos'; 

  constructor(private http: HttpClient) {}

  getPuertos(): Observable<Puerto[]> {
    return this.http.get<Puerto[]>(this.apiUrl);
  }

  addPuerto(puerto: Puerto): Observable<Puerto> {
    return this.http.post<Puerto>(this.apiUrl, puerto);
  }

  deletePuerto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
