import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDeContactoComponent } from './datos-de-contacto.component';

describe('DatosDeContactoComponent', () => {
  let component: DatosDeContactoComponent;
  let fixture: ComponentFixture<DatosDeContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosDeContactoComponent]
    });
    fixture = TestBed.createComponent(DatosDeContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
