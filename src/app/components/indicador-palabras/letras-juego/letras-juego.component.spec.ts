import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrasJuegoComponent } from './letras-juego.component';

describe('LetrasJuegoComponent', () => {
  let component: LetrasJuegoComponent;
  let fixture: ComponentFixture<LetrasJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetrasJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetrasJuegoComponent);
    component = fixture.componentInstance;
    component.letra = 'l'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
