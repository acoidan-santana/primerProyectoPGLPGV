import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Videoclub } from '../models/videoclub';
import { VideoclubService } from '../services/videoclub.service';

@Component({
  selector: 'app-todas',
  templateUrl: './todas.page.html',
  styleUrls: ['./todas.page.scss'],
})
export class TodasPage implements OnInit {

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

}
