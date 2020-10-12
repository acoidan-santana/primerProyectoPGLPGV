import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoclubService } from '../services/videoclub.service';

@Component({
  selector: 'app-aniadir-peli',
  templateUrl: './aniadir-peli.page.html',
  styleUrls: ['./aniadir-peli.page.scss'],
})
export class AniadirPeliPage implements OnInit {

  videoclubForm: FormGroup;
  isSubmitted = false;

  constructor(public fb: FormBuilder, 
    private videoclubService: VideoclubService,
    private router: Router) {
    this.videoclubForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      director: ['', [Validators.required, Validators.minLength(2)]],
      anio: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    this.isSubmitted = true;
    console.log("uapos estoy harto xD")
    if (!this.videoclubForm.valid) {
      return false;
    } else {
      let videoclub = {
        id: null,
        nombre: this.videoclubForm.value.nombre,
        director: this.videoclubForm.value.director,
        anio: this.videoclubForm.value.anio
      }
      this.videoclubService.addPeli(videoclub)
        .subscribe((res) => {

          this.router.navigateByUrl("/home/menu");
        });
    }
  }

  get errorCpntrol() {
    return this.videoclubForm.controls;
  }
}
