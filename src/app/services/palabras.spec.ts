import { palabrasFaciles, palabrasMedias, palabrasDificiles, PalabraE2ETest } from './palabras';

describe('Palabras tests', () => {
   it('Cada palabra de dificultad BAJA y MEDIA debe tener contener palabra + test', () => {
      const palabras = palabrasFaciles.concat(palabrasMedias);

      palabras.forEach((element) => {
         expect(element.palabra).toBeTruthy();
         expect(element.pista).toBeTruthy();

         const isEmpty = element.pista == '';
         expect(isEmpty).toBeFalsy();
      });
   });
   it('Cada palabra de dificultad ALTA debe tener palabra pero no test', () => {
      palabrasDificiles.forEach((element) => {
         expect(element.palabra).toBeTruthy();
         expect(element.pista).toBe('');
      });
   });
   it('Las palabras de test debe tener pista', () => {
      PalabraE2ETest.forEach((element) => {
         expect(element.palabra).toBeTruthy();
         expect(element.pista).toBeTruthy();

         const isEmpty = element.pista == '';
         expect(isEmpty).toBeFalsy();
      });
   });
});
