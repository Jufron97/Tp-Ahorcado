import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class ThemePickerService {
   constructor() {}

   currentTheme = 'light-theme';
   theme$ = new BehaviorSubject(this.currentTheme);

   toggleTheme(theme) {
      this.currentTheme = theme;
      this.theme$.next(theme);
   }
}
