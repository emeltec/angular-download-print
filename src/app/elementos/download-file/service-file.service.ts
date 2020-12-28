import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceFileService {

constructor(
  private http: HttpClient
) { }

getReport(fileName): Observable<any> {
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  const baseURL = "assets/";

  return this.http.get(`${baseURL}${fileName}`, { headers, responseType: 'blob'});
}

}
