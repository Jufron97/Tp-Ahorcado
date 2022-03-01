import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ThemePickerService } from 'src/app/services/theme-picker.service';

@Component({
   selector: 'app-color-switcher',
   template: ` <div class="switcher">
      <div
         (click)="toggleTheme()"
         matRipple
         [matRippleCentered]="true"
         [matRippleDisabled]="false"
         [matRippleUnbounded]="false"
         [matRippleRadius]="40"
         [matRippleColor]="rippleColor"
      >
         <mat-icon [ngStyle]="{ color: invertedRippleColor }">{{ icon }}</mat-icon>
      </div>
   </div>`,
   styleUrls: ['./color-switcher.scss'],
   animations: [
      trigger('direction', [
         transition('horiz <=> vert', [
            style({
               transform: `scale(1.5)`,
               opacity: 0,
            }),
            animate('.3s 0s ease-out'),
         ]),
      ]),
   ],
})
export class ColorSwitcherComponent {
   @Input() public lightMode: boolean = true;

   public get icon(): 'light_mode' | 'dark_mode' {
      return this.lightMode ? 'light_mode' : 'dark_mode';
   }
   public get rippleColor() {
      return this.lightMode ? 'white' : 'yellow';
   }
   public get invertedRippleColor() {
      return this.lightMode ? 'yellow' : 'white';
   }

   constructor(public themePicker: ThemePickerService) {}

   toggleTheme() {
      this.lightMode = !this.lightMode;
      const theme = this.icon.split('_')[0] + '-theme';
      this.themePicker.toggleTheme(theme);
   }
}
