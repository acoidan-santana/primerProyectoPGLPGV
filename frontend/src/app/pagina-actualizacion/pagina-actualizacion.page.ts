import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActualizarPeliPage } from '../actualizar-peli/actualizar-peli.page';
import { VideoclubService } from '../services/videoclub.service';

@Component({
  selector: 'app-pagina-actualizacion',
  templateUrl: './pagina-actualizacion.page.html',
  styleUrls: ['./pagina-actualizacion.page.scss'],
})
export class PaginaActualizacionPage implements OnInit {

  videoclubForm: FormGroup;
  paginaActualizacion: ActualizarPeliPage;
  idPeli: number;

  constructor(public fb: FormBuilder, 
    private videoclubService: VideoclubService,
    private router: Router) {
    this.videoclubForm = this.fb.group({
      nombre: [''],
      director: [''],
      anio: ['']
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.videoclubForm.valid) {
      return false;
    } else {

      console.log(this.idPeli);
      let videoclub = {
        id: this.idPeli,
        nombre: this.videoclubForm.value.nombre,
        director: this.videoclubForm.value.director,
        anio: this.videoclubForm.value.anio
      }
      this.videoclubService.updatePeli(this.idPeli, videoclub)
        .subscribe((res) => {
          this.router.navigateByUrl("/home/menu");
        });
    }
  }

}
