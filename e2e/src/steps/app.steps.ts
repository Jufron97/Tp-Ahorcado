import { Before, Given, Then, When } from "@cucumber/cucumber";
import { expect } from "chai";
import { exception } from "node:console";
import { browser, by, element } from "protractor";

import { AppPage } from "../pages/app.po";

let page: AppPage;

Before(() => {
   page = new AppPage();
});
// -------------------- GIVEN ------------------- //
Given("I am on the home page", async () => {
   await page.navigateTo();
});

// -------------------- WHEN ------------------- //
When("I do nothing", () => {});

When("I write {string} in the name box", async (name: string) => {
   await page.writeName(name);
});
When("I press the select name button", async () => {
   await page.selectNameButton();
});
When("I select the hard difficulty", async () => {
   await page.selectHardDifficulty();
});
When("I select the easy difficulty", async () => {
   await page.selectEasydDifficulty();
});
When("I ask for a hint", async () => {
   await page.askForHint();
});
When("I select letter {string}", async (letter: string) => {
   await page.selectLetter(letter);
});

When("I navigate throw the score page", async () => {
   await page.navigateToScorePage();
});

When("I risk the word {string}", async (word: string) => {
   await page.riskWord(word);
});

// -------------------- THEN ------------------- //

Then("I should see the welcome message", async () => {
   expect(await page.getWelcomeMessage()).to.equal("Bienvenido!");
});

Then("I should see the welcome {string}", async (name: string) => {
   expect(await page.getWelcomeMessage()).to.equal(`Bienvenido, ${name}!`);
});

Then("I should be able to play the game", async () => {
   const url = await page.getCurrentDirection();
   expect(url).to.equal("game");
});

Then("A hint should appear", async () => {
   expect(await page.isHintVissible()).to.equal(true);
});

Then("I should see the defeat message", async () => {
   const message = await page.getSweetAlertMessage();
   expect(message).to.equal("Pulse continuar para jugar otra vez");
});

Then("I should see the victory message", async () => {
   const message = await page.getSweetAlertMessage();
   expect(message).to.equal("¡Acertaste la palabra!");
});

Then("I should see a score for {string}", async (name: string) => {
   expect(await page.getScoreboardByName(name)).to.equal(name);
});
