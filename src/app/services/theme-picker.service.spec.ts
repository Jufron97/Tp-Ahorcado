import { TestBed } from '@angular/core/testing';

import { ThemePickerService } from './theme-picker.service';

describe('ThemePickerService', () => {
   let service: ThemePickerService;

   beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(ThemePickerService);
   });

   it('should be created', () => {
      expect(service).toBeTruthy();
   });

   it('Debe avisar a los componentes subscritos cuando se emite un tema', () => {
      let themeSelected = service.currentTheme;
      service.theme$.subscribe((theme) => (themeSelected = theme));

      service.toggleTheme('otro-tema');
      expect(themeSelected).toEqual('otro-tema');
   });
});
