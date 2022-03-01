import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ScoreTableComponent } from "./score-table.component";

describe("ScoreTableComponent", () => {
   let component: ScoreTableComponent;
   let fixture: ComponentFixture<ScoreTableComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [ScoreTableComponent],
      }).compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(ScoreTableComponent);
      component = fixture.componentInstance;
      component.board = {
         name: "User-test",
         scores: [
            { tag: "Fácil", right: 10, wrong: 3 },
            { tag: "Medio", right: 18, wrong: 20 },
            { tag: "Difícil", right: 17, wrong: 20 },
         ],
      };
      fixture.detectChanges();
   });

   it("should create", () => {
      expect(component).toBeTruthy();
   });

   describe("Probar si el metodo que calcula el porcentaje funciona bien con varios valores", () => {
      it("20 erradas y 20 acertadas es el 50%", () => {
         const expectedNumber = 50;
         const expectedResult = expectedNumber.toFixed(1);
         expect(component.getPercentage(20, 20)).toEqual(expectedResult);
      });

      it("1 erradas y 3 acertadas es el 75%", () => {
         const expectedNumber = 75;
         const expectedResult = expectedNumber.toFixed(1);
         expect(component.getPercentage(3, 1)).toEqual(expectedResult);
      });

      it("10 erradas y 0 acertadas es el 0%", () => {
         const expectedNumber = 0;
         const expectedResult = expectedNumber.toFixed(1);
         expect(component.getPercentage(0, 10)).toEqual(expectedResult);
      });

      it("0 de 0 debe devolver 0%", () => {
         const expectedNumber = 0;
         const expectedResult = expectedNumber.toFixed(1);
         expect(component.getPercentage(0, 0)).toEqual(expectedResult);
      });
   });
});
