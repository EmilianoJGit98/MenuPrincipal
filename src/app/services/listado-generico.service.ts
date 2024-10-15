import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Iusuario } from '../models/listado.model';

@Injectable({
  providedIn: 'root',
})
export class ListadoGenericoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  actividades: any[] = [];

  constructor(private http: HttpClient) {}

  getListGenerico(): Observable<Iusuario[]> {
    return this.http.get<Iusuario[]>(this.apiUrl);
  }
}
