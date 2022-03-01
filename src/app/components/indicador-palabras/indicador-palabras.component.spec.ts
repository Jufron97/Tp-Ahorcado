import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AhorcadoService } from 'src/app/services/ahorcado.service';
import { AhorcadoComponent } from '../ahorcado/ahorcado.component';
import { DifficultySelectorComponent } from '../difficulty-selector/difficulty-selector.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IndicadorPalabrasComponent } from './indicador-palabras.component';
import { Overlay } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { servicesVersion } from 'typescript';

describe('IndicadorPalabrasComponent', () => {
   let component: IndicadorPalabrasComponent;
   let fixture: ComponentFixture<IndicadorPalabrasComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [
            BrowserAnimationsModule,
            RouterTestingModule.withRoutes([
               { path: 'game', component: AhorcadoComponent },
               { path: 'difficulty', component: DifficultySelectorComponent },
            ]),
         ],
         declarations: [IndicadorPalabrasComponent],
         providers: [AhorcadoService, MatSnackBar, Overlay],
      }).compileComponents();
   });

   beforeEach(() => {
      const ahorcadoService = TestBed.inject(AhorcadoService);
      ahorcadoService.setearDificultad('alto');

      fixture = TestBed.createComponent(IndicadorPalabrasComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('Debe devolver la palabra del servicio correctamente', () => {
      const ahorcadoService = TestBed.inject(AhorcadoService);

      ahorcadoService.setearDificultad('alto');
      const palabraServicio = ahorcadoService.palabra;
      const palabraComponente = component.palabraJuego().reduce((acum, letra) => acum + letra);

      expect(palabraServicio).toEqual(palabraComponente);
   });

   it("Debe redireccionar a '/difficulty' si no se selecciono una dificultad previamente", inject(
      [Router],
      (mockRouter: Router) => {
         const ahorcadoService = TestBed.inject(AhorcadoService);
         const spy = spyOn(mockRouter, 'navigate').and.stub();
         ahorcadoService.dificultad = null;
         fixture = TestBed.createComponent(IndicadorPalabrasComponent);
         component = fixture.componentInstance;
         fixture.detectChanges();

         expect(spy.calls.first().args[0]).toContain('difficulty');
      }
   ));

   it('Debe poder presionarse correctamente el botón de pedir pistas', () => {
      const rta = component.mostrarPista();
      expect(rta).toBeTruthy();
   });

   it('Si arriesgo una palabra, se debe colocar la palabra a arriesgar como un string vacio para la proxima palabra', () => {
      component.palabraAArriesgar = 'mochila';
      component.arriesgarPalabra(component.palabraAArriesgar);
      expect(component.palabraAArriesgar).toEqual('');
   });

   it('si arriesgo la palabra, con la palabra vacia no debe hacer nada', () => {
      const retorno = component.arriesgarPalabra('');
      expect(retorno).toBeUndefined();
   });
});
