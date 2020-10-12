import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BorrarPeliPage } from './borrar-peli.page';

describe('BorrarPeliPage', () => {
  let component: BorrarPeliPage;
  let fixture: ComponentFixture<BorrarPeliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarPeliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BorrarPeliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
