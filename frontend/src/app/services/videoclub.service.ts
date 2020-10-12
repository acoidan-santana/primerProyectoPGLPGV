import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Videoclub } from '../models/videoclub';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8080/api/videoclub';
@Injectable({
  providedIn: 'root'
})
export class VideoclubService {

  idPeliActual: number;
  
  constructor(private http: HttpClient) { }

  setIdPeliActual(id: number){
    this.idPeliActual=id;
  }
  getIdPeliActual(): number{
    return this.idPeliActual;
  }

  getPeliPorId(id: number): Observable<Videoclub> {
    return this.http.get<Videoclub>(apiUrl + "/" + id);
  }

  getPelis(): Observable<Videoclub[]> {
    return this.http.get<Videoclub[]>(apiUrl);
  }

  deletePeli(id: number): Observable<any>{
    return this.http.delete(apiUrl + "/" + id);
  }

  addPeli(videoclub: Videoclub): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nombre", videoclub.nombre);
    bodyEncoded.append("anio", videoclub.anio.toString());
    bodyEncoded.append("director", videoclub.director);
    
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl, body, httpOptions);
  }

  updatePeli(id: number, videoclub: Videoclub): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nombre", videoclub.nombre);
    bodyEncoded.append("anio", videoclub.anio.toString());
    bodyEncoded.append("director", videoclub.director);
    let body = bodyEncoded.toString();
    return this.http.put(apiUrl + "/" + id, body, httpOptions);
  }
}
