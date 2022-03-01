import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AhorcadoService } from 'src/app/services/ahorcado.service';
import { ThemePickerService } from 'src/app/services/theme-picker.service';
import Swal from 'sweetalert2';

@Component({
   selector: 'app-ahorcado',
   templateUrl: './ahorcado.component.html',
   styleUrls: ['./ahorcado.component.scss'],
})
export class AhorcadoComponent implements OnInit {
   constructor(
      private ahorcado: AhorcadoService,
      private router: Router,
      private themeService: ThemePickerService
   ) {}

   showingModal: boolean = false;
   showLaParca: boolean = false;
   imageTheme: string = '';

   @ViewChild('laParca') laParca: any;

   ngOnInit(): void {
      this.themeService.theme$.subscribe((theme) => (this.imageTheme = `ahorcado-img__${theme}`));
   }

   ngDoCheck() {
      const estadoDelJuego = this.ahorcado.estadoDelJuego;
      if (this.showingModal == true) {
         return;
      }

      if (estadoDelJuego === this.ahorcado.estadoDerrota) {
         this.showingModal = true;
         this.mostrarCartelPerdiste();
      }
      if (estadoDelJuego === this.ahorcado.estadoVictoria) {
         this.showingModal = true;
         this.mostrarCartelVictoria();
      }
   }

   async mostrarCartelPerdiste() {
      this.showLaParca = true;
      const html = this.laParca.nativeElement.innerHTML;
      Swal.fire({
         title: `¡La palaba era ${this.ahorcado.palabra}!`,
         html,
         imageHeight: 300,
         imageWidth: 300,
         imageAlt: 'Perdiste',
         confirmButtonText: 'Continuar',
         customClass: { popup: 'defeat-popup' },
         background: 'var(--bg)',
      }).then((rta) => {
         this.showingModal = false;
         this.showLaParca = false;
         // Reinicia el juego.
         this.ahorcado.reiniciarPartida();
         this.router.navigate(['game']);
      });
   }

   async mostrarCartelVictoria() {
      Swal.fire({
         title: '¡Perfecto!',
         text: '¡Acertaste la palabra!',
         icon: 'success',
         confirmButtonText: 'Continuar',
         background: 'var(--bg)',
      }).then((rta) => {
         this.showingModal = false;
         this.ahorcado.reiniciarPartida();
         this.ahorcado.obtenerPalabra();
      });
   }
}
