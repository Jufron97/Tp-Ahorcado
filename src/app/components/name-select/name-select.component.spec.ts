import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AhorcadoService } from "src/app/services/ahorcado.service";
import { DifficultySelectorComponent } from "../difficulty-selector/difficulty-selector.component";
import { NameSelectComponent } from "./name-select.component";

describe("NameSelectComponent", () => {
   let component: NameSelectComponent;
   let fixture: ComponentFixture<NameSelectComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [RouterTestingModule.withRoutes([{ path: "difficulty", component: DifficultySelectorComponent }])],
         declarations: [NameSelectComponent],
         providers: [AhorcadoService],
      }).compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(NameSelectComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it("should create", () => {
      expect(component).toBeTruthy();
   });

   it("Debe setear correctamente el nombre", () => {
      component.name = "Danilo";
      component.selectName();
      const service = TestBed.inject(AhorcadoService);

      expect(service.nombreUsuario).toEqual(component.name);
   });
});
