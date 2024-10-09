import { PromptQuestionType } from "../types/inquirer.types";

/**
 * @description Stores all the UI prompt fields
 */

export const UI_PROMPT_FIELDS: PromptQuestionType = [
  {
    type: "input",
    name: "name",
    message: "Enter name for the workflow: ",
  },
  {
    type: "input",
    name: "run-name",
    message: "Enter name for the run (optional): ",
  },
];
