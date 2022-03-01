import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AhorcadoService } from "src/app/services/ahorcado.service";
import Swal from "sweetalert2";

import { AhorcadoComponent } from "./ahorcado.component";

describe("AhorcadoComponent", () => {
   let component: AhorcadoComponent;
   let fixture: ComponentFixture<AhorcadoComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [RouterTestingModule.withRoutes([{ path: "game", component: AhorcadoComponent }])],
         declarations: [AhorcadoComponent],
         providers: [AhorcadoService],
      }).compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(AhorcadoComponent);
      component = fixture.componentInstance;
      const service = TestBed.inject(AhorcadoService);
      service.setearDificultad("alto")
      fixture.detectChanges();
   });
   it("should create", () => {
      expect(component).toBeTruthy();
   });

   it("El cartel de Derrota se debe abrir solo cuando el estado del servicio sea 'Derrota'", (done) => {
      const service = TestBed.inject(AhorcadoService);
      service.estadoDelJuego = service.estadoDerrota;

      fixture.detectChanges();

      expect(Swal.isVisible()).toBeTruthy();
      Swal.clickConfirm();

      setTimeout(() => {
         expect(component.showingModal).toBeFalsy();
         done();
      });
   });
   it("El cartel de Victoria se debe abrir solo cuando el estado del servicio sea 'Victoria'", (done) => {
      const service = TestBed.inject(AhorcadoService);
      service.estadoDelJuego = service.estadoVictoria;

      fixture.detectChanges();

      expect(Swal.isVisible()).toBeTruthy();
      Swal.clickConfirm();

      setTimeout(() => {
         expect(component.showingModal).toBeFalsy();
         done();
      });
   });

   it("Si ya se está mostrando un cartel, se debe levantar la bandera booleana para no tirar otra vez el cartel", (done) => {
      const service = TestBed.inject(AhorcadoService);
      service.estadoDelJuego = service.estadoVictoria;
      fixture.detectChanges();
      expect(Swal.isVisible()).toBeTruthy();
      fixture.detectChanges();
      expect(component.showingModal).toBeTruthy();
      Swal.clickConfirm();
      setTimeout(() => {
         expect(component.showingModal).toBeFalsy();
         done();
      });
   });
});
