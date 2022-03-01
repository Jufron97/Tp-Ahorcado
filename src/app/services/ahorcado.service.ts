import { Injectable } from "@angular/core";
import { palabrasFaciles, palabrasMedias, palabrasDificiles, PalabraE2ETest } from "./palabras";
import { environment } from "../../environments/environment";

@Injectable({
   providedIn: "root",
})
export class AhorcadoService {
   nombreUsuario = null;
   dificultad = undefined;

   palabra = "";
   pista = "";
   estadoDelJuego = "";
   estadoJugando = "Jugando";
   estadoDerrota = "Derrota";
   estadoVictoria = "Victoria";

   letrasIngresadas = [];
   letrasAcertadas = [];
   letrasErradas = [];

   palabrasUtilizadas = [];

   scoreBoard = [];

   constructor() {
      this.estadoDelJuego = this.estadoJugando;
   }

   ingresarLetra(letra): Boolean {
      letra = letra[0].toLowerCase();
      if (!this.letrasIngresadas.includes(letra)) {
         this.letrasIngresadas.push(letra);
         let result = this.perteneceLetraALaPalabra(letra);
         this.actualizarEstado();
         return result;
      }
   }

   perteneceLetraALaPalabra(letra): Boolean {
      if (this.palabra.split("").includes(letra)) {
         if (!this.letrasAcertadas.includes(letra)) {
            this.letrasAcertadas.push(letra);
         }
         return true;
      } else {
         if (!this.letrasErradas.includes(letra)) {
            this.letrasErradas.push(letra);
         }
         return false;
      }
   }
   mostrarLetrasAcertadas() {
      return this.letrasAcertadas;
   }

   mostrarLetrasErradas() {
      return this.letrasErradas;
   }

   actualizarEstado() {
      if (this.letrasErradas.length >= 7) {
         this.estadoDelJuego = this.estadoDerrota;
         this.agregarPuntajeErrado(this.nombreUsuario, this.dificultad);
         return;
      } else {
         const allIncluded = this.palabra.split("").reduce((carry, letra) => {
            return carry && this.letrasAcertadas.includes(letra);
         }, true);
         this.estadoDelJuego = allIncluded ? this.estadoVictoria : this.estadoJugando;

         if (allIncluded) {
            this.agregarPuntajeAcertado(this.nombreUsuario, this.dificultad);
         }
      }
   }

   getEstado() {
      return this.estadoDelJuego;
   }

   reiniciarPartida() {
      this.estadoDelJuego = this.estadoJugando;
      this.letrasIngresadas = [];
      this.letrasAcertadas = [];
      this.letrasErradas = [];

      this.obtenerPalabra();
   }

   setearNombreUsuario(nombre: string) {
      // Al setear nombre de usuario se crea un nuevo score.
      this.crearScoreBoard(nombre);
      return (this.nombreUsuario = nombre);
   }

   getPista(): string {
      if ([1, 2].includes(this.dificultad)) {
         return this.pista;
      } else {
         return "No se puede obtener una pista en dificultad alta!";
      }
   }

   setearDificultad(dificultad: string): Boolean {
      const DEFAULT_DIFICULTIES = {
         bajo: 1,
         medio: 2,
         alto: 3,
      };
      this.dificultad = DEFAULT_DIFICULTIES[dificultad] || "error";

      if (this.dificultad === "error") {
         this.dificultad = undefined;
         return false;
      } else {
         if (!environment.test) {
            switch (this.dificultad) {
               case 1:
                  this.palabrasUtilizadas = palabrasFaciles;
                  break;
               case 2:
                  this.palabrasUtilizadas = palabrasMedias;
                  break;
               case 3:
                  this.palabrasUtilizadas = palabrasDificiles;
                  break;
            }
         } else {
            this.palabrasUtilizadas = PalabraE2ETest;
         }
         return true;
      }
   }

   randomGenerator() {
      // Generador de numeros aleatorios seguro. Recomendado por el security hotspot de Sonarcloud
      // Este generador genera uniformemente entre 0 y 1.
      var arr = new Uint32Array(2);
      crypto.getRandomValues(arr);
      var mantissa = arr[0] * Math.pow(2, 20) + (arr[1] >>> 12);
      return mantissa * Math.pow(2, -52);
   }

   obtenerPalabra() {
      const cantPalabras = this.palabrasUtilizadas.length;
      const valor = Math.floor(this.randomGenerator() * cantPalabras);

      const palabraObject = this.palabrasUtilizadas[valor];

      this.palabra = palabraObject.palabra;
      this.pista = palabraObject.pista;

      return this.palabra;
   }

   // ------------ SCOREBOARD ------------ //
   crearScoreBoard(name: String) {
      if (this.scoreBoard.find((el) => el.name == name)) return;

      const newScore = {
         name,
         scores: [
            { tag: "Fácil", right: 0, wrong: 0 },
            { tag: "Medio", right: 0, wrong: 0 },
            { tag: "Difícil", right: 0, wrong: 0 },
         ],
      };
      this.scoreBoard.push(newScore);
      localStorage.scoreBoard = JSON.stringify(this.scoreBoard);
   }

   getScoreBoard() {
      if (this.scoreBoard.length === 0) {
         if (localStorage.scoreBoard) {
            this.scoreBoard = JSON.parse(localStorage.scoreBoard);
         }
      }
      return this.scoreBoard;
   }

   agregarPuntajeAcertado(nombre, dificultad) {
      if (nombre) {
         const index = this.scoreBoard.findIndex((el) => el.name == nombre);
         this.scoreBoard[index].scores[dificultad - 1].right++;
         localStorage.scoreBoard = JSON.stringify(this.scoreBoard);
      }
   }
   agregarPuntajeErrado(nombre, dificultad) {
      if (nombre) {
         const index = this.scoreBoard.findIndex((el) => el.name == nombre);
         this.scoreBoard[index].scores[dificultad - 1].wrong++;
         localStorage.scoreBoard = JSON.stringify(this.scoreBoard);
      }
   }
   resetearScore() {
      this.scoreBoard = [];
      localStorage.clear();
   }

   arriesgarPalabra(palabra: String): Boolean {
      const acentos = { á: "a", é: "e", í: "i", ó: "o", ú: "u" };
      palabra = palabra
         .toLowerCase()
         .split("")
         .map((letra) => acentos[letra] || letra)
         .join("")
         .toString();
      const result = palabra === this.palabra;
      if (result) {
         this.agregarPuntajeAcertado(this.nombreUsuario, this.dificultad);
         this.estadoDelJuego = this.estadoVictoria;
      } else {
         this.agregarPuntajeErrado(this.nombreUsuario, this.dificultad);
         this.estadoDelJuego = this.estadoDerrota;
      }

      return result;
   }
}
