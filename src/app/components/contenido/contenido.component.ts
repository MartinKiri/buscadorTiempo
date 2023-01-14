import { Component, OnInit } from '@angular/core';
import ClimaService from 'src/app/service/clima.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css'],
})
export class ContenidoComponent implements OnInit {
  ciudad = '';
  temperatura = 0;
  humedad = 0;
  clima = '';
  query = false;
  loading = false;
  mostrarError = false;

  constructor(private _climaService: ClimaService) {}

  ngOnInit(): void {}
  obtenerClima() {
    this.loading = true;
    this._climaService.getClima(this.ciudad).subscribe((data) => {
      console.log(data);
      this.loading = false;
      this.query = true;
      this.temperatura = data.main.temp - 273;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].main;
    });
  }
  
  error() {
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 3000);
  }
}
