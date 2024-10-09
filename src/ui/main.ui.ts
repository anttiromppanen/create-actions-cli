import inquirer from "inquirer";
import { UI_PROMPT_FIELDS } from "../const/ui.const";
import { PromptQuestionType } from "../types/inquirer.types";

/**
 * Starts the CLI UI and prompts the user for information about the workflow
 *
 * This function should only handle the UI and not any logic
 * @returns Returns an object with the user's answers
 */

export default async function startUi() {
  const answers = await inquirer.prompt(UI_PROMPT_FIELDS);
  return answers;
}
