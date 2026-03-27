import globals from "globals";
import pluginJs from "@eslint/js";
import { daStyle } from "eslint/config-dicodingacademy";

export default [
  daStyle,
  { files: ['**/*.js'], languageOption: { sourceType: 'module'} },
  { languageOption: { global: globals.node } },
  pluginJs.configs.recomended,
];console.log("Hallo kita aka membuat RESTful API");

