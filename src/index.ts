#!/usr/bin/env node
import inquirer from "inquirer";
import inquirerPrompt from "inquirer-autocomplete-prompt";
import chalkAnimation from "chalk-animation";
inquirer.registerPrompt("autocomplete", inquirerPrompt);
import { countWords } from "./counter.js";
const promise = () => new Promise((res) => setTimeout(res, 2000));
let message = async () => {
  let welcome = chalkAnimation.radar(`Welcome to the Wordcounter CLI `);
  await promise();
  welcome.stop();
};

async function main() {
  await inquirer.prompt([
    {
      name: "text",
      type: "autocomplete",
      searchText: "counting",
      source: countWords,
      message: "input paragraph for word and characters counting",
    },
  ]);
  console.log(`THANKS FOR USING OUR SERVICE!`);
}
await message()
await main();
