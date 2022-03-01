import { Component, OnInit, Renderer2 } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemePickerService } from './services/theme-picker.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
   title = 'myApp';
   themes = ['dark-theme', 'light-theme'];

   constructor(
      public overlayContainer: OverlayContainer,
      private render: Renderer2,
      public themePicker: ThemePickerService
   ) {}

   ngOnInit() {
      this.themePicker.theme$.subscribe((theme) => this.setTheme(theme));
   }

   public setTheme(newTheme: string) {
      this.overlayContainer.getContainerElement().classList.add(newTheme);

      // remove old themes
      this.themes.forEach((theme) => {
         this.render.removeClass(document.body, theme);
      });
      console.log(document);
      this.render.addClass(document.body, newTheme);
   }
}
