import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AniadirPeliPage } from './aniadir-peli.page';

describe('AniadirPeliPage', () => {
  let component: AniadirPeliPage;
  let fixture: ComponentFixture<AniadirPeliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniadirPeliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AniadirPeliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
