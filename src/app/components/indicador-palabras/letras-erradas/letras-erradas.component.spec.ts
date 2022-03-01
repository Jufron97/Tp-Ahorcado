import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrasErradasComponent } from './letras-erradas.component';

describe('LetrasErradasComponent', () => {
  let component: LetrasErradasComponent;
  let fixture: ComponentFixture<LetrasErradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetrasErradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetrasErradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
