import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private baseUrl = 'http://localhost:8080/api/evaluations';

  constructor(private http: HttpClient) { }

  getEvaluation(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEvaluation(evaluation: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, evaluation);
  }

  updateEvaluation(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEvaluation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEvaluationsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
