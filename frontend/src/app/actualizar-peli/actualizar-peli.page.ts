import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Videoclub } from '../models/videoclub';
import { VideoclubService } from '../services/videoclub.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8080/api/bicycles';

@Component({
  selector: 'app-actualizar-peli',
  templateUrl: './actualizar-peli.page.html',
  styleUrls: ['./actualizar-peli.page.scss'],
})
export class ActualizarPeliPage implements OnInit {

  videoclub: Videoclub[];
  identificador: number;
  constructor(private videoclubService: VideoclubService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getTodasLasPelis();
  }

  getTodasLasPelis(){
    this.videoclubService.getPelis().subscribe( videoclub => {
      this.videoclub = videoclub;
      console.log(videoclub);
    });

  }

  updatePeli(id: number, videoclub: Videoclub): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nombre", videoclub.nombre);
    bodyEncoded.append("director", videoclub.director);
    bodyEncoded.append("año", videoclub.anio.toString());
    let body = bodyEncoded.toString();
    return this.http.put(apiUrl + "/" + id, body, httpOptions);
  }

  guardarId(id: number){
    this.identificador = id;
    console.log(id);
  }

  getId(){
    return this.identificador;
  }
}
