import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCiudadesComponent } from './ver-ciudades.component';

describe('VerCiudadesComponent', () => {
  let component: VerCiudadesComponent;
  let fixture: ComponentFixture<VerCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCiudadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
