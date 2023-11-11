const mkdirp = require("mkdirp");
const configurations = require("./src/init-project/fonts.js");

const copyFiles = require("codiedigital/dist/cjs/public/fonts/download-fonts-and-generate-css-fonts.js")

const source = "node_modules/codiedigital/dist/cjs";
const target = "public/fonts";

mkdirp.sync(target);

copyFiles({
  source,
  target,
  configurations,
});