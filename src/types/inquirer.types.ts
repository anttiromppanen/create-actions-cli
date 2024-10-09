import { UnnamedDistinctQuestion } from "inquirer/dist/commonjs/types";

/**
 * Type for the prompt questions
 * @description This type is used to define the questions for the inquirer.prompt function
 */

export type PromptQuestionType = (UnnamedDistinctQuestion<{
  [x: string]: any;
}> & {
  name: string;
})[];
