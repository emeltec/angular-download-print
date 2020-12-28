import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, takeWhile } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceImageService {

  alive="hol"

constructor(
  private http: HttpClient
) { }

downloadPhoto( name: string) : Observable<Blob> {
  const url = environment.api_url + '/assets/' + name;
  console.log(window.location.host)

  return this.http.get(url, { responseType: 'blob' }).pipe();
}

}
