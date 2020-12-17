import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private baseUrl = 'http://localhost:8080/api/formations';

  constructor(private http: HttpClient) { }

  getFormation(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createFormation(formation: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/save`, formation);
  }

  updateFormation(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deleteFormation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getFormationsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}