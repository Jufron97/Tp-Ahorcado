import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DibujoAhorcadoComponent } from './dibujo-ahorcado.component';

describe('DibujoAhorcadoComponent', () => {
  let component: DibujoAhorcadoComponent;
  let fixture: ComponentFixture<DibujoAhorcadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DibujoAhorcadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DibujoAhorcadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
