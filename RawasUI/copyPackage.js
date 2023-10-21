const packageJson = require("./package.json");
const fse = require("fs-extra");
const srcDir = "./dist";
const destDir = `${packageJson.projectPath}/node_modules/rawasui/dist`;

try {
  fse.copySync(srcDir, destDir, { overwrite: true | false });
  console.log("success!");
} catch (err) {
  console.error(err);
}
