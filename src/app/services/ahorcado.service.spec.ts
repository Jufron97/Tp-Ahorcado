import { TestBed } from "@angular/core/testing";
import { AhorcadoService } from "./ahorcado.service";
import { palabrasFaciles, palabrasMedias, palabrasDificiles, PalabraE2ETest } from "./palabras";
import { environment } from "../../environments/environment";

describe("AhorcadoService", () => {
   let service: AhorcadoService;

   beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(AhorcadoService);
      service.palabra = "perro";
   });

   describe("Identificarse", () => {
      it("El juego comienza sin tener un nombre de usuario por defecto", () => {
         expect(service.nombreUsuario).toEqual(null);
      });
      it("Que al ingresar el nombre 'Juan' se guarde correctamente", () => {
         service.setearNombreUsuario("Juan");
         expect(service.nombreUsuario).toEqual("Juan");
      });
   });

   describe("Configurar", () => {
      it("El juego comienza sin un nivel de dificultad determinado", () => {
         expect(service.dificultad).toEqual(undefined);
      });
      it("Si se elije nivel 'bajo' de dificultad, se guarde correctamente", () => {
         const rta = service.setearDificultad("bajo");
         expect(service.dificultad).toEqual(1);
         expect(rta).toEqual(true);
      });
      it("Si se elije nivel 'medio' de dificultad, se guarde correctamente", () => {
         const rta = service.setearDificultad("medio");
         expect(service.dificultad).toEqual(2);
         expect(rta).toEqual(true);
      });
      it("Si se elije nivel 'alto' de dificultad, se guarde correctamente", () => {
         const rta = service.setearDificultad("alto");
         expect(service.dificultad).toEqual(3);
         expect(rta).toEqual(true);
      });
      it("Si se elije nivel 'otracosa' de dificultad, el juego finaliza", () => {
         const rta = service.setearDificultad("otracosa");
         expect(rta).toEqual(false);
         expect(service.dificultad).toEqual(undefined);
      });
   });

   describe("Elección de Palabra", () => {
      it("El juego comienza con la palabra perro hardcodeada", () => {
         expect(service.palabra).toEqual("perro");
      });
      it("Devuelve una palabra dentro de las faciles al seleccionar nivel de dificultad bajo", () => {
         service.setearDificultad("bajo");
         const palabra = service.obtenerPalabra();
         const palabraEsFacil = palabrasFaciles.map((e) => e.palabra).includes(palabra);
         expect(palabraEsFacil).toBeTruthy();
      });
      it("Devuelve una palabra dentro de las medio al seleccionar nivel de medio ", () => {
         service.setearDificultad("medio");
         const palabra = service.obtenerPalabra();
         const palabraEsMedia = palabrasMedias.map((e) => e.palabra).includes(palabra);
         expect(palabraEsMedia).toBeTruthy();
      });
      it("Devuelve una palabra dentro de las dificiles al seleccionar nivel de dificultad dificiles", () => {
         service.setearDificultad("alto");
         const palabra = service.obtenerPalabra();
         const palabraEsAlta = palabrasDificiles.map((e) => e.palabra).includes(palabra);
         expect(palabraEsAlta).toBeTruthy();
      });

      it("Si se estan corriendo los test e2e, la unica palabra posible es la de testing", () => {
         // Cambio la variable de entorno para obligar a que se pruebe
         // el unit test en environment.test = true
         const oldTestValue = environment.test;
         environment.test = true;

         service.setearDificultad("medio");
         const palabra = service.obtenerPalabra();

         expect(palabra).toEqual(PalabraE2ETest[0].palabra);

         // vuelvo a colocar la variable a su valor original
         environment.test = oldTestValue;
      });
   });

   describe("Jugar", () => {
      it("Ingresar la letra `p` en la palabra perro:", () => {
         expect(service.ingresarLetra("p")).toEqual(true);
      });
      it("Ingresar la letra `P` en la palabra perro:", () => {
         expect(service.ingresarLetra("P")).toEqual(true);
      });
      it("Al ingresar las letras 'p', 'e' y 'l', informe que las acertadas son p y e con la palabra perro", () => {
         service.ingresarLetra("p");
         service.ingresarLetra("e");
         service.ingresarLetra("l");
         expect(service.mostrarLetrasAcertadas()).toEqual(["p", "e"]);
      });

      it("Que al ingresar las letras 'p', 'j' y 'l', informe que las erradas son j y l con la palabra perro", () => {
         service.ingresarLetra("p");
         service.ingresarLetra("j");
         service.ingresarLetra("l");
         expect(service.mostrarLetrasErradas()).toEqual(["j", "l"]);
      });

      describe("Pedir pistas", () => {
         it("Solicito pista cuando la palabra es facil y me la debe decir la pista correcta", () => {
            service.setearDificultad("bajo");
            service.obtenerPalabra();
            const pista = service.pista;
            expect(service.getPista()).toEqual(pista);
         });
         it("Solicito pista cuando la palabra es de dificultad media y me la debe decir la pista correcta", () => {
            service.setearDificultad("medio");
            service.obtenerPalabra();
            const pista = service.pista;
            expect(service.getPista()).toEqual(pista);
         });
         it("No me debe dar pista cuando la palabra es dificil", () => {
            service.setearDificultad("alto");
            service.obtenerPalabra();
            const pista = service.pista;
            expect(service.getPista()).toEqual("No se puede obtener una pista en dificultad alta!");
         });
      });
   });

   describe("Puntaje", () => {
      it("Mostrar mensaje Derrota al errar 7 veces", () => {
         service.ingresarLetra("d");
         service.ingresarLetra("f");
         service.ingresarLetra("g");
         service.ingresarLetra("h");
         service.ingresarLetra("i");
         service.ingresarLetra("j");
         service.ingresarLetra("k");
         expect(service.getEstado()).toEqual("Derrota");
      });
   });
});
