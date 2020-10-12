import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaginaActualizacionPage } from './pagina-actualizacion.page';

describe('PaginaActualizacionPage', () => {
  let component: PaginaActualizacionPage;
  let fixture: ComponentFixture<PaginaActualizacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaActualizacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaActualizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
