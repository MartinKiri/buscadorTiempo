import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class ClimaService {
  url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  key = '&appid=30041a7ee4a0e6f77f76d84e89e3886e';
  idioma= '&lang=es'

  constructor(private http: HttpClient) {}

  getClima(ciudad: string): Observable<any> {
    const URL = this.url + ciudad + this.key+ this.idioma;
    return this.http.get(URL);
  }
}
