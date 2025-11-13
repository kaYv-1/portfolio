import Jasmine from "jasmine";
import register from "@babel/register";
import "jsdom-global/register";

register({
  extensions: [".js", ".jsx"],
  presets: ["@babel/preset-env", "@babel/preset-react"],
  ignore: [/node_modules/],
});

const jasmine = new Jasmine();
jasmine.loadConfig({
  spec_dir: "spec",
  spec_files: ["**/*[sS]pec.jsx"],
  helpers: [],
  random: false,
  stopSpecOnExpectationFailure: false
});
jasmine.execute();
