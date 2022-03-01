import { TestBed } from "@angular/core/testing";
import { AhorcadoService } from "./ahorcado.service";

describe("Test arriesgar palabra", () => {
   let service: AhorcadoService;

   beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(AhorcadoService);
      service.palabra = "perro";
      service.resetearScore();
   });

   it("Si la palabra es perro y arriesgo gato, pierdo", () => {
      const result = service.arriesgarPalabra("gato");
      expect(result).toEqual(false);
   });

   it("Si la palabra es perro y arriesgo perro, gano", () => {
      const result = service.arriesgarPalabra("perro");
      expect(result).toEqual(true);
   });

   it("Si la palabra es perro y arriesgo PeRRó, gano", () => {
      const result = service.arriesgarPalabra("PeRRó");
      expect(result).toBeTruthy();
   });

   it("Si la palabra es perro y arriesgo PERRO, gano", () => {
      const result = service.arriesgarPalabra("PERRO");
      expect(result).toEqual(true);
   });

   it("Si la palabra es perro y arriesgo perroa, perdes", () => {
      const result = service.arriesgarPalabra("perroa");
      expect(result).toEqual(false);
   });

   describe("Si ya ingresé letras, el arriesgar palabra deberia que cuando no ingresé letras.", () => {
      beforeEach(() => {
         service.ingresarLetra("p");
         service.ingresarLetra("i");
         service.ingresarLetra("j");
      });

      it("Si la palabra es perro y arriesgo gato, pierdo", () => {
         const result = service.arriesgarPalabra("gato");
         expect(result).toEqual(false);
      });

      it("Si la palabra es perro y arriesgo perro, gano", () => {
         const result = service.arriesgarPalabra("perro");
         expect(result).toEqual(true);
      });

      it("Si la palabra es perro y arriesgo PeRRó, gano", () => {
         const result = service.arriesgarPalabra("PeRRó");
         expect(result).toBeTruthy();
      });

      it("Si la palabra es perro y arriesgo PERRO, gano", () => {
         const result = service.arriesgarPalabra("PERRO");
         expect(result).toEqual(true);
      });

      it("Si la palabra es perro y arriesgo perroa, perdes", () => {
         const result = service.arriesgarPalabra("perroa");
         expect(result).toEqual(false);
      });
   });
});
