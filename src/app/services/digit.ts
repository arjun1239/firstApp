// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class Digit {
  
// }

import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Digit {

  private apiUrl = 'http://localhost:8000/predict'; // FastAPI URL
  //private http = inject(HttpClient)

  constructor(private http: HttpClient) { }

  predictDigit(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(this.apiUrl, formData);
  }
}

