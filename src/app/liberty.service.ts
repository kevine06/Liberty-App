import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Liberty } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class LibertyService {
  private apiUrl = 'http://localhost:3000/items';

  constructor(private http: HttpClient) { }

  getLibertyItems(): Observable<Liberty[]> {
    return this.http.get<Liberty[]>(this.apiUrl);
  }
  
}
