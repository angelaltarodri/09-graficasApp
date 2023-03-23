import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(
    private http: HttpClient
  ) { }

  getUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDonaData() {
    return this.getUsuariosRedesSociales()
        .pipe(
          delay(1500),
          map( data => {
            const labels = Object.keys( data );
            const values = Object.values( data );
            return { labels, values };
          })
        )
  }
}
