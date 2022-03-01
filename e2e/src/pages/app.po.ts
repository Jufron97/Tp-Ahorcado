import { browser, by, element } from "protractor";

export class AppPage {
   async navigateTo(): Promise<unknown> {
      return browser.get(browser.baseUrl);
   }

   async getWelcomeMessage(): Promise<string> {
      return element(by.className("welcome-message")).getText();
   }

   async writeName(name: string): Promise<void> {
      const input = element(by.className("name-selector-input"));

      await input.sendKeys(name);
      await browser.sleep(100);
      return Promise.resolve();
   }

   async selectNameButton(): Promise<any> {
      return element(by.className("btn-select-name")).click();
   }

   async selectHardDifficulty() {
      return element(by.className("difficulty-selector-alto"))
         .click()
         .then(async (rta) => {
            await browser.sleep(100);
         });
   }
   async selectEasydDifficulty() {
      return element(by.className("difficulty-selector-bajo"))
         .click()
         .then(async () => {
            await browser.sleep(100);
         });
   }

   async askForHint() {
      return element(by.id("btn-pista"))
         .click()
         .then(async () => {
            await browser.sleep(1000);
         });
   }

   async getCurrentDirection() {
      const url = await browser.getCurrentUrl();
      const array = url.split("/");
      const word = array[array.length - 1];
      await browser.sleep(100);
      return word;
   }

   async isHintVissible(): Promise<Boolean> {
      const el = await element(by.className("mat-snack-bar-container"));
      return !!el;
   }

   async selectLetter(letter: string): Promise<void> {
      const letterButton = element(by.className(`key-selector-${letter}`));

      await letterButton.click();
      await browser.sleep(100);
      return Promise.resolve();
   }

   async getSweetAlertMessage() {
      // swal2-html-container es el id por defecto que le pone la libreria
      // al pop-up del mensaje de los mensajes.
      await browser.sleep(1000);
      const el = await element(by.id("swal2-html-container"));

      return el.getText();
   }

   async navigateToScorePage() {
      await browser.get("/score");
      await browser.sleep(200);
   }

   async getScoreboardByName(name: String): Promise<String> {
      const scoreboard = await element(by.className(`score-table-for-${name}`));
      const el = await scoreboard.element(by.className("name-text"));
      await browser.sleep(200);
      return el.getText();
   }
   
   async riskWord(word: string): Promise<void> {
      const input = element(by.className("name-selector-input"));
      await input.sendKeys(word);
      await element(by.id("btn-arriesgar")).click();
      await browser.sleep(2000);
      return Promise.resolve();
   }
}
