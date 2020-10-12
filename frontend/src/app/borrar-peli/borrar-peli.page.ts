import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Videoclub } from '../models/videoclub';
import { VideoclubService } from '../services/videoclub.service';

@Component({
  selector: 'app-borrar-peli',
  templateUrl: './borrar-peli.page.html',
  styleUrls: ['./borrar-peli.page.scss'],
})
export class BorrarPeliPage implements OnInit {

  videoclub: Videoclub[];

  constructor(private videoclubService: VideoclubService, private router: Router) { }

  ngOnInit() {
    this.getTodasLasPelis();
  }

  getTodasLasPelis(){
    this.videoclubService.getPelis().subscribe( videoclub => {
      this.videoclub = videoclub;
      console.log(videoclub);
    });

  }

  deletePeli(id: number){
    this.videoclubService.deletePeli(id).subscribe( () => {
      this.getTodasLasPelis();
    })
  }

}
