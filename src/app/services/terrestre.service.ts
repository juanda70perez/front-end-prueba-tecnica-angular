import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvioTerrestre } from '../models/envioTerrestre';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TerrestreService {
  private apiUrl = environment.urlApi+'envios-terrestres';

  constructor(private http: HttpClient) {}

  getEnvios(): Observable<EnvioTerrestre[]> {
    return this.http.get<EnvioTerrestre[]>(this.apiUrl);
  }

  getEnvio(id: number): Observable<EnvioTerrestre> {
    return this.http.get<EnvioTerrestre>(`${this.apiUrl}/${id}`);
  }

  addEnvio(envio: EnvioTerrestre): Observable<EnvioTerrestre> {
    return this.http.post<EnvioTerrestre>(this.apiUrl, envio);
  }

  deleteEnvio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
