import { TestBed } from "@angular/core/testing";
import { AhorcadoService } from "./ahorcado.service";

describe("ScoreBoard tests", () => {
   let service: AhorcadoService;

   beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(AhorcadoService);
      service.palabra = "perro";
      service.resetearScore();
   });

   it("No se debe mostrar ningun scoreBoard si nadie ingreso su nombre", () => {
      const score = service.getScoreBoard();
      expect(score).toEqual([]);
   });

   it("Al ingresar un nombre, debe generar un scoreboard con ese nombre", () => {
      const name = "Roberto";
      service.setearNombreUsuario(name);
      const score = service.getScoreBoard();
      expect(score[0].name).toEqual(name);
   });
   it("Al crear un nuevo scoreBoard se debe guardar en el servicio y en el LocalStorage", () => {
      service.crearScoreBoard("usuarioPrueba");
      expect(service.getScoreBoard()).toEqual(JSON.parse(localStorage.scoreBoard));
   });

   it("Al acertar una palabra se debe guardar correctamente la palabra en el scoreBoard", () => {
      service.palabra = "perro";
      service.setearDificultad("bajo");
      service.setearNombreUsuario("Juan");
      service.ingresarLetra("p");
      service.ingresarLetra("e");
      service.ingresarLetra("r");
      service.ingresarLetra("o");

      let score = service.getScoreBoard()[0];
      expect(score.scores[0].right === 1).toBeTruthy();

      service.reiniciarPartida();
      service.palabra = "casa";
      service.ingresarLetra("c");
      service.ingresarLetra("a");
      service.ingresarLetra("s");

      let newScore = service.getScoreBoard()[0];
      expect(newScore.scores[0].right === 2).toBeTruthy();
   });

   it("Al errar una palabra se debe guardar correctamente el fallo en el scoreBoard", () => {
      service.palabra = "casa";
      service.setearDificultad("bajo");
      service.setearNombreUsuario("Juan");
      "zqximnl".split("").forEach((letra) => service.ingresarLetra(letra));

      let score = service.getScoreBoard()[0];
      expect(score.scores[0].wrong === 1).toBeTruthy();
   });

   it("Resetear el score debe convertirlo en un arreglo vacio", () => {
      service.scoreBoard = ["Ensucio el scoreboard con este string"];
      service.resetearScore();
      let scoreBoard = service.getScoreBoard();
      expect(scoreBoard).toEqual([]);
   });

   it("Al setear dos nombres, me debe crear dos scores en el orden en el que fueron creados", () => {
      service.setearNombreUsuario("jugador1");
      service.setearNombreUsuario("jugador2");

      const scoreBoard = service.getScoreBoard();
      expect(scoreBoard[0].name).toEqual("jugador1");
      expect(scoreBoard[1].name).toEqual("jugador2");
   });

   it("Al volver a ingresar el nombre de un jugador que ya tiene un score, no me debe recrear uno nuevo", () => {
      service.setearNombreUsuario("jugador1");
      service.setearNombreUsuario("jugador2");
      service.setearNombreUsuario("jugador1");

      const scoreBoard = service.getScoreBoard();
      expect(scoreBoard[0].name).toEqual("jugador1");
      expect(scoreBoard[1].name).toEqual("jugador2");

      expect(scoreBoard.length).toEqual(2);
   });

   it("Debe traer el scoreboard del localStorage cuando el usuario resetea el explorador", () => {
      service.setearNombreUsuario("jugador1");
      service.setearNombreUsuario("jugador2");

      service.scoreBoard = [];
      const scoreBoard = service.getScoreBoard();
      expect(scoreBoard.length).toEqual(2);
   });
});
