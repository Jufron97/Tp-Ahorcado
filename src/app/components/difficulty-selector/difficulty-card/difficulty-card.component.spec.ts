import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AhorcadoComponent } from "../../ahorcado/ahorcado.component";
import { DifficultyCardComponent } from "./difficulty-card.component";

describe("DifficultyCardComponent", () => {
   let component: DifficultyCardComponent;
   let fixture: ComponentFixture<DifficultyCardComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [RouterTestingModule.withRoutes([{ path: "game", component: AhorcadoComponent }])],
         declarations: [DifficultyCardComponent],
      }).compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(DifficultyCardComponent);
      component = fixture.componentInstance;

      // set the default inputs
      component.dificultad = "Medio";
      component.difKey = "medio";
      component.estrellas = 2;
      component.texto = "texto de prueba";

      fixture.detectChanges();
   });

   it("should create", () => {
      expect(component).toBeTruthy();
   });

   it("Debe seleccionar la dificultad correctamente se le pase la dificultad media", () => {
      component.difKey = "medio";
      const rta = component.selectDificulty();
      expect(rta).toBeTruthy();
   });
   it("Debe seleccionar la dificultad correctamente se le pase la dificultad facil", () => {
      component.difKey = "bajo";
      const rta = component.selectDificulty();
      expect(rta).toBeTruthy();
   });
   it("Debe seleccionar la dificultad correctamente se le pase la dificultad dificil", () => {
      component.difKey = "alto";
      const rta = component.selectDificulty();
      expect(rta).toBeTruthy();
   });

   it("No debe seleccionar la dificultad cuando esta no sea erronea", () => {
      component.difKey = "asdasd";
      const rta = component.selectDificulty();
      expect(rta).toBeFalsy();
   });
});
