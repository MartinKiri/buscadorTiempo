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
  derscripcion = '';
  query = false;
  loading = false;
  mostrarError = false;
  lon = '';
  lat = '';
  maxTemp= 0;
  minTemp= 0;


  constructor(private _climaService: ClimaService) {}

  ngOnInit(): void {}
  obtenerClima() {
    this.loading = true;
    this._climaService.getClima(this.ciudad).subscribe((data) => {
      console.log(data);
      this.loading = false;
      this.query = true;
      this.temperatura = data.main.temp - 273;
      this.maxTemp = data.main.temp_max - 273;
      this.minTemp = data.main.temp_min - 273;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].main;
      this.derscripcion = data.weather[0].description;
      this.lat = data.coord.lat
      this.lon = data.coord.lon      
    },error=>{
      this.loading=false;
      this.error()
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
