import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TecladoLetraComponent } from "./teclado-letra.component";

describe("TecladoLetraComponent", () => {
   let component: TecladoLetraComponent;
   let fixture: ComponentFixture<TecladoLetraComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [TecladoLetraComponent],
      }).compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(TecladoLetraComponent);
      component = fixture.componentInstance;
      component.letra = "l";
      fixture.detectChanges();
   });

   it("should create", () => {
      expect(component).toBeTruthy();
   });

   it("press method should work correctly when a letter is pressed", () => {
      const letter = component.letra;
      component.press();
      const pressedLetters = [...component.ahorcado.letrasAcertadas, ...component.ahorcado.letrasErradas];
      expect(pressedLetters).toContain(letter);
   });
});
